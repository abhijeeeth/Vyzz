'use client'
import { useState } from 'react';
import React, { useEffect } from 'react';
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
import Loading from './PreLoader/page';



const Home = () => {
  const [isLoading, setisLoading] = useState(true)
  useEffect(()=>{
    const fakeDataFetch = () =>{
      setTimeout(()=>{
        setisLoading(false);
      },800);
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
