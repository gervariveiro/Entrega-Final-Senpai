import React from 'react';
import {Link} from 'react-router-dom';

function  ButtonLogin () {

    return(
        <button className= "buttonlog"><Link to="/" style={{ textDecoration: 'none' , color:"white" }}>LOGIN NOW</Link></button>
    )
}

export default ButtonLogin;