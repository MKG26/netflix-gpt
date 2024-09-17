import { signOut } from "firebase/auth";
import { NETFLIX_LOGO, USER_IMG } from "../utils/constants";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const Header = () => {
  const user = useSelector((store) => store.user);

  const navigate = useNavigate();
  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        navigate("/");
      })
      .catch((error) => {
        navigate("/error");
      });
  };

  return (
    <div className="absolute w-full pl-[150px] flex justify-between bg-gradient-to-b from-black to-transparent">
      <img className="w-52" src={NETFLIX_LOGO} alt="Netflix Logo" />

      {user && (
        <div className="flex items-center mr-8">
          <p>{user?.displayName}</p>
          <img
            className="w-12 rounded-md ml-2"
            src={USER_IMG}
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
