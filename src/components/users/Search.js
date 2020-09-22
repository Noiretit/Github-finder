import React, { Component } from 'react'
import PropTypes from 'prop-types'


class Search extends Component {
    //Crate a state to save the search query
    state = {
        text: ''
    };

    static propTypes = {
        searchUsers: PropTypes.func.isRequired,
        clearUsers: PropTypes.func.isRequired,
        setAlert: PropTypes.func.isRequired,
    }

    //It can also be more dinamically for only one input:
  //onChange = e => this.setState({ [e.target.name]: e.target.value })
    onChange = e =>  this.setState({ text: e.target.value });

    //This functions calls a method passed on props called "searchUsers" and passes
    //an argument, which is the input value, saved in the text
    //The functions resides in App.js, where it is passed as props to this actual component
    onSubmit = e => {
        e.preventDefault();
        if (this.state.text === '') {
            this.props.setAlert('Please enter a username', 'light')
        } else {
            this.props.searchUsers(this.state.text);
            this.setState({ text: '' });
        };
    }

    render() {

        const { searched, clearUsers } = this.props;

        return (
            <div>
                <form className='form' onSubmit={this.onSubmit}>
                    <input type='text' name='text' placeholder='Search a user...' value={this.state.value} onChange={this.onChange}/>
                    <input type='submit' value='Search' className='btn btn-dark btn-block' />
                </form>

                {searched && 
                    <button className="btn btn-light btn-block" onClick={clearUsers}>Clear</button>}
                
            </div>
        )
    }
}

export default Search
