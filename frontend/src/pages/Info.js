import React from 'react';
import Footer from '../components/footer/footer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faDesktop, faMobile, faGamepad, faTv} from '@fortawesome/free-solid-svg-icons';
import ButtonLogin from '../components/buttons/buttonlogin2';
import SingUpbutton from '../components/buttons/signup';

function Info () {

  return (

  <div className="containerInfo">
        <div className= "mainfoto3">
            <ButtonLogin />
        </div>        
        <div className="onemore">
            <h4>One more streaming app, may it will be the best</h4>
            <h3>USD 10.50/month</h3>
            <h5>*Price may vary depending on the currency or platform used for payment.<br/>
                Third-party fees may apply.</h5>
            <div className="divsignup-now">
                <SingUpbutton/>
            </div>  
            <h1>Watch the way you want</h1>
            <h4>Enjoy the big screen experience on your TV, or <br/>
            watch on your tablet, laptop, phone and more. You <br/>
            can watch an ever-growing selection of titles in 4K. <br/>
            Plus, you can stream on 4 screens at once, so <br/>
            everyone’s happy.</h4>
            <h1>Available on your favorite devices</h1>
        </div>
        <div className="devices">
            <div className="tv">
              <div className="TvIcon" style={{fontSize:'4.5em', color:'white'}}><FontAwesomeIcon icon={faTv}/></div>
                <p>Amazon Fire TV</p>
                <p>Android</p>
                <p>Apple TV</p>
                <p>Chromecast</p>
                <p>LG TVs</p>
                <p>Roku</p>
                <p>Samsung</p>
            </div>
            <div className="computer">
                <div className="DesktopIcon" style={{fontSize:'4.5em', color:'white'}}><FontAwesomeIcon icon={faDesktop}/></div>
                <p>Chrome OS</p>
                <p>MacOS</p>
                <p>Windows PC </p>
            </div>
            <div className="mobile">
                <div className="MobileIcon" style={{fontSize:'4.5em', color:'white',}}><FontAwesomeIcon icon={faMobile}/></div>
                <p>Amazon Fire Tablets</p>
                <p>Android Phones & iPad</p>
                 <p>iPhone & iPad</p>
            </div>
            <div className="consoles">
                <div className="GamepadIcon" style={{fontSize:'4.5em', color:'white'}}><FontAwesomeIcon icon={faGamepad}/></div>
                <p>PS4</p>
                <p>PS5</p>
                <p>Xbox One</p>
                <p>Xbox Series X </p>
                <p>Xbox Series S </p>
            </div>
        </div>
        <Footer />
    </div>
  )
}

export default Info;
