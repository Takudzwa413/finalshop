import React from 'react';
import fire from '../firebase/fire';
import 'firebase/auth'; // for authentication
import 'firebase/storage'; // for storage
import 'firebase/database'; // for realtime database
import 'firebase/firestore'; // for cloud firestore
import 'firebase/messaging'; // for cloud messaging
import 'firebase/functions';
import './Register.css';

class Register extends React.Component {
  render() {
    return (
      <div className='login-page'>
        <div className='form_page'>
          <form className='login-form'>
            <input id='email' type='email' placeholder='email' />
            <input id='password' type='password' placeholder='password' />
            <button type='submit'>login</button>
            <p className='message'>
              Not registered?
              <button>Create Account</button>
            </p>
          </form>
        </div>
      </div>
    );
  }
}

export default Register;
