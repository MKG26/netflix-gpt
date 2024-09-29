import { IMG_CDN_URL } from "../utils/constants";

const MoviesCard = ({ posterPath }) => {
  if (!posterPath) return;

  return (
    <div className=" w-[130px] md:w-[200px] px-4 ">
      <img
        className="rounded-lg"
        src={IMG_CDN_URL + posterPath}
        alt="Movies Card"
      />
    </div>
  );
};

export default MoviesCard;
