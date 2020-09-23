import React, { useState } from 'react'
import PropTypes from 'prop-types'


const Search = ({ searched, clearUsers, putAlert, searchUsers }) => {
    //Crate a state to save the search query
    // state = {
    //     text: ''
    // };

    const [text, setText] = useState('');

    // const onChange = e =>  this.setState({ text: e.target.value });
    const onChange = e =>  setText(e.target.value);

    const onSubmit = e => {
    e.preventDefault();
    if (text === '') {
        putAlert('Please enter a username', 'light')
    } else {
        searchUsers(text);
        setText('');
    };
    }


    return (
        <div>
            <form className='form' onSubmit={onSubmit}>
                <input type='text' name='text' placeholder='Search a user...' value={text} onChange={onChange}/>
                <input type='submit' value='Search' className='btn btn-dark btn-block' />
            </form>

            {searched && 
                <button className="btn btn-light btn-block" onClick={clearUsers}>Clear</button>}
            
        </div>
    )
}

Search.propTypes = {
    searchUsers: PropTypes.func.isRequired,
    clearUsers: PropTypes.func.isRequired,
    putAlert: PropTypes.func.isRequired,
};

export default Search
