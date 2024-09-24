import React from "react";
import { BG_IMG } from "../utils/constants";
import GPTSearchBar from "./GPTSearchBar";

const GPTSearch = () => {
  return (
    <div>
      <div className="absolute -z-10">
        <img src={BG_IMG} alt="background image" />
      </div>
      <GPTSearchBar />
    </div>
  );
};

export default GPTSearch;
