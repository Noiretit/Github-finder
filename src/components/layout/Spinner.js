import React, {Fragment} from 'react'
import spinner from './spinner.gif'

const Spinner = () => 
        <Fragment>
            <img src={spinner} alt="Loading..." style={{width: '200px', margin: 'auto', display: 'block'}} />
        </Fragment>

//With arrow functions, if there is no other Javascript (just JSX) we can 
//delete the return & curly braces, directly the Fragment
export default Spinner
