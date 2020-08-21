// Dependencies
import React, { Component, Fragment } from 'react';
// Internals
import './index.css';

class About extends Component {
  render() {
    return (
      <div>
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
        <section id='timeline'>
          <h1>A Flexbox Timeline</h1>
          <p className='leader'>
            All cards must be the same height and width for space calculations
            on large screens.
          </p>
          <div className='demo-card-wrapper'>
            <div className='demo-card demo-card--step1'>
              <div className='head'>
                <div className='number-box'>
                  <span>01</span>
                </div>
                <h2>
                  <span className='small'>Subtitle</span> Technology
                </h2>
              </div>
              <div className='body'>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Soluta reiciendis deserunt doloribus consequatur, laudantium
                  odio dolorum laboriosam.
                </p>
                <img src='http://placehold.it/1000x500' alt='Graphic' />
              </div>
            </div>
            <div className='demo-card demo-card--step2'>
              <div className='head'>
                <div className='number-box'>
                  <span>02</span>
                </div>
                <h2>
                  <span className='small'>Subtitle</span> Confidence
                </h2>
              </div>
              <div className='body'>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Soluta reiciendis deserunt doloribus consequatur, laudantium
                  odio dolorum laboriosam.
                </p>
                <img src='http://placehold.it/1000x500' alt='Graphic' />
              </div>
            </div>
            <div className='demo-card demo-card--step3'>
              <div className='head'>
                <div className='number-box'>
                  <span>03</span>
                </div>
                <h2>
                  <span className='small'>Subtitle</span> Adaptation
                </h2>
              </div>
              <div className='body'>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Soluta reiciendis deserunt doloribus consequatur, laudantium
                  odio dolorum laboriosam.
                </p>
                <img src='http://placehold.it/1000x500' alt='Graphic' />
              </div>
            </div>
            <div className='demo-card demo-card--step4'>
              <div className='head'>
                <div className='number-box'>
                  <span>04</span>
                </div>
                <h2>
                  <span className='small'>Subtitle</span> Consistency
                </h2>
              </div>
              <div className='body'>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Soluta reiciendis deserunt doloribus consequatur, laudantium
                  odio dolorum laboriosam.
                </p>
                <img src='http://placehold.it/1000x500' alt='Graphic' />
              </div>
            </div>
            <div className='demo-card demo-card--step5'>
              <div className='head'>
                <div className='number-box'>
                  <span>05</span>
                </div>
                <h2>
                  <span className='small'>Subtitle</span> Conversion
                </h2>
              </div>
              <div className='body'>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Soluta reiciendis deserunt doloribus consequatur, laudantium
                  odio dolorum laboriosam.
                </p>
                <img src='http://placehold.it/1000x500' alt='Graphic' />
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default About;
