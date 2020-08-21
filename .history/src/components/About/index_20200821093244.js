// Dependencies
import React, { Component } from 'react';
// Internals
import './index.css';

class About extends Component {
  render() {
    return (
      <section id='timeline'>
        <h1>About Next Dealership</h1>
        <p className='leader'>
          Next dealership is a company that sells brand new cars. <br /> Our
          mission is to make customers happy and satisfied.
        </p>
        <div className='demo-card-wrapper'>
          <div className='demo-card demo-card--step1'>
            <div className='head'>
              <div className='number-box'>
                <span>01</span>
              </div>
              <h2>
                <span className='small'>Porshe</span> South Africa
              </h2>
            </div>
            <div className='body'>
              <p>
                A company that specialize of Porshe,Toyota ,Benz and Toyota.
                Founded by Takudzwa Vengai in 2004. We have served thousands of
                happy customers.Porsche is the most successful manufacturer of
                exclusive sports cars and has an outstanding reputation. This
                success is based on the desirability of the vehicles, but
                equally importantly, due to its unique corporate culture that is
                shaped by integrity and compliance. And it should stay that way.
                All board members, members of the management bodies, managers
                and employees make their own contributions every day according
                to the motto: Sporty and fair - that's typical Porsche.
              </p>
              <img
                src='https://media3.giphy.com/media/l0MYKAE0BbuPKEPNm/giphy.gif'
                alt='apimatic developer experience process'
                className='img-responsive'
              />
            </div>
          </div>
          <div className='demo-card demo-card--step2'>
            <div className='head'>
              <div className='number-box'>
                <span>02</span>
              </div>
              <h2>
                <span className='small'>VW</span> South Africa
              </h2>
            </div>
            <div className='body'>
              <p>
                Volkswagen was established in 1937 by the German Labour Front
                (Deutsche Arbeitsfront) in Berlin.[6] In the early 1930s, cars
                were a luxury – most Germans could afford nothing more elaborate
                than a motorcycle.
              </p>
              <img
                src='https://thumbs.gfycat.com/MealyPlumpAmazontreeboa-size_restricted.gif'
                alt='apimatic code generation engine'
                className='img-responsive'
              />
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
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Soluta
                reiciendis deserunt doloribus consequatur, laudantium odio
                dolorum laboriosam.
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
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Soluta
                reiciendis deserunt doloribus consequatur, laudantium odio
                dolorum laboriosam.
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
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Soluta
                reiciendis deserunt doloribus consequatur, laudantium odio
                dolorum laboriosam.
              </p>
              <img src='http://placehold.it/1000x500' alt='Graphic' />
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default About;
