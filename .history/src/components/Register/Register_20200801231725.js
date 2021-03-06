import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { auth } from '../firebase/firebase';
import './Register.css';

class Register extends React.Component {
  login() {
    const email = document.querySelector('#email').value;
    const password = document.querySelector('#password').value;
    fire
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then((u) => {
        console.log('Successfully Signed Up');
      })
      .catch((err) => {
        console.log('Error: ' + err.toString());
      });
  }

  register() {
    const email = document.querySelector('#email').value;
    const password = document.querySelector('#password').value;
    fire
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then((u) => {
        console.log('Successfully Logged In');
      })
      .catch((err) => {
        console.log('Error: ' + err.toString());
      });
  }
  render() {
    return (
      <div className='login-page'>
        <div className='form_page'>
          <form className='login-form'>
            <input id='email' type='email' placeholder='email' />
            <input id='password' type='password' placeholder='password' />
            <button onClick={this.login} type='submit'>
              login
            </button>
            <p className='message'>
              Not registered?
              <button onClick={this.register}>Create Account</button>
            </p>
          </form>
        </div>
      </div>
    );
  }
}

export default Register;
