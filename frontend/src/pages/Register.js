import React from 'react';
import Footer from '../components/footer/footer';
import SingNowbutton from '../components/buttons/signupnow';
import ButtonLogin2 from '../components/buttons/buttonlogin2';


function Register () {

  return (

    <div className="containerRegister">
      <div className="fotoyform1">
          <div className= "mainfoto2">
        <ButtonLogin2 />
          </div>
          <div className="form1">
                  <form className="form">
                      <input type= "name" className= "forminput" placeholder="Name"/>
                      <input type= "country" className= "forminput" placeholder="Country"/>
                      <input type= "pwd" className= "forminput" placeholder="Password"/>
                      <input type= "confirm pwd" className= "forminput" placeholder="Confirm Password"/>
                  </form>
          </div>
      </div>
      <div className="form2">
          <div className= "choose">
              <h3>Choose your plan</h3>
              <p>Acording with your plan you will have an specific<br/>catalogue of movies</p>
          </div>   
          <div className="inputform2">
              <input type="radio" name="latino" id="latino"/>
              <label for="latino">Latino +</label><br/>
              <input type="radio" name="international" id="international"/>
              <label for="international">International +</label><br/>
              <input type="radio" name="art" id="art"/>
              <label for="latino">Art +</label> <br/>
          </div>
          <SingNowbutton />
      </div>
    <Footer />
</div>
  )
}

export default Register;
