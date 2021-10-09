import React from 'react';
import {Link} from 'react-router-dom';

function  SingUpbutton () {

    return(
        <button className="buttonlog2"><Link to="/Register" style={{ textDecoration: 'none' , color:"white" }}>SIGN UP</Link></button>
    )
}

export default SingUpbutton;