import React from 'react';
import './Footer.css';
import { FaLinkedin, FaGithub } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer>
      <a href='#' className='footer__logo'>
        Yonatan Schuster
      </a>
      <ul className='permalinks'>
        <li>
          <a href='#'>Home</a>
        </li>
        <li>
          <a href='#about'>About</a>
        </li>
        <li>
          <a href='#experience'>Experience</a>
        </li>
        <li>
          <a href='#portfolio'>Portfolio</a>
        </li>
        <li>
          <a href='#contact'>Contact</a>
        </li>
      </ul>
      <div className='footer__socials'>
        <a
          href='https://www.linkedin.com/in/yonatan-manuel-schuster/'
          target='_blank'
        >
          <FaLinkedin />
        </a>
        <a href='https://github.com/YonatanSchuster' target='_blank'>
          <FaGithub />
        </a>
      </div>
      <div className='footer__copyright'>
        <small>Yonatan Schuster &copy; {new Date().getFullYear()}</small>
      </div>
    </footer>
  );
};

export default Footer;
