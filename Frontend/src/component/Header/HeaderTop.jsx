/* eslint-disable react/jsx-key */
// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import logo from "../../assets/logo.png";
import us from "../../assets/us.svg";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import SearchIcon from "@mui/icons-material/Search";
import { Items } from "../../store";
import { Link } from "react-router-dom";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
const Header = () => {
  const [listDown, setListDown] = useState(false);
  const [displayText, setDisplayText] = useState("All");
  const [buttonWidth, setButtonWidth] = useState(null);
  const [isClicked, setIsClicked] = useState(false);
  const handleClick = () => {
    setIsClicked(true);
    setTimeout(() => setIsClicked(false), 300);
  };
  const handleItemClick = (newText) => {
    setDisplayText(newText);
    setListDown(false);
    setButtonWidth(null);
  };
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
              <span className="font-bold">Cambodia</span>
            </div>
          </div>
        </div>
        <div className={`h-[40px] flex rounded-md flex-grow relative mx-1`}>
          <span
            onClick={() => {
              setListDown(!listDown);
              if (!listDown) {
                // Calculate and set button width only when dropdown is opened
                const width =
                  document.getElementById("dropdownButton").offsetWidth;
                setButtonWidth(width);
              }
            }}
            id="dropdownButton"
            className={`transform ${
              listDown ? "scale-105 border-[3px] border-[#FB9700]" : ""
            } w-[${buttonWidth}px] h-full bg-gray-300 hover:bg-gray-400 border-2 b cursor-pointer duration-300 text-sm text-[#333333] font-titleFont flex items-center justify-center rounded-tl-md rounded-bl-md relative`}
          >
            {" "}
            {displayText}
            <ArrowDropDownIcon />
            {listDown && (
              <div className="">
                <ul
                  className={`absolute w-[224px] h-[320px] top-8 left-0 rounded-md overflow-y-scroll overflow-x-hidden bg-white border-[1px] border-[#333333] text-black  flex flex-col gap-1 z-50`}
                >
                  {Items.map((items) => (
                    <li
                      className={` text-sm tracking-wide font-titleFont hover:bg-[#1967D2] hover:text-gray-100 cursor-pointer p-1 duration-300 `}
                      key={items.id}
                      onClick={() => handleItemClick(items.title)}
                    >
                      {items.title}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </span>
          <input
            type="text"
            placeholder="Search Amazon"
            className="h-full text-base text-[#333333] flex-grow outline-none border-none px-2"
          />
          <span
            className={`w-[48px] h-full flex items-center justify-center bg-[#FEBD69] hover:bg-[#F3A847] duration-300 text-[#333333] cursor-pointer rounded-tr-md rounded-br-md ${
              isClicked ? "scale-110 " : ""
            }`}
            onClick={handleClick}
          >
            <SearchIcon />
          </span>
        </div>
        <div className="px-2 py-2 border border-transparent duration-150 cursor-pointer hover:border-white flex items-center gap-1">
          <img className="w-[25px] " src={us} alt="" />
          <span className="font-medium">
            EN
            <ArrowDropDownIcon />
          </span>
        </div>
        <Link to='/signin' className="border border-transparent duration-150 cursor-pointer hover:border-white px-1">
          <div className="text-xs text-lightText font-light">Hello, Sign in</div>
          <div className="hidden md:inline-flex text-sm font-semibold -mt-1 text-whiteText">Account & lists
            <span><ArrowDropDownIcon/></span>
          </div>
        </Link>
        <div className="hidden mdl:flex flex-col items-start justify-center headHover py-1">
          <p className="text-xs text-lightText font-light">Returns</p>
          <p className="text-sm font-semibold -mt-1 text-whiteText">& Orders</p>
        </div>
        <Link to="/cart">
          <div className="flex items-start justify-center headHover relative py-1">
            <ShoppingCartIcon />
            <p className="hidden mdl:inline-flex text-xs font-semibold mt-3 text-whiteText">
              Cart
            </p>

          </div>
        </Link>
      </div>
    </header>
  );
};

export default Header;
