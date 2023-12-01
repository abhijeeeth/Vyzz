import React from 'react';
import Hero from './Hero/hero';
import Projects from './Project/Projects';
import UXUIDesignService from '@/components/UXUIDesignService';
import ServicesSection from '@/app/Service/ServicesSection';
import WebDevelopmentService from '@/app/WebDev/WEBDevService';
import AboutUs from './about/page';
import ContactForm from './ContactUs/page';
import Footer from './Footer/page';
import Services from './ServiceCard/page';



const Home = () => {
  return (
 

    <div className='bg-gray-100'>
      <Hero/>
      <AboutUs/>
      <ServicesSection/>
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
