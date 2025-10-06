import { Outlet } from "react-router";

import leftImage from "../assets/undraw_social-growth_osro.svg";
import rightImage from "../assets/undraw_social-expert_wfam.svg";

const Registration = () => {
  return (
    <div className="flex flex-col lg:flex-row justify-center items-center min-h-screen px-6 py-10 space-y-10 lg:space-y-0 lg:space-x-16">
      {/* Left side image */}
      <div className="w-full flex justify-center lg:justify-end">
        <img
          src={leftImage}
          alt="Illustration Left"
          className="w-64 sm:w-80 md:w-96 hidden lg:block"
        />
      </div>

      {/* Registration Card */}
      <Outlet />

      {/* Right side image */}
      <div className="w-full flex justify-center lg:justify-start">
        <img
          src={rightImage}
          alt="Illustration Right"
          className="w-64 sm:w-80 md:w-96 hidden lg:block"
        />
      </div>
    </div>
  );
};

export default Registration;
