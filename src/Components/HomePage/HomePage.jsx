import React, { useEffect } from 'react';
import Hero from './HeroSection/Hero';
import Perspectives from './Perspectives/Index';
import Blogs from './Blogs/Blogs';
import Digitalwrape from './Digitalwrape/Digitalwrape';
import WorkCounter from './WorkCounter/WorkCounter';
import Homeabout from './Homeabout/Homeabout';
import Contactform from './ContactForm/Contactform';

const HomePage = () => {

  function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }

  useEffect(() => {
    topFunction();
  }, []);
  return (
    <div>
      <Hero />
      <Perspectives />
      {/* <Blogs /> */}
      <Digitalwrape />
      {/* <WorkCounter /> */}
      <Homeabout />
      <Contactform />
    </div>
  );
};

export default HomePage;
