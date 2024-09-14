import { NETFLIX_LOGO } from "../utils/constants";

const Header = () => {
  return (
    <div className="absolute pl-[150px]">
      <img className="w-52" src={NETFLIX_LOGO} alt="Netflix Logo" />
    </div>
  );
};

export default Header;
