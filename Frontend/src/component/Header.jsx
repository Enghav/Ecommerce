// eslint-disable-next-line no-unused-vars
import React from "react";
import logo from "../assets/logo.png";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import SearchIcon from "@mui/icons-material/Search";
const Header = () => {
  return (
    <header className=" text-white  bg-[#131921]">
      <div className="w-99 px-4 py-2 flex items-center">
        <div className="px-2 border border-transparent duration-150 cursor-pointer hover:border-white flex items-center">
          <img className={`w-24 mt-2`} src={logo} alt="blank" />
        </div>

        <div className="">
          <div className="px-2 border border-transparent duration-150 cursor-pointer hover:border-white flex items-center">
            <LocationOnIcon />
            <div className={`text-sm text-lightFont font-light flex flex-col`}>
              Delivery to {""}
              <span>....</span>
            </div>
          </div>
        </div>
        <div className={`h-[40px] flex rounded-md flex-grow relative `}>
          <span className={`w-[56px] h-full bg-gray-200 hover:bg-gray-300 border-2 cursor-pointer duration-300 text-sm text-[#333333] font-titleFont flex items-center justify-center rounded-tl-md rounded-bl-md`}>
            All<span></span>
            <ArrowDropDownIcon />
          </span>
          <input type="text" />
          <span
            className={`w-[48px] h-full flex items-center justify-center bg-[#FEBD69] hover:bg-[#F3A847] duration-300 text-[#333333] cursor-pointer rounded-tr-md rounded-br-md`}
          >
            <SearchIcon />
          </span>
        </div>
      </div>
    </header>
  );
};

export default Header;
