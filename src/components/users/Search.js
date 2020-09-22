import React, { Component } from 'react'
import PropTypes from 'prop-types'


class Search extends Component {
    //Crate a state to save the search query
    state = {
        text: ''
    };

    static propTypes = {
        searchUsers: PropTypes.func.isRequired
    }

    //It can also be more dinamically for only one input:
  //onChange = e => this.setState({ [e.target.name]: e.target.value })
    onChange = e =>  this.setState({ text: e.target.value });

    //This functions calls a method passed on props called "searchUsers" and passes
    //an argument, which is the input value, saved in the text
    //The functions resides in App.js, where it is passed as props to this actual component
    onSubmit = e => {
        e.preventDefault();
        this.props.searchUsers(this.state.text);
        this.setState({ text: '' });
    }

    render() {
        return (
            <div>
                <form className='form' onSubmit={this.onSubmit}>
                    <input type='text' name='text' placeholder='Search a user...' value={this.state.value} onChange={this.onChange}/>
                    <input type='submit' value='search' className='btn btn-dark btn-block' />
                </form>
            </div>
        )
    }
}

export default Search
