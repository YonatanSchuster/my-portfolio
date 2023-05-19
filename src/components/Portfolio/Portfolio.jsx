import React from 'react';
import './Portfolio.css';
import ME from '../../assets/me.png';
import adminmanagement from '../../assets/projectsImages/adminmanagment.png';
import anomalydetection from '../../assets/projectsImages/anomalydetection.png';
import chatapp from '../../assets/projectsImages/chatapp.png';
import crownclothing from '../../assets/projectsImages/crownclothing.png';
import musimatch from '../../assets/projectsImages/musimatch.png';

const data = [
  {
    id: 1,
    image: adminmanagement,
    title:
      'Admin managment dashboard system that can fit any e-commerce web app',
    desc: '',
    github: 'https://github.com/YonatanSchuster/eCommerceAdminDashboard',
    demo: 'https://github.com/YonatanSchuster/eCommerceAdminDashboard',
  },
  {
    id: 2,
    image: chatapp,
    title: 'Real time Chat app',
    desc: '',
    github: 'https://github.com/YonatanSchuster/nodeJS-chat-app',
    demo: 'https://replit.com/@YonatanSchuster/nodeJS-chat-app?v=1',
  },
  {
    id: 3,
    image: musimatch,
    title:
      'A admin managment system of a real Android application where he can see different statistics about the users.',
    desc: '',
    github: 'https://github.com/YonatanSchuster/MusiMatch-admin_management',
    demo: 'https://github.com/YonatanSchuster/MusiMatch-admin_management',
  },
  {
    id: 4,
    image: crownclothing,
    title: 'A E-commerce web app for a clothing brand',
    github: 'https://github.com/YonatanSchuster/CRWN-CLOTHING#crwn-clothing-',
    demo: 'https://lambent-banoffee-8ac40d.netlify.app/',
  },
  {
    id: 5,
    image: anomalydetection,
    title:
      'A desktop application that exports flight data and displays it in a user-friendly GUI.',
    desc: '',
    github:
      'https://github.com/YonatanSchuster/Anomaly-Detections-flight-simulator-',
    demo: 'https://github.com/YonatanSchuster/Anomaly-Detections-flight-simulator-',
  },
];

const Portfolio = () => {
  //2:18:50 change it to map!!
  return (
    <section id='portfolio'>
      <h5>My Recent Projects</h5>
      <h2>Portfolio</h2>

      <div className='container portfolio__container'>
        {data.map(({ id, image, title, desc, github, demo }) => {
          return (
            <article key={id} className='portfolio__item'>
              <div className='portfolio__item-img'>
                <img src={image} alt='title' />
              </div>
              <h3>{title}</h3>
              <p>{desc}</p>
              <div className='portfolio__item-cta'>
                <a href={github} className='btn' target='_blank'>
                  Github
                </a>
                <a href={demo} className='btn btn-primary' target='_blank'>
                  Live Demo
                </a>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Portfolio;

// link to the mockups
// https://www.figma.com/file/whw3d38QfSxNVq65okd9Jj/Free-iMac-Mockup-(Community)?type=design&node-id=0-37&t=0LbvwQEhyVUhENUU-0
