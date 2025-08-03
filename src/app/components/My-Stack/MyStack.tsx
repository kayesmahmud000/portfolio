"use client";
import React from 'react';
import Headers from '../Custom/Headers';
import Image from 'next/image';
import { MY_STACK } from '@/lib/data';
import Marquee from 'react-fast-marquee';

const MyStack = () => {
  const stackItems = Object.values(MY_STACK).flat();

  const row1 = stackItems.filter((_, i) => i % 3 === 0);
  const row2 = stackItems.filter((_, i) => i % 3 === 1);
  const row3 = stackItems.filter((_, i) => i % 3 === 2);

  const renderRow = (items: typeof stackItems, reverse = false) => (
    <Marquee
      gradient={false}
      speed={30}
      pauseOnHover
      direction={reverse ? "right" : "left"}
      className="space-x-3 sm:space-x-4 my-2"
    >
      {items.map((item) => (
        <div
          key={item.name}
          className="border border-red-700 bg-white/10 backdrop-blur-md rounded-md py-1.5 px-3 sm:py-2 sm:px-4 mx-2 sm:mx-3 flex gap-2 sm:gap-3 items-center shadow-md hover:scale-[1.05] transition-all duration-300"
        >
          <Image
            src={item.icon}
            alt={item.name}
            width={20}
            height={20}
            className="sm:w-6 sm:h-6"
          />
          <span className="text-sm sm:text-base font-medium capitalize text-white whitespace-nowrap">
            {item.name}
          </span>
        </div>
      ))}
    </Marquee>
  );

  return (
    <div id="stack" className="mx-auto mt-10 px-2 sm:px-4 py-8 sm:py-10 w-full lg:max-w-6xl">
      <div className="flex items-center justify-center">
        <Headers title={'My Stack'} />
      </div>

      <div className="mt-6 sm:mt-8 flex flex-col gap-3 sm:gap-4">
        {renderRow(row1)}
        {renderRow(row2, true)}
        {renderRow(row3)}
      </div>
    </div>
  );
};

export default MyStack;
