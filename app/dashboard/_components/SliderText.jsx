import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";

const SliderText = ({ title, desTitle, des }) => {
  return (
    <div className="flex flex-col p-4 md:p-10 gap-4 md:gap-6 h-auto md:h-96 justify-center">
      <div className="pb-5 md:pt-10">
        <motion.h4
          initial={{ x: 50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{
            delay: 0.1,
            x: { type: "spring", stiffness: 60 },
            opacity: { duration: 1 },
            ease: "easeIn",
            duration: 1,
          }}
          className="text-orange-500 uppercase text-xs md:text-sm tracking-0 md:tracking-[4px] mb-2"
        >
          {title}
        </motion.h4>
        <motion.h1
          initial={{ x: 50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{
            delay: 0.3,
            x: { type: "spring", stiffness: 60 },
            opacity: { duration: 1 },
            ease: "easeIn",
            duration: 1,
          }}
          className="text-white font-sans leading-relaxed font-semibold text-2xl md:text-3xl w-full md:w-[70%] xl:w-[50%]"
        >
          <span className="text-3xl md:text-4xl underline underline-offset-4 decoration-orange-500 decoration-[1px]">
            {desTitle}
          </span>{" "}
          {des}
        </motion.h1>
      </div>
      <motion.div
        initial={{ x: 50, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{
          delay: 0.4,
          x: { type: "spring", stiffness: 60 },
          opacity: { duration: 1 },
          ease: "easeIn",
          duration: 1,
        }}
      >
        <Link href="/dashboard">
        <div className="relative text-white w-44 h-12 border-t-[1px] border-t-orange-500 border-b-[1px] border-b-orange-500 group overflow-hidden">
      <button className="w-full h-full font-titleFont tracking-[2px] uppercase text-sm font-normal">
        Get Started
      </button>
      <span className="h-full w-[1px] bg-orange-500 inline-block absolute right-0 -translate-y-8 group-hover:translate-y-0 transition-transform duration-300"></span>
      <span className="h-full w-[1px] bg-orange-500 inline-block absolute left-0 translate-y-8 group-hover:translate-y-0 transition-transform duration-300"></span>
    </div>
        </Link>
      </motion.div>
    </div>
  );
};

export default SliderText;
