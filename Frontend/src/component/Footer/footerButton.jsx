// eslint-disable-next-line no-unused-vars
import React from 'react';
import { fBItem } from "../../store"; // Assuming you have defined fBItem correctly

const FooterButton = () => {
  return (
    <div className={`w-full bg-[#131921] py-8`}>
      <div className="max-w-5xl mx-auto">
        <div className="w-full grid grid-cols-3 md:grid-cols-5 lgl:grid-cols-7  px-6 ju place-content-center items-start text-gray-400">
          {fBItem.slice(0, fBItem.length - 5).map((item) => (
            <div key={item.id} className=" flex flex-col  cursor-pointer py-2">
              <h3 className="font-bold text-gray-300 text-[12px] ">{item.title}</h3>
              <p className="text-gray-400 w-[90px] text-[11px]">{item.des}</p>
            </div>
          ))}
        </div>
        <div className="w-full grid grid-cols-3 md:grid-cols-4 lgl:grid-cols-7  px-6 ju place-content-center text-gray-400 translate-x-[140px] translate-y-[-10px]">
          {fBItem.slice(- 5).map((item) => (
            <div key={item.id} className=" flex flex-col  cursor-pointer py-2">
              <h3 className="font-bold text-gray-300 text-[12px] ">{item.title}</h3>
              <p className="text-gray-400 w-[90px] text-[11px]">{item.des}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="flex flex-col justify-center items-center px-4">
        <div>
          <ul className="text-gray-300 text-sm gap-2 md:gap-4 py-2 mt-4 flex">
            <li className="font-normal text-[12px] hover:underline cursor-pointer text-[#DDD] leading-3">
              Conditions of Use
            </li>
            <li className="font-normal text-[12px] hover:underline cursor-pointer text-[#DDD] leading-3">
              Privacy Notice
            </li>
            <li className="font-normal text-[12px] hover:underline cursor-pointer text-[#DDD] leading-3">
              Consumer Health Data Privacy Disclosure
            </li>
            
            <li className="font-normal text-[12px] hover:underline cursor-pointer text-[#DDD] leading-3">
              Your Ads Privacy Choices
            </li>
          </ul>
        </div>
        <div>
          <p className="font-normal text-[12px] text-[#DDD] leading-3">
            © 1996-2022, Amazon.com, Inc. or its affiliates
          </p>
        </div>
      </div>
    </div>
  );
};

export default FooterButton;
