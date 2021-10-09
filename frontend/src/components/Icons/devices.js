import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faDesktop, faMobile, faGamepad, faTv} from '@fortawesome/free-solid-svg-icons';


export function DesktopIcon () {

    return (
        <div className="DesktopIcon"><FontAwesomeIcon icon={faDesktop}/></div>
        
    )
    }
export function MobileIcon () {

        return (
            <div className="MobileIcon"><FontAwesomeIcon icon={faMobile}/></div>
            
        )
        }
export function GamepadIcon () {

            return (
                <div className="GamepadIcon"><FontAwesomeIcon icon={faGamepad}/></div>
                
            )
            }
export function TvIcon () {

                return (
                    <div className="TvIcon"><FontAwesomeIcon icon={faTv}/></div>
                    
                )
                }