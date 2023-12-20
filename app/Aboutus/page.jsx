'use client'
import React, { useEffect, useState } from 'react';
import Loading from '../PreLoader/page';


const AboutUs = () => {
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
    <section className="bg-gray-100 py-16">
      <div className="container mx-auto px-4 text-center">
        <div className="grid grid-cols-1 gap-8 mx-20">
          <div className="flex flex-col justify-center">
            <h2 className="text-4xl font-semibold text-gray-800 mb-4">About Us</h2>
            <p className="text-gray-600 text-[14px] mb-4">
              Vizonix is a leading web development company specializing in creating
              stunning and efficient websites. Our team of experienced developers
              and designers are dedicated to delivering high-quality web solutions.
            </p>
            <p className="text-gray-600 text-[14px]">
              We pride ourselves on our commitment to excellence and client
              satisfaction. Contact us today to start your web development journey
              with Vizonix.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
