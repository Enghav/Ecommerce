// eslint-disable-next-line no-unused-vars
import React from "react";

const FooterTop = () => {
  return (
    <div className="w-full bg-white py-6">
      <div className="w-full border-t-[1px] border-b-[1px] py-4">
        <div className="w-64 mx-auto text-center font-titleFont">
          <p className="text-[14px] font-normal">See personalized recommendations</p>
          <button className="w-full bg-gradient-to-t from-yellow-400 to-yellow-200 border-[2px] border-yellow-600 rounded-md py-1 font-semibold cursor-pointer ">
          <span className="text-shadow" >Sign In</span>
          </button>
          <p className="text-xs mt-1">
            New Customber?
            <span className="text-[#007185] hover:text-[#C7511F] ml-1 cursor-pointer">
              Start here.
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default FooterTop;