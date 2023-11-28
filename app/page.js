import React from 'react';
import Hero from './Hero/hero';
import Projects from './Project/Projects';
import UXUIDesignService from '@/components/UXUIDesignService';
import ServicesSection from '@/app/Service/ServicesSection';
import WebDevelopmentService from '@/app/WebDev/WEBDevService';
import AboutUs from './about/page';
import ContactForm from './ContactUs/page';
import VizonixPrivacyCommitment from './PrivacyService/Privacy';


const Home = () => {
  return (
 

    <div className='bg-gray-100'>
      <Hero/>
      <VizonixPrivacyCommitment/>
      <Projects/>
      <ServicesSection/>
      <UXUIDesignService/>
      <WebDevelopmentService/>
      <AboutUs/>
      <ContactForm/>
      
    </div>

  );
};

export default Home;
