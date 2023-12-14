import Box from "@/components/Box/Box";
import Container from "@/components/Container/Container";
import Footer from "@/components/Footer/Footer";
import React from "react";

const page = () => {
  return (
    <div className="h-screen w-[100%] flex flex-col justify-center items-center pt-5 lg:pt-10">
      <Container>
        <Box>Blogs</Box>
      </Container>
      <Footer />
    </div>
  );
};

export default page;
