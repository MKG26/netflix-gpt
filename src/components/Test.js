import React from "react";

const Test = () => {
  const getData = () => {
    console.log("Fetching Data...");
  };

  const doSomeMagic = (fn, delay) => {
    let timer;
    return function () {
      let context = this,
        args = arguments;
      clearTimeout(timer);
      timer = setTimeout(() => {
        fn.apply(context, args);
      }, delay);
    };
  };

  const betterFunction = doSomeMagic(getData, 1000);

  return (
    <div>
      <input type="text" onKeyUp={betterFunction} />
    </div>
  );
};

export default Test;
