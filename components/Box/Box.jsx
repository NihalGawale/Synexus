import React from 'react';

const Box = ({children}) => {
  return (
    <div id="box" className='w-full h-full flex flex-col pt-9 lg:pt-[80px] space-y-24 lg:space-y-52'>
      {children}
    </div>
  );
}

export default Box;

