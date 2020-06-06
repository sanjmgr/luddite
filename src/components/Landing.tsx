import React from 'react';
import { GrReactjs } from 'react-icons/gr';
import { FaPython } from 'react-icons/fa';
import JS from '../assets/javascript.png';

export const Landing = () => {
  return (
    <div className='landing-section'>
      <div className='landing--page container'>
        <div className='description--section'>
          <p className='designation--label'>Front End Developer</p>
          <div className='idiom'>
            <p className='idiom--label'>Talk is cheap.</p>
            <p className='idiom--label'>Show me the code</p>
          </div>
          <div className='work--description'>
            <p className='brief--description'>
              I design and code beautifully simple things, and I love what I do.
            </p>
          </div>
          <div className='chat'>
            <a href='#'>Let's chat!</a>
          </div>
          <div className='statistics--section'>
            <div className='experience statics'>
              <p className='statics--count'>2</p>
              <p className='statics--label'>Years Experience</p>
            </div>
            <div className='projects statics'>
              <p className='statics--count'>10</p>
              <p className='statics--label'>Projects completed</p>
            </div>
          </div>
        </div>
        <div className='tech--section'>
          <div className='tech--circle'>
            <div className='js'>
              <img src={JS} alt='JS' height={40} width={40} color='#25262a' />
            </div>
            <div className='reactjs'>
              <GrReactjs size={50} color='green' />
            </div>
            <div className='python'>
              <FaPython size={45} color='blue' />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
