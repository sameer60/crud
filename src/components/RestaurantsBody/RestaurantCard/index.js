import { Link } from "react-router-dom";
import { RESTAURANTS_IMAGE_URL } from "../../../utils/constants";

const RestaurantCard = ({ data }) => {
  const { name, cuisines, cloudinaryImageId, avgRatingString } = data;
  return (
    <Link to={`/restaurants/${data.id}`}>
      <div className="w-72 bg-white p-3 m-4 rounded-lg">
        <img
          src={`${RESTAURANTS_IMAGE_URL}${cloudinaryImageId}`}
          alt="res image"
          className=" w-72 h-52 rounded-lg"
        />
        <div className="my-4 text-center">
          <h2 className="font-bold text-xl">{name}</h2>
          <p className="res-cuisines">{cuisines.toString()}</p>
          <p className="res-rating">{avgRatingString}</p>
        </div>
      </div>
    </Link>
  );
};

export const withPromotedLabel = (RestaurantCard) => {
  return (props) => {
    return (
      <div>
        <label className="absolute m-2 p-2 bg-black text-white rounded-lg">
          Promoted
        </label>
        <RestaurantCard {...props} />
      </div>
    );
  };
};

export default RestaurantCard;
