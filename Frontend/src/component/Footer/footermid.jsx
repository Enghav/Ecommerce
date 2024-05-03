/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect, useRef } from "react";
import { midList } from "../../store/index";
import { logo } from "../../assets/index";
import ArrowDropDownSharpIcon from '@mui/icons-material/ArrowDropDownSharp';
import LanguageSharpIcon from "@mui/icons-material/LanguageSharp";
import DoneIcon from '@mui/icons-material/Done';

const languages = [
  { name: "English", code: "EN" },
  { name: "Español", code: "ES" },
  { name: "العربية", code: "AR" },
  { name: "Deutsch", code: "DE" },
  { name: "עברית", code: "HE" },
  { name: "한국어", code: "KO" },
  { name: "Português", code: "PT" },
  { name: "中文 (简体)", code: "ZH" },
  { name: "中文 (繁體)", code: "ZH" }
];

const FooterMiddle = () => {
  const FooterMiddleList = ({ title, listItem }) => {
    return (
      <div className="w-full">
        <h3 className="font-titleFont text-white text-base font-semibold mb-3">
          {title}
        </h3>
        <ul className="flex flex-col gap-2 font-bodyFont">
          {listItem.map((item, index) => (
            <li key={index} className="flex flex-col gap-3">
              {item.listData.map((data, dataIndex) => (
                <span key={dataIndex} className="footerLink" style={{ display: "block" }}>
                  {data}
                </span>
              ))}
            </li>
          ))}
        </ul>
      </div>
    );
  };

  const [showDropdown, setShowDropdown] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState({ name: "English", code: "EN" });
  const dropdownRef = useRef(null);

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  const selectLanguage = (language) => {
    setSelectedLanguage(language);
    setShowDropdown(false);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setShowDropdown(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="w-full bg-[#232F3E] text-white">
      <div className="w-full border-b-[1px] border-gray-500 py-10">
        <div className="max-w-5xl mx-auto text-gray-300">
          <div className="w-full grid grid-cols-1 md:grid-cols-2 lgl:grid-cols-4 place-items-center items-start px-6 gap-10 lgl:gap-4">
            {midList.map((item) => (
              <FooterMiddleList 
                key={item._id}
                title={item.title}
                listItem={item.listItem}
              />
            ))}
          </div>
        </div>
      </div>
      <div className="w-full flex gap-6 items-center justify-center py-6">
        <div>
          <img className="w-20 pt-3" src={logo} alt="logo" />
        </div>
        <div className="flex gap-2">
          <p 
            className="flex gap-1 items-center justify-center border border-gray-500 hover:border-amazon_yellow cursor-pointer duration-200 px-2 py-1 relative"
            onClick={toggleDropdown}
          >
            <LanguageSharpIcon />
            <span>{selectedLanguage.name}</span>
            <ArrowDropDownSharpIcon />
            {showDropdown && (
              <div ref={dropdownRef} className="absolute bg-white  text-black shadow-md rounded mt-2">
                {languages.map((language, index) => (
                  <p 
                    key={index} 
                    className={`px-4 py-2 hover:bg-gray-200 cursor-pointer flex items-center ${selectedLanguage.code === language.code && 'text-[#00C3BF]'}`}
                    onClick={() => selectLanguage(language)}
                  >
                    {selectedLanguage.code === language.code && <DoneIcon className="mr-2" />}
                    {language.name} - {language.code}
                  </p>
                ))}
              </div>
            )}
            {showDropdown && <div className="absolute w-0 h-0 left-1/2 bottom-full transform translate-x-[-50%] border-b-4 border-solid border-gray-500"></div>}
          </p>
          <div className="flex gap-1 items-center justify-center border border-gray-500 hover:border-amazon_yellow cursor-pointer duration-200 px-2 py-1">
            Learn More
          </div>
        </div>
      </div>
    </div>
  );
};

export default FooterMiddle;
