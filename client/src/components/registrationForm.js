import React, {useState} from 'react';
import './style.css'
function RegistrationForm() {
    return(
      <div className="form">
          <div className="form-body">
              <div className="username">
                  <label className="form__label" for="firstName">First Name </label>
                  <input className="form__input" type="text" id="firstName" placeholder="First Name"/>
              </div>
              {/* <div className="lastname">
                  <label className="form__label" for="lastName">Last Name </label>
                  <input  type="text" name="" id="lastName"  className="form__input"placeholder="LastName"/>
              </div> */}
              <div className="email">
                  <label className="form__label" for="email">Email </label>
                  <input  type="email" id="email" className="form__input" placeholder="Email"/>
              </div>

              <div className="phone">
                  <label className="form__label" for="phone number">Phone Number </label>
                  <input  type="text" id="phone" className="form__input" placeholder="phone number"/>
              </div>

              <div className="gender">
                  <label className="form__label" for="gender">Gender </label>
                  <input  type="text" id="gender" className="form__input" placeholder="Gender"/>
              </div>
              <div className="Dob">
                  <label className="form__label" for="password">DOB </label>
                  <input className="form__input" type="Date"  id="DOB" placeholder="DOB"/>
              </div>
              <div className="preference">
                  <label className="form__label" for="preference"> Schedule Preference</label>
                  <br></br>
                  morning 6:00 AM to morning 9:00AM
                  <input className="form__input" type="radio" id="preference" placeholder="Confirm Password"/>
                  <br></br>

                  morning 6:00 AM to morning 9:00AM
                  <input className="form__input" type="radio" id="preference" placeholder="Confirm Password"/>

                  <br></br>

                  morning 6:00 AM to morning 9:00AM
                  <input className="form__input" type="radio" id="preference" placeholder="Confirm Password"/>

                  <br></br>

                  morning 6:00 AM to morning 9:00AM
                  <input className="form__input" type="radio" id="preference" placeholder="Confirm Password"/>
              </div>
          </div>
          <div class="footer">
              <button type="submit" class="btn">Register</button>
          </div>
      </div>      
    )       
}
export default RegistrationForm;