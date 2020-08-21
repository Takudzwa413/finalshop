import React from 'react';
import './login.css';
import fire from './fire';
import { makeStyles } from '@material-ui/core/styles';
import Alert from '@material-ui/lab/Alert';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    '& > * + *': {
      marginTop: theme.spacing(2),
    },
  },
}));

export default function SimpleAlerts() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Alert severity='error'>This is an error alert — check it out!</Alert>
      <Alert severity='warning'>This is a warning alert — check it out!</Alert>
      <Alert severity='info'>This is an info alert — check it out!</Alert>
      <Alert severity='success'>This is a success alert — check it out!</Alert>
    </div>
  );
}

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
        alert(AlertPage); //alert to display when user is authenticated
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
