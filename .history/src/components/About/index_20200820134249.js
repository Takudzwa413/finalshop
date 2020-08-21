// Dependencies
import React, { Component } from 'react';
// Internals
import './index.css';

class About extends Component {
  render() {
    return (
      <div id='about-main'>
        <div className='jumbotron'>
          <div className='jumbotron-inner'>
            <div className='top-box'>
              <div className='content-box'>
                <h1>About Next Dealership</h1>
                <p>
                  Next dealership is a company that sells brand new cars. <br />{' '}
                  Our mission is to make customers happy and satisfied.
                </p>
              </div>
            </div>
          </div>
          <div className='img-layer-container'>
            <div className='team-image' id='team-image'>
              <img
                id='myid'
                src='https://apimatic.io/img/theme/aboutUs/images-1.png'
                alt='take'
              />
            </div>
            <div className='circles-container'>
              <div className='img-1'>
                <img
                  id='myid'
                  src='https://apimatic.io/img/theme/aboutUs/Circles-1-1.svg'
                  alt='take'
                />
              </div>
              <div className='img-2'>
                <img
                  src='https://apimatic.io/img/theme/aboutUs/Circles-2-1.svg'
                  alt='take'
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default About;
