import { useState } from "react";
import { useParams } from "react-router-dom";
import useMenu from "../../../utils/useMenu";
import Shimmer from "../Shimmer";
import RestaurantCategory from "./RestaurantCategory";

const ResDetailCard = () => {
  const [showItem, setShowItem] = useState(0);
  const { resId } = useParams();
  const resInfo = useMenu(resId);

  if (resInfo === null) return <Shimmer />;

  const { name, cuisines, areaName, avgRatingString } =
    resInfo?.cards[0]?.card?.card?.info;

  const resCategoriesList =
    resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (c) =>
        c.card.card["@type"] ==
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );

  return (
    <>
      <div className="text-center">
        <h3 className="font-bold text-lg">{name}</h3>
        <h4 className="text-slate-600 font-semibold">{cuisines}</h4>
        <p className="">{areaName}</p>
      </div>
      <div className="text-center m-8">
        {resCategoriesList.map((item, index) => {
          return (
            <RestaurantCategory
              key={index}
              data={item.card.card}
              showItem={index === showItem ? true : false}
              setShowItem={() => setShowItem(index)}
            />
          );
        })}
      </div>
    </>
  );
};

export default ResDetailCard;
