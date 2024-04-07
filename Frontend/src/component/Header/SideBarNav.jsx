import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
// eslint-disable-next-line no-unused-vars
import React from 'react';
// eslint-disable-next-line react/prop-types
const SideBarNav = ({ title, first, second, third })=>{
    return (
        <div className="py-3 border-b-[1px] border-b-gray-300">
          <h3 className="text-lg font-titleFont font-semibold mb-1 px-6">
            {title}
          </h3>
          <ul className="text-sm">
            <li className="flex items-center justify-between hover:bg-zinc-200 px-6 py-2 cursor-pointer">
              {first}
              <span>
                <KeyboardArrowRightIcon />
              </span>
            </li>
            <li className="flex items-center justify-between hover:bg-zinc-200 px-6 py-2 cursor-pointer">
              {second}
              <span>
                <KeyboardArrowRightIcon />
              </span>
            </li>
            <li className="flex items-center justify-between hover:bg-zinc-200 px-6 py-2 cursor-pointer">
              {third}
              <span>
                <KeyboardArrowRightIcon />
              </span>
            </li>
          </ul>
        </div>
      );

}
export default SideBarNav;