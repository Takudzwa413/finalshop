import React, { useContext } from 'react';
import Header from '../Header/index.js';
import ProductList from '../../containers/ProductList/index.js';
import './styles.css';
import fire from '../Login/fire';
import login from '../Login/login';
import { firebaseAuth } from './AuthProvider';
import { Route, Switch, Redirect } from 'react-router-dom';

function App() {
  const { token } = useContext(firebaseAuth);
  console.log(token);
  return (
    <div className='App'>
      <Route
        exact
        path='/'
        render={(rProps) => (token === null ? <login /> : <login />)}
      />
      <Header />
      <div className='row'>
        <div className='col-sm-12'>
          <ProductList />
        </div>
      </div>
    </div>
  );
}

export default App;
