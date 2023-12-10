import Box from "@/components/Box/Box";
import Container from "@/components/Container/Container";
import Footer from "@/components/Footer/Footer";
import React from "react";

const page = () => {
  return (
    <div className="w-full h-screen" >
      <Container>
        <Box>Blog</Box>
      </Container>
      <Footer />
    </div>
  );
};

export default page;
