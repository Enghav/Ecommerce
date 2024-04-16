import { Link, useHistory } from "react-router-dom";
import { Logo } from "../assets/index";
import { useState } from "react";
import ArrowRightSharpIcon from "@mui/icons-material/ArrowRightSharp";

const Signin = () => {
  const [email, setEmail] = useState('');
  const history = useHistory();

  const handleSubmit = () => {
    // Here, you might perform any necessary validation before redirecting
    history.push(`/signin/pw/${email}`);
  };

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
                Email or mobile phone number
              </span>
              <input
                value={email} onChange={(e) => setEmail(e.target.value)}
                className="w-full rounded-md lowercase py-1 border border-zinc-400 px-2 text-base  outline-none focus-within:border-[#e77600] focus-within:shadow-InputShadow duration-100"
                type="email"
              />
              <button onClick={handleSubmit} className="w-full bg-yellow-400 hover:bg-yellow-500 my-4 p-1 rounded-lg text-[13px]">
                Continue
              </button>
              <div className="flex  flex-col gap-4">
                <div className="text-[12px] ">
                  By continuing, you agree to Amazon's{" "}
                  <span className="text-blue-500 hover:text-orange-500 hover:underline cursor-pointer">
                    Conditions of Use
                  </span>
                  <span className="text-blue-500 hover:text-orange-500 hover:underline  cursor-pointer ">
                    Privacy Notice
                  </span>
                  .
                </div>
                <div className=" translate-x-[-10px]">
                  <span className="">
                    <ArrowRightSharpIcon className="" />
                  </span>
                  <span className="text-blue-500 hover:text-orange-500 hover:underline cursor-pointer text-[13px]">
                    Need help ?
                  </span>
                </div>
                <hr className="" />
                <div className="text-[12px]">
                  <p>Buying for work?</p>
                  <span className="text-blue-500 hover:text-orange-500 hover:underline cursor-pointer">
                    Shop on Amazon Business
                  </span>
                </div>
              </div>
            </div>
          </div>
          <p className="w-full text-xs mt-4 flex items-center">
            <span className="w-[35%] h-[1px] bg-zinc-300 inline-flex"></span>
            <span className="w-[30%] translate-y-[3px] text-center font-medium text-zinc-400 ">
              New to Amazon?
            </span>
            <span className="w-[35%] h-[1px] bg-zinc-300 inline-flex"></span>
          </p>
          <Link className="w-full" to="/register">
            <button className="w-full active:border-yellow-800 border border-zinc-300 text-[12px] hover:bg-zinc-200 duration-300 shadow-md  py-1.5 mt-4 text-sm font-normal rounded-md ">
              Create your Amazon account
            </button>
          </Link>
        </form>
      </div>
    </div>
  );
};

export default Signin;
