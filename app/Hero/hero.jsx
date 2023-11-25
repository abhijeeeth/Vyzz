import fetch from 'node-fetch';
const { Headers } = fetch;
import Link from 'next/link';
import React from 'react';
import { PageWrapper } from '../../components/PageWrapper';

const Hero = () => {
  return (
    <div className="bg-gray-100 py-16 bg-cover bg-fixed" style={{
      backgroundImage: `url('https://img.freepik.com/free-photo/many-blank-business-cards_23-2147725078.jpg?w=1060&t=st=1700885856~exp=1700886456~hmac=544d74e321c7166c3f0329aa2708b30206ad9ca94051029db7798224ad90f242')`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
      height: '500px',
    }}>
      <div className="container mt-16 mx-auto px-4 text-center">
        <div className="flex flex-col justify-between h-full lg:flex-col-reverse">
          <PageWrapper>
            <h1 className="text-4xl font-semibold text-gray-800 mb-4">Viz<span className='text-red-600 font-thin'>O</span>nix</h1>
            <p className="text-gray-600 text-lg my-8">
              Web development company specializing in creating stunning and efficient websites.
            </p>
          </PageWrapper>
        </div>
        <div className="flex justify-center mt-10">
          <Link href="/">
            <button className="bg-gray-700 text-white px-4 py-2 rounded-md hover:bg-gray-600">Get Started</button>
          </Link>
          <Link href="/contact">
            <button className="bg-gray-500/60 text-gray-900 px-4 py-2 rounded-md ml-4 hover:bg-gray-600 hover:text-white">Contact Us</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Hero;
