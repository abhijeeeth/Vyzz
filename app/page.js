'use client'
import React, { useEffect, useState } from 'react';
import Hero from './Hero/hero';
import Projects from './Project/Projects';
import UXUIDesignService from '@/components/UXUIDesignService';
import ServicesSection from '@/app/Service/ServicesSection';
import WebDevelopmentService from '@/app/WebDev/WEBDevService';
import WhyUs from './WhyVizonix/page';
import AboutUs from './Aboutus/page';
import ContactForm from './ContactUs/page';
import Footer from './Footer/page';
import Services from './ServiceCard/page';
import VerticalLinearStepper from './TimeLine/TimeLine';
import Loading from './PreLoader/page';



const Home = () => {
  const [isLoading, setisLoading] = useState(true)
  useEffect(()=>{
    const fakeDataFetch = () =>{
      setTimeout(()=>{
        setisLoading(false);
      },2100);
    };
    fakeDataFetch();
  },[]);


  return isLoading ?(
    <Loading/>
  ) :(
 

    <div className='bg-gray-100'
    style={{
      backgroundImage: `url('https://r4.wallpaperflare.com/wallpaper/89/177/75/artistic-minimalism-black-and-white-minimalist-wallpaper-f7ffb2049f354fba6f9214d101b13725.jpg')`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
      height: '800px',
      backgroundAttachment: 'fixed', 
    }}>
      <Hero/>
      <WhyUs/>
      <ServicesSection/>
      <VerticalLinearStepper/>
      <Services/>
      <Projects/>
      <UXUIDesignService/>
      <WebDevelopmentService/>
      <AboutUs/>
      <ContactForm/>
     
    </div>

  );
};

export default Home;
