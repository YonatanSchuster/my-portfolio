import React from 'react';
import Header from './components/Header/Header';
import Nav from './components/Nav/Nav';
import About from './components/About/About';
import Experience from './components/Experience/Experience';
import Portfolito from './components/Portfolio/Portfolio';
import Contacts from './components/Contacts/Contacts';
import Footer from './components/Footer/Footer';

const App = () => {
  return (
    <div>
      <Header />
      <Nav />
      <About />
      <Experience />
      <Portfolito />
      <Contacts />
      <Footer/>
    </div>
  );
};

export default App;
