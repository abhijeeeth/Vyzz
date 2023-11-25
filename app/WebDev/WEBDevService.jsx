import React from 'react';

const WebDevelopmentService = () => {
  return (
    <div className="flex flex-col lg:flex-row bg-gray-100 rounded-lg p-8 lg:p-16 text-[14px] ">
      <div className="lg:w-1/2 lg:ml-8">
        <img
          src="https://img.freepik.com/free-photo/website-html-code-browser-view-printed-white-paper-closeup-view_211682-166.jpg?w=1380&t=st=1700369741~exp=1700370341~hmac=583755a8cd4354bcea1390fb72855c9ee69c13ec06082ec3a75581d936a7878a"
          alt="Web Development"
          className="shadow-md w-full h-auto rounded-lg"
        />
      </div>
      <div className="flex-shrink-0 lg:w-1/2 lg:p-8">
        <h3 className="text-blue-500 font-bold text-3xl mb-4 text-center lg:text-left">Web Development</h3>
        <p className="text-gray-700 leading-relaxed text-center lg:text-justify ">Vizonix is a full-service web development agency that specializes in crafting high-quality, responsive, and user-friendly websites. We leverage cutting-edge technologies and design principles to create websites that not only look great but also function seamlessly and effectively. Our team of experienced web developers collaborates closely with clients to understand their unique requirements and goals, translating them into impactful digital solutions that drive business growth and achieve online success. Whether you need a simple brochure website or a complex e-commerce platform, Vizonix has the expertise and resources to deliver exceptional results.</p>
      </div>
    </div>
  );
};

export default WebDevelopmentService;
