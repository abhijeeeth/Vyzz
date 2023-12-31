import React from 'react';

const ServicesSection = () => {
  return (
    
    <div className="container mx-auto text-center px-4 py-16 text-[14px] ">
      <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Our Services</h2>
      <div className="flex flex-wrap">
        <div className="w-full md:w-1/2 lg:w-1/4 p-4">
          <h3 className="text-2xl font-semibold text-gray-800 mb-4">UX/UI Design</h3>
          <p className="text-gray-700 leading-relaxed">Vizonix specializes in crafting user-centric and visually appealing interfaces that cater to all devices.</p>
        </div>
        <div className="w-full md:w-1/2 lg:w-1/4 p-4">
          <h3 className="text-2xl font-semibold text-gray-800 mb-4">Software Development</h3>
          <p className="text-gray-700 leading-relaxed">Vizonix is committed to providing their clients with high-quality software that meets their needs.</p>
        </div>
        <div className="w-full md:w-1/2 lg:w-1/4 p-4">
          <h3 className="text-2xl font-semibold text-gray-800 mb-4">Digital Marketing</h3>
          <p className="text-gray-700 leading-relaxed">Vizonix helps businesses market their digital products and services through a variety of channels.</p>
        </div>
        <div className="w-full md:w-1/2 lg:w-1/4 p-4">
          <h3 className="text-2xl font-semibold text-gray-800 mb-4">Software Consultation</h3>
          <p className="text-gray-700 leading-relaxed">Vizonix provides comprehensive software consultation services to help businesses
    achieve their digital goals.</p>
        </div>
      </div>
    </div>
  );
};

export default ServicesSection;
