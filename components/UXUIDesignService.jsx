import React from 'react';

const UXUIDesignService = () => {
  return (
    <div className="flex flex-col lg:flex-row bg-gray-100 rounded-lg p-8 text-[14px]">
      <div className="flex-shrink-0 lg:w-1/2 lg:mr-8">
        <h3 className="text-blue-500 font-bold text-3xl mb-4 text-center lg:text-left">UX/UI Designing</h3>
        <p className="text-gray-700 leading-relaxed text-center lg:text-left">
        Vizonix is a design firm that specializes in creating user-friendly and aesthetically pleasing interfaces for all devices. We believe that exceptional design goes beyond mere aesthetics; it involves crafting intuitive and engaging experiences that foster user satisfaction and drive business growth. Our team of experienced designers collaborates closely with clients to understand their unique needs and aspirations, transforming them into impactful digital experiences that resonate with target audiences. We meticulously craft every aspect of the user interface, from visual elements to interactive components, ensuring that each interaction is seamless and enjoyable. By prioritizing user-centricity and embracing visual appeal, Vizonix designs empower businesses to achieve their goals and cultivate lasting customer relationships.        </p>
      </div>
      <div className="flex-shrink-0 lg:hidden w-full">
        <img src="https://img.freepik.com/free-vector/gradient-ui-ux-background_52683-69316.jpg?w=1060&t=st=1700365897~exp=1700366497~hmac=cad1c1cad51b9e0d9311ca70092ca977c3d74509aa07e5b7cbd1c1611a4b4086" alt="UX/UI Design" className="shadow-md w-full h-auto rounded-lg" />
      </div>
      <div className="hidden lg:flex lg:w-1/2">
        <img src="https://img.freepik.com/free-vector/gradient-ui-ux-background_52683-69316.jpg?w=1060&t=st=1700365897~exp=1700366497~hmac=cad1c1cad51b9e0d9311ca70092ca977c3d74509aa07e5b7cbd1c1611a4b4086" alt="UX/UI Design" className="shadow-md w-full h-auto rounded-lg" />
      </div>
    </div>
  );
};

export default UXUIDesignService;
