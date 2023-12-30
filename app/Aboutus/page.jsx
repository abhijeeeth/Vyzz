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
    <section className="bg-white py-8">
      <div className="container mx-auto text-center">
        <div className="grid grid-cols-1">
          <div className="flex flex-col justify-center px-8">
            <h2 className="text-4xl font-semibold text-gray-800 mb-4 text-center ">About Us</h2>
            <p className="text-gray-600 text-[16px] mb-4 ">
              Vizonix is a leading web development company specializing in creating
              stunning and efficient websites. Our team of experienced developers
              and designers are dedicated to delivering high-quality web solutions.
            </p>
            <p className="text-gray-600 text-[16px] mb-4">
            Efficiency is woven into the fabric of our development process. We build websites that not only look great but also perform seamlessly. Our focus on optimization ensures that your website not only captures attention but retains it with fast loading times and flawless functionality across devices.
            </p>
            <p className="text-gray-600 text-[16px] mb-4">
            Vizonix boasts a team of seasoned developers and designers, each bringing a wealth of expertise to the table. With a commitment to staying on the cutting edge of technology, our experts ensure that our clients benefit from the latest and most innovative solutions the industry has to offer.
            </p>
            <p className="text-gray-600 text-[16px] mb-4">
            In the dynamic world of digital business, a strong online presence is not just advantageous – its essential. At the forefront of this digital transformation is Vizonix, a leading web development company dedicated to crafting stunning and efficient websites that propel businesses to new heights.
            </p>
            
            <p className="text-gray-600 text-[16px]">
            Recognizing the individuality of each project, Vizonix takes a personalized approach. Whether its an e-commerce platform, a corporate website, or a custom web application, our solutions are tailored to align with your specific business goals, ensuring a perfect fit for your unique needs.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
