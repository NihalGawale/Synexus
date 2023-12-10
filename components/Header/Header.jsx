import Image from "next/image";
import Link from "next/link";
import React from "react";

const Header = () => {
  // const router
  return (
    <div className="  bg-[#f3f3f3] w-[100%] lg:w-[70%] p-3 lg:p-4 flex justify-center items-center text-[21px] lg:text-3xl rounded-full font-semibold font border-b shadow-lg shadow-gray-500/30 cursor-pointer">
      <div className="flex justify-between items-center w-[90%]">
        <p className="">Synexus</p>
        <div className="text-sm lg:text-base text-[#7d7b7b] flex font-medium space-x-4 lg:space-x-10">
          <Link className="hover:text-black " href="/Blog"> Blogs</Link> 
          <div className="w-5 h-5 lg:w-7 lg:h-7 relative">
            <Image src="/assets/discord.png" alt="discord-image" fill objectFit="cover"/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
