import React from 'react';

const Tile = ({question,answer}) => {
  return (
    <div class="max-w-xs w-[300px] h-[350px] bg-white text-center border border-gray-300 rounded-lg shadow-md shadow-gray-500/40 flex flex-col  p-5 space-y-5">
        <h1 className='text-xl font-semibold'>{question}</h1>
        <p className='font-medium lg:text-[16px] text-[#616060] '>{answer}</p>
    </div>
  );
}

export default Tile;
