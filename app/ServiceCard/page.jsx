import React from 'react';

const services = [
  { title: 'Logo Designing', description: 'Create a unique and memorable logo that represents your brand.', imageSrc: 'https://img.freepik.com/free-vector/abstract-low-poly-background_1048-11030.jpg?w=740&t=st=1701405285~exp=1701405885~hmac=41b2dda3d753a0e21b70467a605338d8bbcd79efdc2ab7c8d072fc56ebc33444' },
  { title: 'UX/UI Design', description: 'Design user-friendly interfaces that are easy to use and visually appealing.', imageSrc: 'https://img.freepik.com/free-photo/modern-background-with-geometrical-cubes_23-2148811485.jpg?w=1060&t=st=1701405385~exp=1701405985~hmac=978e1f1b8958d430a330df09cf412f7cd3dd7803c896863df3a8d6bb3a65db36' },
  { title: 'Web Development', description: 'Develop high-performing and scalable web applications.', imageSrc: 'https://img.freepik.com/free-vector/abstract-low-poly-background_1048-11030.jpg?w=740&t=st=1701405285~exp=1701405885~hmac=41b2dda3d753a0e21b70467a605338d8bbcd79efdc2ab7c8d072fc56ebc33444' },
  { title: 'Branding', description: 'Build a strong brand identity that resonates with your target audience.', imageSrc: 'https://img.freepik.com/free-photo/modern-background-with-geometrical-cubes_23-2148811485.jpg?w=1060&t=st=1701405385~exp=1701405985~hmac=978e1f1b8958d430a330df09cf412f7cd3dd7803c896863df3a8d6bb3a65db36' },
  { title: 'Software Consulting', description: 'Get expert advice on software development strategies and solutions.', imageSrc: 'https://img.freepik.com/free-vector/abstract-low-poly-background_1048-11030.jpg?w=740&t=st=1701405285~exp=1701405885~hmac=41b2dda3d753a0e21b70467a605338d8bbcd79efdc2ab7c8d072fc56ebc33444' },
  { title: 'Maintenance and Support', description: 'Ensure your software applications are always up-to-date and running smoothly.', imageSrc: 'https://img.freepik.com/free-photo/modern-background-with-geometrical-cubes_23-2148811485.jpg?w=1060&t=st=1701405385~exp=1701405985~hmac=978e1f1b8958d430a330df09cf412f7cd3dd7803c896863df3a8d6bb3a65db36' },
];

const ServicesCard = ({ title, description, imageSrc }) => {
  return (
    <div className="bg-slate-200 shadow-lg rounded-lg p-4 hover:scale-110 transition-transform">
      <img src={imageSrc} alt={title} className="w-full mb-2" />
      <h2 className="text-xl font-bold text-gray-900 mb-2">{title}</h2>
      <p className="text-gray-700">{description}</p>
    </div>
  );
};

const Services = () => {
  return (
    <div className="container mx-auto">
      <div className="flex flex-wrap justify-center">
        {services.map((service) => (
          <div className="w-1/2 md:w-1/3 lg:w-1/4 p-4" key={service.title}>
            <ServicesCard title={service.title} description={service.description} imageSrc={service.imageSrc} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
