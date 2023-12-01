import React from 'react';
import { PageWrapper } from '../../components/PageWrapper';

const Projects = () => {
  return (
    <PageWrapper>
      <section id="/projects">
        <div className="bg-gray-100 py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-semibold text-center text-gray-800 mb-4">
              Types Projects
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="rounded-lg overflow-hidden shadow-lg">
                <img
                  src="https://img.freepik.com/free-vector/landing-page-travel-with-image_23-2148359296.jpg?w=1060&t=st=1701410371~exp=1701410971~hmac=917a5ea3b467f7b76d95b995580370e4f741f65dae1b77801acd2be82542d6d4"
                  alt="Project 1"
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">
                    Portfolio Websites
                  </h3>
                  <p className="text-gray-600">
                    Description of Project 1. Lorem ipsum dolor sit amet,
                    consectetur adipiscing elit.
                  </p>
                </div>
              </div>
              <div className="rounded-lg overflow-hidden shadow-lg">
                <img
                  src="https://img.freepik.com/free-vector/business-strategy-landing-page-template_52683-13519.jpg?w=1060&t=st=1701410416~exp=1701411016~hmac=c3b098e0dcd95f166ff5b8842b5f353bc09c63d5af39f68728a6ed84b28be723"
                  alt="Project 2"
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">
                    Ecommerce Sites
                  </h3>
                  <p className="text-gray-600">
                    Description of Project 2. Lorem ipsum dolor sit amet,
                    consectetur adipiscing elit.
                  </p>
                </div>
              </div>
              <div className="rounded-lg overflow-hidden shadow-lg">
                <img
                  src="https://img.freepik.com/free-vector/smart-home-management_23-2148607362.jpg?w=1060&t=st=1701410457~exp=1701411057~hmac=cf636be6f0b41de1fa3a67abd087fbb69bedfd735e9326eccc83898b6a852b06"
                  alt="Project 3"
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">
                    Admin Panel
                  </h3>
                  <p className="text-gray-600">
                    Description of Project 3. Lorem ipsum dolor sit amet,
                    consectetur adipiscing elit.
                  </p>
                </div>
                
              </div>

              <div className="rounded-lg overflow-hidden shadow-lg">
                <img
                  src="https://img.freepik.com/free-photo/saas-concept-collage_23-2149399295.jpg?w=1060&t=st=1701410521~exp=1701411121~hmac=592313a47686888b65283aa268ff598682533adb8840cb0240f1c2e404941103"
                  alt="Project 3"
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">
                    Software As A Service
                  </h3>
                  <p className="text-gray-600">
                    Description of Project 3. Lorem ipsum dolor sit amet,
                    consectetur adipiscing elit.
                  </p>
                </div>
                
              </div>

              <div className="rounded-lg overflow-hidden shadow-lg">
                <img
                  src="https://img.freepik.com/free-photo/representation-user-experience-interface-design-smartphone_23-2150165977.jpg?w=1060&t=st=1701410595~exp=1701411195~hmac=716125da2a5975bf1dfbb3a9f63645e075783cc837d9ea21f2adbfaef70a1973"
                  alt="Project 3"
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">
                    Android Apps
                  </h3>
                  <p className="text-gray-600">
                    Description of Project 3. Lorem ipsum dolor sit amet,
                    consectetur adipiscing elit.
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
                  Static Sites
                  </h3>
                  <p className="text-gray-600">
                    Description of Project 3. Lorem ipsum dolor sit amet,
                    consectetur adipiscing elit.
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
