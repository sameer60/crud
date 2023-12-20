import React from "react";
import { RESTAURANTS_IMAGE_URL } from "../../../utils/constants";

const ListItem = ({ items }) => {
  return (
    <div>
      <div>
        {items.map((item) => {
          return (
            <div className="flex my-4 justify-between items-center border-b-2 text-left px-8 transition-transform">
              <div className="flex flex-col">
                <div className="flex flex-col mb-2">
                  <h4 className="font-semibold text-md">
                    {item.card.info.name}
                  </h4>
                  <span className="font-semibold text-slate-600 text-sm">
                    ₹
                    {item.card.info.price / 100 ||
                      item.card.info.defaultPrice / 100}
                  </span>
                </div>
                <p className="text-slate-500 text-sm mb-2">
                  {item.card.info.description}
                </p>
              </div>
              <div className="relative">
                <img
                  src={RESTAURANTS_IMAGE_URL + item.card.info.imageId}
                  alt="item-image"
                  className="w-24 h-24 rounded-md mr-12 my-4"
                />
                <button className="absolute bg-black text-white p-2 rounded-md top-20 left-5 cursor-pointer">
                  Add +
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ListItem;
