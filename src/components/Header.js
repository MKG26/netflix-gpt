import { signOut } from "firebase/auth";
import { NETFLIX_LOGO, SUPPROTED_LANGUAGES } from "../utils/constants";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { addUser, removeUser } from "../utils/redux/userSlice";
import { useDispatch } from "react-redux";
import { onAuthStateChanged } from "firebase/auth";
import { useEffect } from "react";
import { toggleGptSearchView } from "../utils/redux/gptSlice";
import { setLang } from "../utils/redux/configSlice";

const Header = () => {
  const user = useSelector((store) => store.user);
  const gptSearch = useSelector((store) => store.gpt.gptSearch);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {})
      .catch((error) => {
        navigate("/error");
      });
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/auth.user
        const { uid, email, displayName, photoURL } = user;
        dispatch(addUser({ uid, email, displayName, photoURL }));
        navigate("/browse");
      } else {
        // User is signed out
        // ...
        dispatch(removeUser());
        navigate("/");
      }
    });

    return () => unsubscribe();
  }, []);

  const handleGPTSearch = () => {
    dispatch(toggleGptSearchView());
  };

  const handleLanguageChange = (e) => {
    dispatch(setLang(e.target.value));
  };

  return (
    <div className="absolute w-full pl-[150px] flex justify-between bg-gradient-to-b from-black to-transparent z-10">
      <img className="w-52" src={NETFLIX_LOGO} alt="Netflix Logo" />

      {user && (
        <div className="flex items-center mr-8">
          {gptSearch && (
            <select
              className="p-3 bg-gray-800 text-white font-bold mr-5 rounded-md"
              onChange={handleLanguageChange}
            >
              {SUPPROTED_LANGUAGES.map((lang) => (
                <option key={lang.identifier} value={lang.identifier}>
                  {lang.name}
                </option>
              ))}
            </select>
          )}

          <button
            className="p-3 bg-gray-800 text-red-500 font-bold mr-5 rounded-md"
            onClick={handleGPTSearch}
          >
            {gptSearch ? "Home" : "GPT Search"}
          </button>
          <img
            className="w-12 rounded-md ml-2"
            src={user?.photoURL}
            alt="User Image"
          />
          <button
            className="ml-2 bg-white p-2 rounded-md"
            onClick={handleSignOut}
          >
            Sign Out
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
