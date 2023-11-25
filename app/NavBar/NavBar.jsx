'use client'

import React, { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import { PageWrapper } from '../../components/PageWrapper';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef(null);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  // Close the menu when clicking outside of it
  const handleOutsideClick = (event) => {
    if (menuRef.current && !menuRef.current.contains(event.target)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleOutsideClick);

    return () => {
      document.removeEventListener('mousedown', handleOutsideClick);
    };
  }, []);

  return (
    <nav className="bg-gray-100/10 px-10 py-4 ">
      <div className="container mx-auto flex justify-between items-center">
        <PageWrapper>

        <Link href={'/'}>
        <div className="text-gray-700 font-bold text-xl">Vyz<span className='text-red-500 font-thin'>Onix</span> </div>
        </Link>
        </PageWrapper>
        {/* Hamburger menu for mobile */}
        <div className={`lg:hidden ${isOpen ? 'hidden' : 'block'}`}>
          <button
            onClick={toggleNavbar}
            className="text-gray-700 focus:outline-none focus:shadow-outline"
          >
            <svg
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              ></path>
            </svg>
          </button>
        </div>

        {/* Navbar links */}
        <div
          ref={menuRef}
          className={`${
            isOpen ? 'block' : 'hidden'
          } lg:flex lg:items-center lg:w-auto`}
        >
          <div className="text-lg lg:flex-grow">
            <a
              href="/"
              className="block mt-4 lg:inline-block lg:mt-0 text-gray-700 hover:text-gray-500 mr-4"
            >
              Home
            </a>
            <Link href={'/about'}>
            <p className="block mt-4 lg:inline-block lg:mt-0 text-gray-700 hover:text-gray-500 mr-4"
            >
              About
            </p>
            </Link>
            <a
              href="/"
              className="block mt-4 lg:inline-block lg:mt-0 text-gray-700 hover:text-gray-500"
            >
              Contact
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

