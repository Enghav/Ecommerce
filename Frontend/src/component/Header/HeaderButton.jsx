import MenuIcon from "@mui/icons-material/Menu";
import { Link } from "react-router-dom";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { useState } from "react";
import SideBarNav from "./SideBarNav";
import CloseIcon from "@mui/icons-material/Close";
import { motion } from "framer-motion";
const Headerbutton = () => {
  const [sideBar, setSideBar] = useState(false);
  return (
    <div className="bg-[#232F3E] text-white">
      <div className="">
        <ul className="flex items-center text-sm tracking-wide">
          <li
            className="headHover gap-1 flex items-center px-2 py-2 duration-300"
            onClick={() => setSideBar(true)}
          >
            <MenuIcon />
            All
          </li>
          <Link
            to="#"
            className="hidden md:inline-flex headHover px-2 py-2 scale"
          >
            Today's Deals
          </Link>
          <Link
            to="#"
            className="hidden md:inline-flex headHover px-2 py-2 scale"
          >
            Customer Service
          </Link>
          <Link
            to="#"
            className="hidden md:inline-flex headHover px-2 py-2 scale"
          >
            Gift Cards
          </Link>
          <Link
            to="#"
            className="hidden md:inline-flex headHover px-2 py-2 scale"
          >
            Registry
          </Link>
          <Link
            to="#"
            className="hidden md:inline-flex headHover px-2 py-2 scale"
          >
            Sell
          </Link>
        </ul>
        {sideBar && (
          <div className="w-full h-screen text-black fixed top-0 left-0 bg-[#333333] bg-opacity-50">
            <div className="w-full h-full relative">
              <motion.div
                initial={{ x: -500, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.5 }}
                className="w-[290px] md:w-[350px] h-full bg-white border border-black"
              >
                <div className="w-full bg-[#232F3E] font-medium text-white py-2 px-6 flex items-center gap-4">
                  <AccountCircleIcon />
                  <h1>Hello, Sign In</h1>
                </div>
                <SideBarNav
                  title="Digital Content & Devices"
                  first="Amazon Music"
                  second="Kindle E-readers & Books"
                  third="Amazon Appstore"
                />
                <SideBarNav
                  title="Shop By Department"
                  first="Electronics"
                  second="Computers"
                  third="Smart Home"
                />
                <SideBarNav
                  title="Programs & Features"
                  first="Gift Cards"
                  second="Amazon live"
                  third="International Shopping"
                />
                <SideBarNav
                  title="Help & Settings"
                  first="Your Account"
                  second="Customer Service"
                  third="Contact us"
                />
                <span
                  onClick={() => setSideBar(false)}
                  className="cursor-pointer absolute top-0 left-[300px] md:left-[360px] h-10 text-xl text-white flex items-center justify-center duration-300"
                >
                  <CloseIcon />
                </span>
              </motion.div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Headerbutton;
