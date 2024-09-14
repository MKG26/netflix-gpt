import React, { useState, useRef } from "react";
import Header from "./Header";
import { BG_IMG } from "../utils/constants";
import { checkValidData } from "../utils/validate";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { auth } from "../utils/firebase";

const Login = () => {
  const [signIn, setSignIn] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);

  const email = useRef(null);
  const password = useRef(null);

  const handleButtonClick = () => {
    const message = checkValidData(email.current.value, password.current.value);
    setErrorMessage(message);

    if (message) return;

    if (signIn) {
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          console.log(user);
          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;

          setErrorMessage(errorMessage);
        });
    } else {
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed up
          const user = userCredential.user;
          console.log(user);
          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;

          setErrorMessage(errorMessage);
          // ..
        });
    }
  };

  const handleSignInForm = () => {
    setSignIn(!signIn);
  };

  return (
    <div className="">
      <img className="absolute " src={BG_IMG} alt="Background Image" />
      <div className="absolute inset-0 bg-black opacity-50 "></div>
      <Header />

      <form
        onSubmit={(e) => e.preventDefault()}
        className="absolute  bg-opacity-65 bg-black  w-[450px] mx-auto left-0 right-0 top-0 bottom-0 my-28 p-14 text-white rounded
      -md"
      >
        <h1 className="text-3xl mb-7 font-bold ">
          {signIn ? "Sign In" : "Sign Up"}
        </h1>

        {signIn === false && (
          <input
            className="w-full p-4 mb-4 bg-black bg-opacity-0 border-2 border-gray-600 rounded-md"
            type="text"
            placeholder="Full Name"
          />
        )}
        <input
          ref={email}
          className="w-full p-4 mb-4 bg-black bg-opacity-0 border-2 border-gray-600 rounded-md"
          type="email"
          placeholder="Email"
        />
        <input
          ref={password}
          className="w-full p-4 mb-4 bg-black bg-opacity-0 border-2 border-gray-600 rounded-md"
          type="password"
          placeholder="Password"
        />

        <p className="text-red-500 mb-4">{errorMessage}</p>

        <button
          className="w-full p-2 bg-red-600 rounded-md mb-7"
          onClick={handleButtonClick}
        >
          {signIn ? "Sign In" : "Sign Up"}
        </button>
        <p className="text-gray-400">
          {signIn ? "New to Netflix? " : "Already a user? "}

          <span
            className=" text-white hover:cursor-pointer hover:underline"
            onClick={handleSignInForm}
          >
            {signIn ? "Sign up now." : "Sign in now."}
          </span>
        </p>
      </form>
    </div>
  );
};

export default Login;
