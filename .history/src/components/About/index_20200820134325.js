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
        <div class='blog-card'>
          <div class='meta'>
            <div
              class='photo'
              style='background-image: url(https://storage.googleapis.com/chydlx/codepen/blog-cards/image-1.jpg)'
            ></div>
            <ul class='details'>
              <li class='author'>
                <a href='#'>John Doe</a>
              </li>
              <li class='date'>Aug. 24, 2015</li>
              <li class='tags'>
                <ul>
                  <li>
                    <a href='#'>Learn</a>
                  </li>
                  <li>
                    <a href='#'>Code</a>
                  </li>
                  <li>
                    <a href='#'>HTML</a>
                  </li>
                  <li>
                    <a href='#'>CSS</a>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
          <div class='description'>
            <h1>Learning to Code</h1>
            <h2>Opening a door to the future</h2>
            <p>
              {' '}
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad eum
              dolorum architecto obcaecati enim dicta praesentium, quam nobis!
              Neque ad aliquam facilis numquam. Veritatis, sit.
            </p>
            <p class='read-more'>
              <a href='#'>Read More</a>
            </p>
          </div>
        </div>
        <div class='blog-card alt'>
          <div class='meta'>
            <div
              class='photo'
              style='background-image: url(https://storage.googleapis.com/chydlx/codepen/blog-cards/image-2.jpg)'
            ></div>
            <ul class='details'>
              <li class='author'>
                <a href='#'>Jane Doe</a>
              </li>
              <li class='date'>July. 15, 2015</li>
              <li class='tags'>
                <ul>
                  <li>
                    <a href='#'>Learn</a>
                  </li>
                  <li>
                    <a href='#'>Code</a>
                  </li>
                  <li>
                    <a href='#'>JavaScript</a>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
          <div class='description'>
            <h1>Mastering the Language</h1>
            <h2>Java is not the same as JavaScript</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad eum
              dolorum architecto obcaecati enim dicta praesentium, quam nobis!
              Neque ad aliquam facilis numquam. Veritatis, sit.
            </p>
            <p class='read-more'>
              <a href='#'>Read More</a>
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default About;
