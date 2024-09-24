import React from "react";
import lang from "../utils/languageConstant";
import { useSelector } from "react-redux";

const GPTSearchBar = () => {
  const langKey = useSelector((store) => store.config.lang);

  return (
    <div className="pt-[10%] flex justify-center">
      <input
        className="w-2/5 py-3 px-5 rounded-full bg-opacity-80 bg-black text-white border-2 border-gray-600"
        type="text"
        placeholder={lang[langKey].gptSearchPlaceholder}
      />

      <button className="ml-5 bg-red-500 px-8 py-3 rounded-full text-xl text-black font-bold  ">
        {lang[langKey].search}
      </button>
    </div>
  );
};

export default GPTSearchBar;
