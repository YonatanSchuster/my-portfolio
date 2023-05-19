import React from 'react';
import './About.css';
//import ME from '../../assets/me.png';
import {
  FaGraduationCap,
  FaUserCheck,
  FaUserAlt,
  FaTools,
} from 'react-icons/fa';
import { GiSkills } from 'react-icons/gi';

const About = () => {
  return (
    <section id='about'>
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className='container about__container'>
        <div className='about__me'>
          <div className='about__me-img'>
            {/**<img src={ME} alt='About Image' />***/}
          </div>
        </div>
        <div className='about__content'>
          <p>
            Highly motivated and skilled software developer with experience as a
            customer success engineer at Adoric, a SaaS B2B company focused on
            web Conversion Rate Optimization and content personalization. <br />
            <br />
            Possessing a BSC in Computer Science and a strong understanding of
            software development principles and methodologies.
            <br />
            <br />
            Proven ability to learn quickly and adapt to new technologies.
            Strong problem-solving skills and a passion for creating efficient
            and user-friendly software. Seeking an opportunity to apply my
            knowledge and skills to a challenging software development role
          </p>
          <a href='#contact' className='btn btn-primary'>
            Let's Talk
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
