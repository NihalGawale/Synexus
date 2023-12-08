import React from "react";

const Wrapper = ({ children }) => {
  return (
    <div
      id="wrapper"
      className="flex  items-center justify-center flex-col pt-0 lg:pt-0  space-y-5 "
    >
      {children}
    </div>
  );
};

export default Wrapper;
