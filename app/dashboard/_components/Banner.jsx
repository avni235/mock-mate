"use client";
import React, { useState } from "react";
import SliderText from "./SliderText";

const Banner = () => {
  const sliderContent = [
    {
      title: "PREPARE FOR YOUR DREAM JOB",
      desTitle: "MockMate",
      des: "At MockMate, we provide simulated interview experiences that prepare you for real-life interviews, helping you build confidence and improve your skills.",
      backgroundImage: "/reactBdBannerBgOne.webp",
    },
    {
      title: "PERSONALIZED FEEDBACK",
      desTitle: "Feedback",
      des: "Receive personalized feedback from industry experts to understand your strengths and areas of improvement, ensuring you stand out in your job applications.",
      backgroundImage: "/reactBdBannerBgTwo.webp",
    },
    {
      title: "EXPLORE VARIOUS INDUSTRIES",
      desTitle: "Diverse Mock Interviews",
      des: "MockMate offers a wide range of mock interviews across various industries, enabling you to practice for different roles and job positions effectively.",
      backgroundImage: "/reactBdBannerBgThree.webp",
    },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  return (
    <div className="w-full bg-primaryColor p-1">
      <div
        style={{
          backgroundImage: `url(${sliderContent[currentSlide].backgroundImage})`,
        }}
        className="transition-bg duration-1000 w-full h-[85vh] bg-cover bg-no-repeat bg-center font-titleFont relative py-10 mdl:py-32"
      >
        <div className="max-w-screen-2xl mx-auto px-4 pt-2 flex flex-col items-start gap-10">
          <SliderText
            title={sliderContent[currentSlide].title}
            desTitle={sliderContent[currentSlide].desTitle}
            des={sliderContent[currentSlide].des}
          />
        </div>
        <div className="absolute bottom-10 left-0 right-0 hidden md:flex items-start justify-center gap-2 md:gap-6 text-[14px] text-gray-400 py-4 bg-opacity-70 bg-primaryColor w-full">
  {sliderContent.map((_, index) => (
    <p
      key={index}
      onClick={() => setCurrentSlide(index)}
      className={`${
        currentSlide === index ? "text-white" : "text-gray-400"
      } relative h-full w-48 px-3 py-1 hover:text-white hover:cursor-pointer duration-300 overflow-hidden bg-primaryColor bg-opacity-10 group`}
    >
      0{index + 1}
      <span
        className={`${
          currentSlide === index
            ? "bg-orange-500 translate-y-0"
            : "bg-gray-400 translate-y-[1px]"
        } w-full h-0.5 inline-flex absolute bottom-0 left-0 transform group-hover:translate-y-0 transition-transform duration-500 group-hover:bg-orange-500`}
      ></span>
      <span
        className={`${
          currentSlide === index
            ? "bg-orange-500 -translate-x-0"
            : "bg-gray-400 -translate-x-[1px]"
        } w-0.5 h-3 inline-flex absolute bottom-0 left-0 group-hover:-translate-x-0 transition-transform duration-500 group-hover:bg-orange-500`}
      ></span>
    </p>
  ))}
</div>


      </div>
    </div>
  );
};

export default Banner;
