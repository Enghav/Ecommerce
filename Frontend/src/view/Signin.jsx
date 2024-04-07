import { Link } from "react-router-dom";
import { Logo } from "../assets/index";
import ArrowRightSharpIcon from "@mui/icons-material/ArrowRightSharp";
const Signin = () => {
  return (
    <div className="w-full">
      <div className="bg-[#F3F4F6]  pb-10 w-full h-screen">
        <form className="w-[350px] mx-auto flex flex-col items-center">
          <Link to="/">
            <img src={Logo} alt="logo" className="w-[128px]" />
          </Link>
          <div className="border-[1px] border-zinc-200  rounded-md w-[350px]">
            <div className="flex flex-col px-5 py-5">
              <p className="font-titleFont text-2xl font-light  mb-4 ">
                Sign In
              </p>
              <span>Email or mobile phone number</span>
              <input
                className="w-full rounded-md lowercase py-1 border border-zinc-400 px-2 text-base  outline-none focus-within:border-[#e77600] focus-within:shadow-InputShadow duration-100"
                type="email"
              />
              <button className="w-full bg-yellow-400 hover:bg-yellow-500 mt-2 p-1 rounded-md">Continue</button>
             <div className="flex  flex-col gap-4">
             <div>
                By continuing, you agree to Amazon's{" "}
                <span className="text-blue-500">Conditions of Use</span> and{" "}
                <span className="text-blue-500">Privacy Notice</span>.
              </div>
              <div >
                <span>
                  <ArrowRightSharpIcon />
                </span>
                <span>Need help ?</span>
              </div>
              <hr className="" />
              <div className="">
                <p>Buying for work?</p>
                <span className="text-blue-500">Shop on Amazon Business</span>
              </div>
             </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Signin;
