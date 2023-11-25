
import React from 'react';
import Hero from './Hero/hero';
import Projects from './Project/Projects';
import UXUIDesignService from '@/components/UXUIDesignService';
import ServicesSection from '@/app/Service/ServicesSection';
import WebDevelopmentService from '@/app/WebDev/WEBDevService';
import AboutUs from './about/page';


const Home = () => {
  return (
 

    <div className='bg-gray-100'>
      <Hero />
      <Projects/>
      <ServicesSection/>
      <UXUIDesignService/>
      <WebDevelopmentService/>
      <AboutUs/>
      
    </div>

  );
};

export default Home;
