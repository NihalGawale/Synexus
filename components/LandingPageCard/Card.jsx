import Image from "next/image";
import React from "react";

const Card = ({imagePath, title, description}) => {
  return (
    <div class="max-w-xs w-[300px] bg-white border border-gray-200 rounded-lg dark:bg-gray-800 dark:border-gray-700">
      <div className="w-full h-[300px] relative">
        <Image
          fill
          objectFit="cover"
          class="rounded-t-lg"
          src={imagePath}
          alt=""
        />
      </div>

      <div class="p-5">
        <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white flex justify-center text-center">
         {title}
        </h5>

        <p class="mb-3 font-normal text-gray-700 dark:text-gray-400 text-center">
         {description}
        </p>
      </div>
    </div>
  );
};

export default Card;
