import {Link, useParams } from 'react-router-dom';
import { Logo } from "../assets/index";
import ArrowDropDownSharpIcon from '@mui/icons-material/ArrowDropDownSharp';

const SignPW = () => {
  const { email } = useParams();

  return (
    <div className="w-full">
      <div className="bg-[#F3F4F6]  pb-10 w-full h-screen">
        <form className="w-[350px] mx-auto flex flex-col items-center">
          <Link to="/">
            <img src={Logo} alt="logo" className="w-[128px]" />
          </Link>
          <div className="border-[1px] border-zinc-300  rounded-md w-[350px]">
            <div className="flex flex-col px-5 py-5">
              <p className="font-titleFont text-2xl   mb-4 ">Sign In</p>
              <span className="font-bold text-[13px] mb-1">
                {email} .change
              </span>
              <input
                className="w-full rounded-md lowercase py-1 border border-zinc-400 px-2 text-base  outline-none focus-within:border-[#e77600] focus-within:shadow-InputShadow duration-100"
                type="email"
              />
              <Link to="/signin/pw">
                <button className="w-full font-medium bg-yellow-400 hover:bg-yellow-500 my-4 p-1 rounded-lg text-[13px]">
                  Sign in
                </button>
              </Link>
              <div className="flex gap-1 text-[13px]">
                <input type="checkbox" />
                <div className="flex items-center ">
                <div>Keep me signed in. </div>
                <span className="px-1 text-blue-500 hover:text-orange-500 hover:underline cursor-pointer font-medium"> Details</span>
                <ArrowDropDownSharpIcon/>
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignPW;
