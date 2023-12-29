"use client";
import React, { useEffect, useState } from "react";
import {
  FaDribbbleSquare,
  FaFacebookSquare,
  FaGithubSquare,
  FaTwitterSquare,
} from "react-icons/fa";
import Animations from "../FooterLoader/page";

function Footer() {
  const [isLoading, setisLoading] = useState(true);
  useEffect(() => {
    const fakeDataFetch = () => {
      setTimeout(() => {
        setisLoading(false);
      }, 4000);
    };
    fakeDataFetch();
  }, []);

  return isLoading ? (
    <div>
      <Animations />
      <Animations />
      <Animations />
      <Animations />
    </div>
  ) : (
    <div className="max-w-[1520] m-auto px-4 py-2 bg-[#24262b]">
      <div className=" py-6 px-4 grid sm:grid-cols-1 lg:grid-cols-3 gap-6 text-gray-400">
        <div>
          <h1 className="w-full text-3xl tracking-[4px] font-semibold text-orange-700 ">
            VyzOnix
          </h1>
          <p>
            Lorem ipsum dolor sit amet consecteture autem est assumenda ipsum
            dolorum aliquam unde fugiat officia sunt et natus nesciunt, illo
            inventore!
          </p>
          <div className="flex justify-between md:w-[75%] my-6">
            <FaFacebookSquare size={20} />
            <FaGithubSquare size={20} />
            <FaTwitterSquare size={20} />
            <FaDribbbleSquare size={20} />
          </div>
        </div>
        <div className="lg:col-span-2 flex justify-between mt-6">
          <div>
            <h6 className="font-medium text-[#9b9b9b]">Location</h6>
            <ul>
              <li className="py-2 text-sm">New York</li>
              <li className="py-2 text-sm">USA</li>
              <li className="py-2 text-sm">India</li>
              <li className="py-2 text-sm">Canada</li>
            </ul>
          </div>
          <div>
            <h6 className="font-medium text-[#9b9b9b]">Location</h6>
            <ul>
              <li className="py-2 text-sm">New York</li>
              <li className="py-2 text-sm">USA</li>
              <li className="py-2 text-sm">India</li>
              <li className="py-2 text-sm">Canada</li>
            </ul>
          </div>
          <div>
            <h6 className="font-medium text-[#9b9b9b]">Location</h6>
            <ul>
              <li className="py-2 text-sm">New York</li>
              <li className="py-2 text-sm">USA</li>
              <li className="py-2 text-sm">India</li>
              <li className="py-2 text-sm">Canada</li>
            </ul>
          </div>
          <div>
            <h6 className="font-medium text-[#9b9b9b]">Location</h6>
            <ul>
              <li className="py-2 text-sm">New York</li>
              <li className="py-2 text-sm">USA</li>
              <li className="py-2 text-sm">India</li>
              <li className="py-2 text-sm">Canada</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
