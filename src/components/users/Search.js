import React, { useContext, useState } from 'react'
import PropTypes from 'prop-types'
import GithubContext from '../../context/github/githubContext'


const Search = ({ searched, clearUsers, putAlert }) => {
   const githubContext = useContext(GithubContext);

    const [text, setText] = useState('');

    const onChange = e =>  setText(e.target.value);

    const onSubmit = e => {
    e.preventDefault();
    if (text === '') {
        putAlert('Please enter a username', 'light')
    } else {
        githubContext.searchUsers(text);
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
    clearUsers: PropTypes.func.isRequired,
    putAlert: PropTypes.func.isRequired,
};

export default Search
