import React from 'react';

const services = [
  { title: 'Logo Designing', description: 'Create a unique and memorable logo that represents your brand.', imageSrc: 'https://img.freepik.com/premium-photo/ideas-creative-occupation-design_53876-61069.jpg?w=740' },
  { title: 'UX/UI Design', description: 'Design user-friendly interfaces that are easy to use and visually appealing at affoardable price ', imageSrc: 'https://img.freepik.com/free-vector/gradient-style-ui-ux-background_52683-69621.jpg?w=1060&t=st=1701410928~exp=1701411528~hmac=68f965786dcd13cb7ba722e992e5365e0bca53b1a5973099369c3b3496958325' },
  { title: 'Web Development', description: 'Develop high-performing and scalable web applications.', imageSrc: 'https://img.freepik.com/premium-vector/coding-develeopment-concept_894471-571.jpg?w=740' },
  { title: 'Software Consulting', description: 'Get expert advice on software development strategies and solutions.', imageSrc: 'https://img.freepik.com/free-photo/modern-equipped-computer-lab_23-2149241263.jpg?w=1060&t=st=1701411079~exp=1701411679~hmac=53f613f2d9a965016822496606c4ea145281ddf44cdfd8cd7060482181be1616' },
  { title: 'Maintenance and Support', description: 'Ensure your software applications are always up-to-date and running smoothly.', imageSrc: 'https://img.freepik.com/free-vector/maintenance-background-design_1294-45.jpg?1&w=740&t=st=1701411126~exp=1701411726~hmac=f716bddbcc67b0221a32a0ceb9645168a2f5b011283c5939f46a4e0d3d1a1495' },
  {
    title: "Mobile Development",
    description: "Create high-quality mobile apps for iOS and Android devices. And give more privacya and affordable price.",
    imageSrc: "https://img.freepik.com/free-vector/app-development-banner_33099-1720.jpg?w=1060&t=st=1701411163~exp=1701411763~hmac=a490bc801441657be7179cd96ace4a036c4d891ffc1804a4be08473ab295781f"
  },
  {
    title: "Search Engine Optimization (SEO)",
    description: "Improve your website's ranking in search engine results pages (SERPs).",
    imageSrc: "https://img.freepik.com/free-vector/seo-analytics-team-concept-illustration_114360-9255.jpg?w=1060&t=st=1701411221~exp=1701411821~hmac=9454fbf2354617b1910b261cfbadf7934c94ab520375a9292d3758da1ff0adb6"
  },
  { title: 'Branding', description: 'Build a strong brand identity that resonates with your target audience.', imageSrc: 'https://img.freepik.com/premium-vector/brand-yellow-word-lettering-typography-with-line-icons-tag-cloud_117177-679.jpg?w=1380' },
  
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
    <div className="container m-auto">
      <h1 className='text-3xl font-bold text-center my-4 text-gray-800/80'>Something We Are Good At:</h1>
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
