import React from 'react';

const Tile = () => {
  return (
    <div class="max-w-xs w-[300px] bg-white text-center border border-gray-300 rounded-lg shadow-xl shadow-gray-500/40 flex flex-col  p-5 space-y-5">
        <h1 className='text-xl font-semibold'>What is the purpose of this app?</h1>
        <p className='font-semibold lg:text-[16px] text-[#616060] '>The problem we aim to address is the gap between freelancers or individuals who need assistance with specific tasks and skilled professionals who are willing to offer their services during their free time. </p>
    </div>
  );
}

export default Tile;
