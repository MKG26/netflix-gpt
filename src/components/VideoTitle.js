import React from "react";
import { FaPlay } from "react-icons/fa";
import { IoMdInformationCircleOutline } from "react-icons/io";

const VideoTitle = ({ title, overview }) => {
  return (
    <div className="w-screen aspect-video pt-[60%] md:pt-[20%] px-5 md:px-20 absolute bg-gradient-to-r from-black/70 to-transparent">
      <h1 className="text-2xl md:text-6xl  font-bold text-white">{title}</h1>
      <p className="hidden md:inline-block w-1/3 py-8 text-white">{overview}</p>
      <div className="flex mt-3 md:mt-0">
        <button className="h-10 md:h-14 bg-white text-black px-1 md:px-12  py-1 md:py-3 rounded-md text-xl  flex hover:bg-opacity-80">
          <FaPlay className="mr-2" size={26} />
          Play
        </button>
        <button className="hidden md:flex  ml-2 md:ml-5 bg-gray-500 px-2 md:px-8 py-1 md:py-3 rounded-md text-xl text-white  bg-opacity-70 hover:bg-opacity-50">
          <IoMdInformationCircleOutline className="mr-2" size={29} />
          More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
