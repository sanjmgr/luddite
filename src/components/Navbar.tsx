import React from 'react';
import { Link } from 'react-router-dom';

import { FaInstagram } from 'react-icons/fa';
import { AiFillGithub } from 'react-icons/ai';
import { GoMail } from 'react-icons/go';
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from 'react-icons/md';

export const Navbar = () => {
  return (
    <div className='navbar--container'>
      <div className='container'>
        <nav className='navbar navbar-expand-lg pt-4 pb-4'>
          <Link className='navbar-brand brand-label' to='/'>
            <span>SANJMGR</span>
          </Link>
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
              <Link className='nav-item nav-link active' to='/intro'>
                <MdKeyboardArrowLeft size={24} />
                Intro <span className='sr-only'>(current)</span>
                <MdKeyboardArrowRight size={24} />
              </Link>
              <Link className='nav-item nav-link' to='/works'>
                Works
              </Link>
              <Link className='nav-item nav-link' to='/projects'>
                Projects
              </Link>
              <Link className='nav-item nav-link' to='/contacts'>
                Contacts
              </Link>
            </div>

            <div className='navbar-nav nav-content social-item'>
              <Link className='nav-item nav-link' to='/github'>
                <AiFillGithub size={18} />
                <span style={{ marginLeft: '8px' }}>Github</span>
              </Link>
              <Link className='nav-item nav-link' to='/instagram'>
                <FaInstagram size={15} />
                <span style={{ marginLeft: '8px' }}>Instagram</span>
              </Link>
              <Link className='nav-item nav-link' to='/email'>
                <GoMail size={20} />
              </Link>
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
};
