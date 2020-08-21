import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { auth } from '../firebase/firebase';
import './Register.css';

const Register = () => {
  return (
    <div className='login-page'>
      <div className='form'>
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
};

export default Register;
