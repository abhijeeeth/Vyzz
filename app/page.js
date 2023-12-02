
import React from 'react';
import Hero from './Hero/hero';
import Projects from './Project/Projects';
import UXUIDesignService from '@/components/UXUIDesignService';
import ServicesSection from '@/app/Service/ServicesSection';
import WebDevelopmentService from '@/app/WebDev/WEBDevService';
import AboutUs from './WhyVizonix/page';
import ContactForm from './ContactUs/page';
import Footer from './Footer/page';
import Services from './ServiceCard/page';
import VerticalLinearStepper from './TimeLine/TimeLine';



const Home = () => {
  return (
 

    <div className='bg-gray-100'>
      <Hero/>
      <AboutUs/>
      <ServicesSection/>
      <VerticalLinearStepper/>
      <Services/>
      <Projects/>
      <UXUIDesignService/>
      <WebDevelopmentService/>
      <ContactForm/>
      <Footer/>

    </div>

  );
};

export default Home;
