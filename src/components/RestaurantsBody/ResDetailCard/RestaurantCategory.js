import React from "react";
import ListItem from "./ListItem";

const RestaurantCategory = (props) => {
  const { showItem, setShowItem } = props;
  const handleClick = () => {
    setShowItem();
  };
  return (
    <div
      className="shadow-lg bg-slate-50 m-4 px-8 py-4 cursor-pointer"
      onClick={handleClick}
    >
      <div className="flex justify-between">
        <h4 className="font-bold text-lg">
          {props.data.title} ( {props.data.itemCards.length} )
        </h4>
        <span className="font-bold text-lg">▼</span>
      </div>
      <div className="">
        {showItem && <ListItem items={props.data.itemCards} />}
      </div>
    </div>
  );
};

export default RestaurantCategory;
