import React from 'react'
import AddNewInterview from './_components/AddNewInterview'
import InterviewList from './_components/InterviewList'
import { twMerge } from "tailwind-merge";

function Dashboard() {
  return (
    <div>
      <TitleBanner subtitle="UNLOCK YOUR POTENTIAL" title="Dashboard" />
      <h4 className="text-white uppercase text-sm tracking-[4px] mb-2">
      Create and Start your AI Mockup Interview
          </h4>
      <div className='grid grid-cols-1 md:grid-cols-3 my-5'>
        <AddNewInterview/>
      </div>
      {/* Previous ques */}
      <InterviewList/>
    </div>
  )
}const TitleBanner = ({ subtitle, title, className }) => {
  return (
    <div
      className={twMerge(
        "w-full mx-auto bg-reactBd-titleBg bg-fill bg-center py-9 mdl:py-20",
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

export default Dashboard
