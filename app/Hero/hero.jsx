'use client'
import Link from 'next/link';
import React from 'react';
import { PageWrapper } from '../../components/PageWrapper';
import { TypeAnimation } from 'react-type-animation';

const Hero = () => {
  return (
    <div className="bg-transparent py-16 bg-cover bg-fixed">
      <div className="container mt-16 mx-auto px-4 text-left">
        <div className="flex ml-8 flex-col justify-between h-full lg:flex-col-reverse">
          <PageWrapper>
            <h1 className="text-2xl lg:text-4xl font-semibold text-gray-800 mb-4">Viz<span className='text-red-600 font-thin'>O</span>nix</h1>
            <h1 className="text-3xl lg:text-6xl text-gray-900 font-semibold my-8">
              We
              <span className="text-gray-900 font-semibold ml-1 text-base lg:text-3xl my-8">
                <TypeAnimation
                  sequence={[
                    'Build Websites',
                    1000,
                    'Design',
                    500,
                    'Build Software',
                    1000,
                  ]}
                  wrapper="span"
                  speed={50}
                  style={{ fontSize: '2em', display: 'inline-block' }}
                  repeat={Infinity}
                />
              </span>
            </h1>
          </PageWrapper>
        </div>
        <div className="flex justify-start mt-10 ml-8">
          <Link href="/">
            <button className="bg-gray-700 text-white px-4 py-2 rounded-md hover:bg-gray-600/50">Get Started</button>
          </Link>
          <Link href="/ContactUs">
            <button className="bg-gray-500/60 text-gray-900 px-4 py-2 rounded-md ml-4 hover:bg-gray-600 hover:text-white">Contact Us</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Hero;
