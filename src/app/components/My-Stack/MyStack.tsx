"use client";
import React from 'react';
import Headers from '../Custom/Headers';
import Image from 'next/image';
import { MY_STACK } from '@/lib/data';

const MyStack = () => {
  return (
    <div id="stack" className="mx-auto lg:mt-10 px-4 py-10 w-full max-w-6xl">
      <div className="flex flex-col lg:flex-row items-center justify-between mb-10">
        {/* Header on the right side */}
        <div className="w-full lg:w-1/3 flex py-4  items-center justify-center">
          <Headers title={'My Stack'} />
        </div>

        {/* Stack items on the left side */}
        <div className="w-full lg:w-2/3 grid grid-cols-4 sm:grid-cols-3 md:grid-cols-4 gap-5 mt-6 md:mt-0">
          {MY_STACK.map((item) => (
            <div
              key={item.name}
              className="border md:border-red-700 bg-white/10 backdrop-blur-md rounded-md p-4 flex gap-3 items-center shadow-md hover:scale-105 transition-all duration-300"
            data-aos="fade-left"
     data-aos-offset="300"
      data-aos-duration="6000"
     data-aos-easing="ease-in-sine" >
              <Image
                src={item.icon}
                alt={item.name}
                width={28}
                height={28}
                className="max-h-10 flex items-center justify-center"
              />
              <span className="text-base hidden md:flex font-medium capitalize text-white">
                {item.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MyStack;
