import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faPlus, faPlay, faInfo} from '@fortawesome/free-solid-svg-icons';


function Icons () {

    return (
        <ul className="player" style={{fontSize:'1.2em', color:'white'}}>
            <li><button><FontAwesomeIcon icon={faPlus} style={{fontSize:'2em'}}/></button><br/><br/>Mylist</li>
            <li><button><FontAwesomeIcon icon={faPlay} style={{fontSize:'2em'}}/></button><br/><br/>Play</li>
            <li><button><FontAwesomeIcon icon={faInfo} style={{fontSize:'2em'}}/></button><br/><br/>Info</li>
        </ul>
    )

    }

export default Icons;