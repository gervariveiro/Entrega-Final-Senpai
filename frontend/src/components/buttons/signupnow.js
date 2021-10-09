import React from 'react';
import {Link} from 'react-router-dom';

function  SingNowbutton () {

    return(
        <button className="buttonSignupNow"><Link to="/" style={{ textDecoration: 'none' , color:"white" }}>SIGN UP NOW</Link></button>
    )
}

export default SingNowbutton;