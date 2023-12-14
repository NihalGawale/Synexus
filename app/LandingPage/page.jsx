"use client";
import Body from "@/components/Body/Body";
import Box from "@/components/Box/Box";
import Container from "@/components/Container/Container";
import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";
import React from "react";

const LandingPage = () => {
  return (
    <div className="h-screen w-[100%] flex flex-col justify-center items-center pt-5 lg:pt-10">
      <Container>
        <Header />
        <Body />
      </Container>
      <Footer />
    </div>
  );
};

export default LandingPage;
