// import React from 'react';
// import styled from 'styled-components';

// const Box = styled.div`
//     width: 100%;
//     height: 100%;
//     background-color: lightblue;
//     display : flex;
//     flex-direction: column;
//     justify-content: center;
//     align-items: center;
//     `

// export default Box

import React from 'react';

const Box = ({children}) => {
  return (
    <div id="box" className='w-full h-full flex flex-col pt-9 lg:pt-[80px] space-y-24 lg:space-y-52'>
      {children}
    </div>
  );
}

export default Box;

