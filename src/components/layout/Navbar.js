import React from 'react'
import PropTypes from 'prop-types'
//impt shortcut for above

const Navbar = ( {icon, title}) =>  {
    return (
        <nav className="navbar bg-primary">
            <h1>
            <i className={icon} /> {title}</h1>
        </nav>
    )
}

// THIS SHOWS AN ERROR IN BROWSER CONSOLE IF PROPS ARE DIFFERENT DATA TYPE
Navbar.propTypes = {
    title: PropTypes.string.isRequired,
    icon: PropTypes.string.isRequired
};

// THIS WORKS AS A DEFAULT IN CASE PROPS ARE NOT PASSED FROM APP.JS
//When is a class = static defaultProps
//When is a functional component = {nameOfTheFunction}.defaultProps
    // static defaultProps = {
    //     title: 'Github finder',
    //     icon: 'fab fa-github'
    // };

export default Navbar
