import React from 'react';
import './login.css';
import fire from './fire';
import { MDBContainer, MDBAlert } from 'mdbreact';
import { auth } from 'firebase';

const AlertPage = () => {
  return (
    <MDBContainer>
      <MDBAlert color='success'>
        <h4 className='alert-heading'>Well done!</h4>
        <p>
          Aww yeah, you successfully read this important alert message. This
          example text is going to run a bit longer so that you can see how
          spacing within an alert works with this kind of content.
        </p>
        <hr />
        <p className='mb-0'>
          Whenever you need to, be sure to use margin utilities to keep things
          nice and tidy.
        </p>
      </MDBAlert>
    </MDBContainer>
  );
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
      errorR: 'User LOgin',
      errors: '',
    };
    const [error, setError] = useState(null);
  }

  signIn(e) {
    e.preventDefault();
    this.props.history.push('/');
    fire
      .auth()
      .signInWithEmailAndPassword(this.state.email, this.state.password)
      .then((u) => {
        setError('Error signing in with password and email!');
        alert(e.errorR); //alert to display when user is authenticated
        console.log(u);
      })
      .catch((err) => alert(err.message));
  }
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
