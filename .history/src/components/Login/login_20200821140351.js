import React from 'react';
import './login.css';
import fire from './fire';
import { MDBContainer, MDBAlert } from 'mdbreact';
import ReactNotification from 'react-notifications-component';
import 'react-notifications-component/dist/theme.css';
import { store } from 'react-notifications-component';
import 'animate.css';

const AlertPage = () => {
  return (
    <MDBContainer>
      <MDBAlert color='primary'>A simple primary alert—check it out!</MDBAlert>
    </MDBContainer>
  );
};
const myALERT = () => {
  store.addNotification({
    title: 'Wonderful!',
    message: 'teodosii@react-notifications-component',
    type: 'success',
    insert: 'top',
    container: 'top-right',
    animationIn: ['animated', 'fadeIn'],
    animationOut: ['animated', 'fadeOut'],
    dismiss: {
      duration: 5000,
      onScreen: true,
    },
  });
};

class login extends React.Component {
  constructor(props) {
    super(props);
    this.signIn = this.signIn.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.signup = this.signup.bind(this);

    this.state = {
      email: '',
      password: '',
    };
  }

  signIn(e) {
    e.preventDefault();
    this.props.history.push('/');
    fire
      .auth()
      .signInWithEmailAndPassword(this.state.email, this.state.password)
      .then((u) => {
        alert(user); //alert to display when user is authenticated
        console.log(u);
      })
      .catch((err) => alert(err.message));
  }
  //this is a sign up page that allows the user to sign and send information to the database
  signup(e) {
    e.preventDefault();
    this.props.history.push('/');
    fire
      .auth()
      .createUserWithEmailAndPassword(this.state.email, this.state.password)
      .then((u) => {
        console.log(u);
      })
      .catch((err) => alert(err.message));
  }

  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value,
    });
  }

  render() {
    return (
      <div className='login-page'>
        <div className='form_page'>
          <form className='login-form'>
            <input
              id='email'
              name='email'
              type='email'
              placeholder='email'
              onChange={this.handleChange}
              value={this.state.email}
            />
            <input
              id='password'
              name='password'
              type='password'
              placeholder='password'
              onChange={this.handleChange}
              value={this.state.password}
            />
            <button type='submit' onClick={this.signIn}>
              login
            </button>
            <p className='message'>
              Not registered?
              <button onClick={this.signup}>Create Account</button>
            </p>
          </form>
        </div>
      </div>
    );
  }
}

export default login;
