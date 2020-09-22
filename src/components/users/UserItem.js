import React from 'react'
import PropTypes from 'prop-types'


const UserItem = ( { user: {login, avatar_url, html_url} } ) => {

    //I receive props from Users.js and show them in this card
    //const {login, avatar_url, html_url} = props.user;
    //We destructure props in the functional component argument
        
    return (
        <div className='card text-center'>
            <img 
            src={avatar_url}
            alt='' 
            className='round-img' 
            style={{width:'60px'}}
            />
            <h3>{login}</h3>
            <div>
                <a href={html_url} className='btn btn-dark btn-sm my-1'>Github profile</a>
            </div>
        </div>
    )
}

UserItem.propTypes = {
    //ptor shortcut para object
    user: PropTypes.object.isRequired,
}

export default UserItem
