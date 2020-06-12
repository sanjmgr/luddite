import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { DiCode } from 'react-icons/di';
import { AiOutlineDeploymentUnit } from 'react-icons/ai';
import { GiChart } from 'react-icons/gi';
import Typed from 'typed.js';

import MERN from '../assets/MERN.png';
import Netflix from '../assets/Netflix.png';
import Profile from '../assets/Profile.jpg';
import { Category } from './Category';
import { LatestWork } from './LatestWork';

const categoryObject = [
  {
    label: 'Design',
    description: 'Create digital products withh unique ideas',
    projectsCount: 26,
    Icon: AiOutlineDeploymentUnit,
    size: 30,
  },
  {
    label: 'Full Stack',
    description: 'Writing clean, functional code on the front- and back-end',
    projectsCount: 6,
    Icon: DiCode,
    size: 40,
  },
  {
    label: 'Data Viz',
    description: 'Make Sure Your Data Is Right for the Story.',
    projectsCount: 12,
    Icon: GiChart,
    size: 25,
  },
];

const latestWork = [
  {
    title: 'DevConnector',
    cards: MERN,
    techs: ['MongoDB', 'ExpressJS', 'ReactJS'],
  },
  {
    title: 'Netflix Clone',
    cards: Netflix,
    techs: [' HTML', 'SCSS', 'JavaScript'],
  },
];

export const Intro = () => {
  useEffect(() => {
    new Typed('.primary--intro--title', {
      typeSpeed: 100,
      startDelay: 100,
      smartBackspace: true,
      showCursor: true,
      backSpeed: 100,
      loop: true,
      strings: [
        "Hello! I'm Sanjay Gharti Magar",
        "I'm Computer Engineer",
        "I'm Full Stack developer",
      ],
    });
  }, []);

  return (
    <div className='intro-section'>
      <div className=' container'>
        <div className='brief--intro--container'>
          <div className='work--brief--container'>
            {categoryObject.map((category, index) => (
              <Category {...category} key={index} />
            ))}
          </div>
          <div className='brief--intro--container'>
            <p className='introduce'>Introduce</p>
            <p className='primary--intro--title'></p>
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
            <LatestWork
              {...{
                title: 'Profile UI',
                cards: Profile,
                techs: ['Javascript', 'React-Native'],
              }}
            />
            <div className='all--projects'>
              <p className='primary--label'>All Projects</p>
              <p className='secondary--label'>
                Some projects not allowe publish by NDA, if you want to see
                more, <Link to='/contacts'>contact</Link>
              </p>
            </div>
          </div>
          <div className='end--section'>
            {latestWork.map((project, index) => (
              <LatestWork {...project} key={index} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
