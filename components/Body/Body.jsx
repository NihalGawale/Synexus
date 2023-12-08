import React, { useEffect, useRef } from "react";
import Wrapper from "../Wrapper/Wrapper";
import Box from "../Box/Box";
import Card from "../LandingPageCard/Card";

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
          thrive.
        </p>
        <p className="px-3 mt-4 text-center text-xs lg:text-lg font-medium text-[#7d7b7b] lg:px-36">
          "Experience unprecedented growth and efficiency with our app, as we
          empower you to leverage your resources strategically, turning every
          effort into a catalyst for success. A unique space designed to bring{" "}
          <span className="text-[#1e1d1d] font-semibold">freelancers</span> and{" "}
          <span className="text-[#1e1d1d] font-semibold">
            skilled individuals{" "}
          </span>
          together."
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
        <div className="leading-[30px] border-b-2 px-2 pb-3 lg:pb-5 text-[#1e1d1d] md:leading-[65px] text-center text-[34px] lg:text-[70px] font-extrabold">
          Key Features
        </div>
        <div className="flex flex-col pt-10 lg:pt-16 lg:flex-row space-y-10 lg:space-y-0 lg:space-x-10">
          <Card
            imagePath="/assets/freelancer.jpg"
            title="As a Freelancer"
            description="Discover a diverse pool of skills to enhance your projects. Collaborate with skilled individuals and delegate your tasks for faster delivery of your project"
          />
          <Card
            imagePath="/assets/working-professional.jpg"
            title="As a Professional"
            description="Don't limit yourself to traditional way of earning money. Collaborate with freelancers to offer your skills. Monetize your skills and boost your income. "
          />
          <Card
            imagePath="/assets/student2.jpg"
            title="As a Learner or Job Seeker"
            description="Collaborate with freelancers and gain an experience of working on live projects. Land your dream job smoothly."
          />
          <Card
            imagePath="/assets/freelance-enthusiast2.jpg"
            title="As a Freelancing Enthusiast"
            description="Collaborate with freelancers and gain experience in freelancing world. With this experience give a kickstart to your freelancing journey."
          />
        </div>
      </Wrapper>

      <Wrapper>
        <h1 className="leading-[30px] px-2 text-[#1e1d1d] md:leading-[65px] text-center  text-[25px] lg:text-[70px] font-extrabold lg:max-w-7xl">
          Join a community where freelancers and skilled individuals elevate
          projects together.
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
    </Box>
  );
};

export default Body;
