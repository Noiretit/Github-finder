import React, { Component } from 'react'
import PropTypes from 'prop-types'
//impt shortcut for above

export class Navbar extends Component {

    // THIS WORKS AS A DEFAULT IN CASE PROPS ARE NOT PASSED FROM APP.JS
    // static defaultProps = {
    //     title: 'Github finder',
    //     icon: 'fab fa-github'
    // };

    // THIS SHOWS AN ERROR IN BROWSER CONSOLE IF PROPS ARE DIFFERENT DATA TYPE
    static propTypes = {
        title: PropTypes.string.isRequired,
        icon: PropTypes.string.isRequired
    }

    


    render() {
        return (
            <nav className="navbar bg-primary">
                <h1>
                <i className={this.props.icon} /> {this.props.title}</h1>
            </nav>
        )
    }
}

export default Navbar
