import React, { useState, useRef } from "react";
import Header from "./Header";
import { BG_IMG, USER_IMG } from "../utils/constants";
import { checkValidData } from "../utils/validate";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { auth } from "../utils/firebase";

import { useDispatch } from "react-redux";
import { addUser } from "../utils/redux/userSlice";

const Login = () => {
  const dispatch = useDispatch();

  const [signIn, setSignIn] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);

  const email = useRef(null);
  const password = useRef(null);
  const userName = useRef(null);

  const handleButtonClick = () => {
    const message = checkValidData(
      userName?.current?.value,
      email.current.value,
      password.current.value
    );
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

          updateProfile(user, {
            displayName: userName.current.value,
            photoURL: USER_IMG,
          })
            .then(() => {
              const { uid, email, displayName, photoURL } = auth.currentUser;

              dispatch(
                addUser({
                  uid: uid,
                  email: email,
                  displayName: displayName,
                  photoURL: photoURL,
                })
              );
            })
            .catch((error) => {
              setErrorMessage(error.message);
            });
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
      <img
        className="absolute w-screen h-screen object-cover "
        src={BG_IMG}
        alt="Background Image"
      />
      <div className="absolute inset-0 bg-black opacity-50 "></div>
      <Header />

      <form
        onSubmit={(e) => e.preventDefault()}
        className="absolute  bg-opacity-65 bg-black w-[90%]  md:w-[450px] mx-auto left-0 right-0 top-0 bottom-0 mb-[10%] mt-28 p-10 md:p-14 text-white rounded
      -md"
      >
        <h1 className="text-3xl mb-7 font-bold ">
          {signIn ? "Sign In" : "Sign Up"}
        </h1>

        {signIn === false && (
          <input
            ref={userName}
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
