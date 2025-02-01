"use client";
import React from "react";
import { FaHome } from "react-icons/fa";
import { MdMarkEmailUnread } from "react-icons/md";
import { BsPhoneFill } from "react-icons/bs";
import { IoLogoWhatsapp } from "react-icons/io";
import { Disclosure, DisclosureButton, DisclosurePanel } from "@headlessui/react";
import { BiChevronDown } from "react-icons/bi";
import { twMerge } from "tailwind-merge";

const faqData = [
  {
    _id: "01",
    title: "What is Mock Mate?",
    subTitle: "Mock Mate is an AI-powered platform designed to help users prepare for interviews through simulated mock interview sessions. Our system provides real-time feedback and analysis, allowing you to practice and improve your responses.",
  },
  {
    _id: "02",
    title: "How does Mock Mate work?",
    subTitle: "Using advanced AI algorithms, Mock Mate assesses your responses to typical interview questions, provides feedback on various aspects like tone, content, and clarity, and suggests areas for improvement. You can practice multiple rounds to track your progress over time.",
  },
  {
    _id: "03",
    title: "Who can use Mock Mate?",
    subTitle: "Mock Mate is suitable for anyone preparing for interviews, whether you're a student, recent graduate, or seasoned professional. The platform adapts to your experience level and the types of interviews you’re targeting.",
  },
  {
    _id: "04",
    title: "Can I choose the type of interview to practice?",
    subTitle: "Yes! Mock Mate offers customizable mock interview sessions that can be tailored for different industries, job roles, and experience levels to give you relevant practice.",
  },
  {
    _id: "05",
    title: "Is Mock Mate’s feedback reliable?",
    subTitle: "Our feedback system is powered by advanced AI technology and developed with input from career experts. While it’s a helpful guide for improvement, we recommend combining it with other interview prep strategies for the best results.",
  },
  {
    _id: "06",
    title: "How do I get started with Mock Mate?",
    subTitle: "Simply sign up, choose your interview preferences, and start practicing. Mock Mate will guide you through each session and provide detailed feedback after each response.",
  },
  {
    _id: "07",
    title: "Is my data secure with Mock Mate?",
    subTitle: "Absolutely! We prioritize your privacy and use industry-standard encryption to protect all personal data and session information.",
  },
  {
    _id: "08",
    title: "How often can I use Mock Mate?",
    subTitle: "There are no limits to the number of sessions you can take. Practice as often as you like to perfect your interview skills!",
  },
];

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
        <h1 className="font-titleFont text-white text-4xl mdl:text-6xl font-semibold">
          {title}
        </h1>
      </div>
    </div>
  );
};

const FAQ = () => {
  return (
    <div className="w-full">
      <TitleBanner
        subtitle="Explore the Features"
        title="Frequently Asked Questions"
      />
      <div className="max-w-screen-2xl mx-auto flex flex-col mdl:flex-row justify-between gap-10 pb-20 pt-5 px-4">
        <div className="w-full mdl:w-3/4 flex flex-col gap-6">
          <div className="w-full flex flex-col gap-4">
            {faqData?.map((item) => (
              <Disclosure
                key={item?._id}
                as="div"
                className="p-6 hover:cursor-pointer"
                defaultOpen={false}
              >
                <DisclosureButton className="group relative flex w-full items-center justify-between">
                  <p
                    className={`absolute left-0 -top-10 w-full text-white h-auto px-3 py-1 text-sm group-hover:text-white group-data-[open]:text-secondaryColor text-left duration-300`}
                  >
                    {item?._id}
                    <span
                      className={`w-full h-[.5px] absolute left-0 bottom-0 group-hover:bg-orange-500 group-data-[open]:bg-orange-500 duration-500 bg-gray-500`}
                    ></span>
                    <span
                      className={`w-[1px] h-[10px] absolute left-0 bottom-0 group-hover:bg-orange-500 group-data-[open]:bg-orange-500 duration-500 bg-gray-500`}
                    ></span>
                  </p>
                  <span className="text-lg font-semibold text-white/80 group-data-[open]:text-white">
                    {item?.title}
                  </span>
                  <BiChevronDown className="size-6 fill-white/70 group-data-[hover]:fill-white/50 group-data-[open]:rotate-180" />
                </DisclosureButton>
                <DisclosurePanel className="mt-2 text-sm/5 text-white/80 tracking-wide leading-6">
                  {item?.subTitle}
                </DisclosurePanel>
              </Disclosure>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQ;
