import React, { useEffect, useRef } from "react";
import Wrapper from "../Wrapper/Wrapper";
import Box from "../Box/Box";
import Card from "../LandingPageCard/Card";
import Image from "next/image";
import Tile from "../FAQ/Tile";
import faqs from "@/app/constants/FAQs";
import features from "@/app/constants/KeyFeatures";
import works from "@/app/constants/HowItWorks";

const Body = () => {
  const ref = useRef(null);
  useEffect(() => {
    import("@lottiefiles/lottie-player");
  }, []);

  return (
    <Box>
      <Wrapper>
        <h1 className="leading-[40px] text-[#616060] md:leading-[80px] text-center  text-[34px] lg:text-[70px] lg:max-w-4xl font-extrabold">
          Unlocking the Power of
          <span className="text-black"> Collaboration</span>
        </h1>
        <p className="px-3 mt-4 font-semibold text-center text-sm lg:text-2xl text-[#7d7b7b]">
          A unified and interconnected space where collaboration and synergy
          thrive
        </p>
        <p className="px-3 mt-4 text-center text-xs lg:text-lg font-medium text-[#7d7b7b] lg:px-36">
          "Experience unprecedented growth and efficiency with our app, as we
          empower you to leverage your resources strategically, turning every
          effort into a catalyst for success. A unique space designed to bring{" "}
          <span className="text-[#1e1d1d] font-semibold">freelancers</span> and{" "}
          <span className="text-[#1e1d1d] font-semibold">
            skilled individuals{" "}
          </span>
          together"
        </p>

        <div className="w-[300px] lg:w-[550px] h-[300px] lg:h-[550px] relative">
          <lottie-player
            loop
            id="firstLottie"
            ref={ref}
            autoplay
            mode="normal"
            src="/assets/Animation - 1701942007207.json"
          />
        </div>
      </Wrapper>

      <Wrapper>
        <div className="leading-[30px] border-b-2 px-2 pb-3 lg:pb-5  text-[#1e1d1d] md:leading-[65px] text-center text-[34px] lg:text-[70px] font-extrabold">
          Key Features
        </div>
        <div className="flex flex-col pt-10 lg:pt-20 lg:flex-row space-y-10 lg:space-y-0 lg:space-x-10">
          {features.map((feature) => (
            <Card
              imagePath={feature.imagePath}
              title={feature.title}
              description={feature.description}
            />
          ))}
        </div>
      </Wrapper>

      <Wrapper>
        <div className="leading-[30px] border-b-2 px-2 pb-3 lg:pb-5 text-[#1e1d1d] md:leading-[65px] text-center text-[34px] lg:text-[70px] font-extrabold">
          How it works
        </div>
        <div className="flex space-y-12 lg:space-y-0 lg:space-x-10 lg:flex-row flex-col pt-10 lg:pt-20">
          {works.map((item) => (
            <div className=" flex flex-col space-y-6">
              <div className="w-[300px] lg:w-[500px] h-[300px] lg:h-[350px] relative shadow-md shadow-gray-900/50">
                <Image
                  src={item.imagePath}
                  alt={item.title}
                  fill={true}
                  objectFit="cover"
                />
              </div>
              <p className="flex justify-center text-xl font-bold text-[#616060]">
                {item.title}
              </p>
            </div>
          ))}
        </div>
      </Wrapper>

      <Wrapper>
        <h1 className="leading-[30px] px-2 text-[#1e1d1d] md:leading-[65px] text-center  text-[25px] lg:text-[70px] font-extrabold lg:max-w-7xl">
          Join a community where freelancers and skilled individuals elevate
          projects together
        </h1>
        <div className="w-[300px] lg:w-[550px] h-[300px] lg:h-[550px] relative">
          <lottie-player
            loop
            id="firstLottie"
            ref={ref}
            autoplay
            mode="normal"
            src="/assets/Animation - 1701887695588.json"
          />
        </div>
      </Wrapper>

      <Wrapper>
        <h1 className="leading-[30px] border-b-2 pb-3 lg:pb-5 text-[#1e1d1d] md:leading-[65px] text-center  text-[25px] lg:text-[70px] font-extrabold lg:max-w-7xl">
          Frequently Asked Questions
        </h1>
        <div
          className="flex max-w-5xl justify-center items-center flex-wrap gap-10 pt-10 lg:pt-20
        "
        >
          {faqs.map((faq) => (
            <Tile question={faq.question} answer={faq.answer} />
          ))}
        </div>
      </Wrapper>
    </Box>
  );
};

export default Body;
