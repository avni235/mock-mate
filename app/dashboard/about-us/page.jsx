// page.jsx
import React from "react";
import { twMerge } from "tailwind-merge";

const AboutUs = () => {
  return (
    <div>
      <TitleBanner subtitle="Know more about us" title="About our Services" />
      <Designing />
    </div>
  );
};

const Designing = () => {
  return (
    <div className="max-w-screen-2xl mx-auto flex flex-col mdl:flex-row justify-between items-center gap-32 px-10 pb-10">
      <div className="w-full mdl:w-1/2 flex flex-col gap-10">
        <div className="font-titleFont w-full mdl:w-5/6">
          <h4 className="text-orange-500 uppercase text-sm tracking-[4px] mb-2">
            AI Mock Interviewer
          </h4>
          <h2 className="text-4xl mdl:text-[45px] font-semibold tracking-[2px] leading-[45px] text-white">
          Crafting Interview Success with AI-Driven Insights and Seamless Design.
          </h2>
        </div>
        <div>
          <div className="flex flex-col gap-8">
            <div className="flex gap-10 mdl:w-4/5">
              <span className="font-titleFont relative text-white font-normal border-b border-b-borderColor before:w-[1px] before:h-[7px] before:bg-borderColor before:inline-block before:left-0 before:bottom-0 before:absolute h-7 w-20 px-2">
                01
              </span>
              <p className="text-gray-300 text-darkText">
              Mock Mate is an intelligent platform that uses advanced AI to simulate real-world interview scenarios, providing candidates with personalized feedback and tailored suggestions for improvement.
              </p>
            </div>
            <div className="flex gap-10 mdl:w-4/5">
              <span className="font-titleFont text-white relative font-normal border-b border-borderColor before:w-[1px] before:h-[7px] before:bg-borderColor before:inline-block before:left-0 before:bottom-0 before:absolute h-7 w-20 px-2">
                02
              </span>
              <p className="text-gray-300 text-darkText">
              Designed for all career stages, Mock Mate helps users enhance their communication skills and refine interview strategies, empowering them to succeed in securing their desired opportunities.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const TitleBanner = ({ subtitle, title, className }) => {
  return (
    <div
      className={twMerge(
        "w-full mx-auto bg-reactBd-titleBg mt-10 bg-fill bg-center py-10 mdl:py-20",
        className
      )}
    >
      <div className="max-w-screen-2xl mx-auto text-center flex flex-col items-center justify-center">
        <h4 className="text-orange-500 uppercase text-xs mdl:text-sm tracking-[4px] mb-2">
          {subtitle}
        </h4>
        <h1 className="font-titleFont text-4xl mdl:text-6xl font-semibold text-white">
          {title}
        </h1>
      </div>
    </div>
  );
};

export default AboutUs;
