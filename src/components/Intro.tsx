import React from 'react';
import { DiCode } from 'react-icons/di';
import { AiOutlineDeploymentUnit } from 'react-icons/ai';
import Design from '../assets/design.png';
import Portrait from '../assets/Portrait.png';
import Mobile from '../assets/Mobile.png';
import Travel from '../assets/Travel.jpg';

export const Intro = () => {
  return (
    <div className='intro-section'>
      <div className=' container'>
        <div className='brief--intro--container'>
          <div className='work--brief--container'>
            <div className='work--container'>
              <div className='label--brief'>
                <p className='primary--label'>Design</p>
                <p className='secondary--label'>
                  Create digital products withh unique ideas
                </p>
                <a href='#' className='projects--count active'>
                  20 Projects
                </a>
              </div>
              <div className='icon--container'>
                <img
                  src={Design}
                  height={30}
                  width={30}
                  color='#5fba8e'
                  alt='design'
                />
              </div>
            </div>
            <div className='work--container'>
              <div className='label--brief'>
                <p className='primary--label'>Front-End</p>
                <p className='secondary--label'>
                  I develop front-end with coding super smooth
                </p>
                <a href='#' className='projects--count'>
                  165 Projects
                </a>
              </div>
              <div className='icon--container'>
                <DiCode size={35} color='#5fba8e' />
              </div>
            </div>
            <div className='work--container'>
              <div className='label--brief'>
                <p className='primary--label'>SEO</p>
                <p className='secondary--label'>
                  Boost your business with SEO optimize
                </p>
                <a href='#' className='projects--count'>
                  3 Projects
                </a>
              </div>
              <div className='icon--container'>
                <AiOutlineDeploymentUnit size={30} color='#5fba8e' />
              </div>
            </div>
          </div>
          <div className='brief--intro--container'>
            <p className='introduce'>Introduce</p>
            <p className='primary--intro--title'>
              Hello! I'm Sanjay Galami Magar
            </p>
            <p className='secondary--intro--title'>
              Every great design begin with an even better story
            </p>
            <p className='ternary--intro--tittle'>
              Since beginning my journey as a freelance designer nearly 8 years
              ago, I've done remote work for agencies, consulted for startup,and
              collaborated with talanted people to create digital products for
              both business and consumer use. I'm quietly confident, naturally
              curious, and perpetually workin on improving my chopsone design
              problem at a time.
            </p>
          </div>
        </div>
        <div className='latest-work--section'>
          <div className='start--section'>
            <div className='latest--work-label'>
              <p className='primary-title'>Latest Works</p>
              <p className='secondary--title'>
                Perfect solution for digital experience
              </p>
            </div>
            <div className='card--container'>
              <div className='card--title'>
                <p className='primary--card-title'>Lewis</p>
                <div className='tech--list'>
                  <p className='tech--title'>Javascript</p>
                  <p className='tech--title'>ExpressJS</p>
                  <p className='tech--title'>Graphql</p>
                </div>
              </div>
              <div className='cards--container'>
                <img className='cards' src={Portrait} alt='cards' />
              </div>
            </div>
            <div className='all--projects'>
              <p className='primary--label'>All Projects</p>
              <p className='secondary--label'>
                Some projects not allowe publish by NDA, if you want to see
                more,{' '}
                <a href='#' className='contact'>
                  contact
                </a>
              </p>
            </div>
          </div>
          <div className='end--section'>
            <div className='card--container'>
              <div className='card--title'>
                <p className='primary--card-title'>Finaco</p>
                <div className='tech--list'>
                  <p className='tech--title'>ReactJS</p>
                  <p className='tech--title'>DenoJS</p>
                  <p className='tech--title'>MongoDB</p>
                </div>
              </div>
              <div className='cards--container'>
                <img className='cards' src={Travel} alt='cards' />
              </div>
            </div>
            <div className='card--container'>
              <div className='card--title'>
                <p className='primary--card-title'>Focus</p>
                <div className='tech--list'>
                  <p className='tech--title'>Typescript</p>
                  <p className='tech--title'>ReactJS</p>
                  <p className='tech--title'>DenoJS</p>
                  <p className='tech--title'>Sass</p>
                </div>
              </div>
              <div className='cards--container'>
                <img className='cards' src={Mobile} alt='cards' />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
