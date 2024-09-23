import React from "react";
import { FaPlay } from "react-icons/fa";
import { IoMdInformationCircleOutline } from "react-icons/io";

const VideoTitle = ({ title, overview }) => {
  return (
    <div className="w-screen aspect-video pt-[25%] px-20 absolute bg-gradient-to-r from-black/70 to-transparent">
      <h1 className="text-6xl font-bold text-white">{title}</h1>
      <p className="w-1/3 py-8 text-white">{overview}</p>
      <div className="flex">
        <button className="bg-white text-black px-12 py-3 rounded-md text-xl  flex hover:bg-opacity-80">
          <FaPlay className="mr-2" size={26} />
          Play
        </button>
        <button className="ml-5 bg-gray-500 px-8 py-3 rounded-md text-xl text-white flex bg-opacity-70 hover:bg-opacity-50">
          <IoMdInformationCircleOutline className="mr-2" size={29} />
          More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
