import React from 'react';
import { PageWrapper } from '../../components/PageWrapper';

const Projects = () => {
  return (
    <PageWrapper>

    <section id='/projects'>
    <div className="bg-gray-100 py-16">
  <div className="container mx-auto px-4">
    <h2 className="text-4xl font-semibold text-center text-gray-800 mb-4">Our Services</h2>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      <div className="rounded-lg overflow-hidden shadow-lg">
        <img
          src="https://images.unsplash.com/photo-1498049860654-af1a5c566876?auto=format&fit=crop&q=80&w=2070&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="Project 1"
          className="w-full h-48 object-cover"
          />
        <div className="p-6">
          <h3 className="text-xl font-semibold text-gray-800 mb-2">
            Project 1
          </h3>
          <p className="text-gray-600">
            Description of Project 1. Lorem ipsum dolor sit amet, consectetur
            adipiscing elit.
          </p>
        </div>
      </div>
      <div className="rounded-lg overflow-hidden shadow-lg">
        <img
          src="https://images.unsplash.com/photo-1498049860654-af1a5c566876?auto=format&fit=crop&q=80&w=2070&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="Project 2"
          className="w-full h-48 object-cover"
        />
        <div className="p-6">
          <h3 className="text-xl font-semibold text-gray-800 mb-2">
            Project 2
          </h3>
          <p className="text-gray-600">
            Description of Project 2. Lorem ipsum dolor sit amet, consectetur
            adipiscing elit.
          </p>
        </div>
      </div>
      <div className="rounded-lg overflow-hidden shadow-lg">
        <img
          src="https://images.unsplash.com/photo-1498049860654-af1a5c566876?auto=format&fit=crop&q=80&w=2070&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="Project 3"
          className="w-full h-48 object-cover"
          />
        <div className="p-6">
          <h3 className="text-xl font-semibold text-gray-800 mb-2">
            Project 3
          </h3>
          <p className="text-gray-600">
            Description of Project 3. Lorem ipsum dolor sit amet, consectetur
            adipiscing elit.
          </p>
        </div>
      </div>
    </div>
  </div>
</div>

    </section>
          </PageWrapper>
  );
};

export default Projects;
