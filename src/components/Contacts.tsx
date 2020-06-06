import React from 'react';
import { FaInstagram, FaFacebook } from 'react-icons/fa';
import {
  AiFillGithub,
  AiFillTwitterCircle,
  AiFillDribbbleCircle,
  AiFillLinkedin,
} from 'react-icons/ai';
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from 'react-icons/md';

export const Contacts = () => {
  return (
    <div className='contacts--section'>
      <div className='container'>
        <div className='info--container'>
          <div className='label--container'>
            <p className='primary--label'>
              Let's make something amazing together.
            </p>
            <p className='say--hi'>
              Start by <span className='hi'>saying hi</span>
            </p>
          </div>
          <div className='contacts--details--container'>
            <p className='information--label'>Information</p>
            <p className='address--label'>Sainamaina-2, Rupandehi, Nepal</p>
            <p className='email--address'>sanjaylafamagar4@gmail.com</p>
            <div className='nav-items'>
              <p className='current'>
                <MdKeyboardArrowLeft size={18} />
                Services
                <MdKeyboardArrowRight size={18} />
              </p>
              <p className='nav--label'>Works</p>
              <p className='nav--label'>Notes</p>
              <p className='nav--label'>Contacts</p>
            </div>
          </div>
        </div>
        <div className='footer--section'>
          <div className='brand--section'>
            <p className='brand--label'>SanjayMagar</p>
            <p className='copy-right'>&copy; 2020. All Rights Reserved</p>
          </div>
          <div className='social--media--section'>
            <AiFillTwitterCircle
              className='social-media'
              size={18}
              color='#fff'
            />
            <FaInstagram className='social-media' size={18} color='#fff' />
            <FaFacebook className='social-media' size={18} color='#fff' />
            <AiFillGithub className='social-media' size={18} color='#fff' />
            <AiFillDribbbleCircle
              className='social-media'
              size={18}
              color='#fff'
            />
            <AiFillLinkedin className='social-media' size={18} color='#fff' />
          </div>
        </div>
      </div>
    </div>
  );
};
