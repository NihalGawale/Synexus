// import styled from "styled-components";

// export const Container = styled.div`
//     width: 70%;
//     height : 100%;
//     background-color : #000;
//     color : #fff
// `

import React from "react";

const Container = ({ children }) => {
  return <div id="container" className="max-w-screen-2xl w-[90%] h-[100%] flex flex-col justify-center items-center">{children}</div>;
};

export default Container;
