import React from 'react';
import { FaInstagram } from 'react-icons/fa';
import { AiFillGithub } from 'react-icons/ai';
import { GoMail } from 'react-icons/go';
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from 'react-icons/md';

export const Navbar = () => {
  return (
    <div className='navbar--container'>
      <div className='container'>
        <nav className='navbar navbar-expand-lg pt-4 pb-4'>
          <a className='navbar-brand brand-label' href='#'>
            <span>Sanjay</span>
            <span style={{ opacity: 0.5 }}>Magar</span>
          </a>
          <button
            className='navbar-toggler'
            type='button'
            data-toggle='collapse'
            data-target='#navbarNavAltMarkup'
            aria-controls='navbarNavAltMarkup'
            aria-expanded='false'
            aria-label='Toggle navigation'
          >
            <span className='navbar-toggler-icon'></span>
          </button>
          <div className='collapse navbar-collapse' id='navbarNavAltMarkup'>
            <div className='navbar-nav nav-content'>
              <a className='nav-item nav-link active' href='#'>
                <MdKeyboardArrowLeft size={24} />
                Service <span className='sr-only'>(current)</span>
                <MdKeyboardArrowRight size={24} />
              </a>
              <a className='nav-item nav-link' href='#'>
                Works
              </a>
              <a className='nav-item nav-link' href='#'>
                Notes
              </a>
              <a className='nav-item nav-link' href='#'>
                Contacts
              </a>
            </div>

            <div className='navbar-nav nav-content social-item'>
              <a className='nav-item nav-link' href='#'>
                <AiFillGithub size={18} />
                <span style={{ marginLeft: '8px' }}>Github</span>
              </a>
              <a className='nav-item nav-link' href='#'>
                <FaInstagram size={15} />
                <span style={{ marginLeft: '8px' }}>Instagram</span>
              </a>
              <a className='nav-item nav-link' href='#'>
                <GoMail size={20} />
              </a>
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
};
