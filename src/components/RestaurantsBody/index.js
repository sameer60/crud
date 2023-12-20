import { useEffect, useState } from "react";
import RestaurantCard, { withPromotedLabel } from "./RestaurantCard";
import Shimmer from "./Shimmer";
import { RESTAURANTS_API_URL } from "../../utils/constants";

const RestaurantsBody = () => {
  const [resList, setResList] = useState([]);
  const [filteredList, setFilteredList] = useState([]);
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(RESTAURANTS_API_URL);
    const response = await data.json();
    setResList(
      response?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants
    );
    setFilteredList(
      response?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants
    );
  };
  if (resList?.length === 0) return <Shimmer />;

  const PromotedRestaurantCard = withPromotedLabel(RestaurantCard);

  return (
    <div className="p-4 m-4 bg-gray-100">
      <div className="flex items-center justify-between">
        <button
          className="px-4 py-2 m-4 bg-white rounded-lg"
          onClick={() => {
            const topRatedList = resList?.filter((res) => {
              return res.info.avgRating >= 4;
            });
            setFilteredList(topRatedList);
          }}
        >
          Top Rated Restaurant
        </button>
        <div className="p-4 mr-12">
          <input
            type="text"
            className="mr-2 border-slate-400 border-solid border-2 rounded-md py-2 px-4"
            value={searchText}
            placeholder="Search..."
            onChange={(e) => setSearchText(e.target.value)}
          />
          <button
            className="px-4 py-2 m-4 bg-white rounded-lg"
            onClick={() => {
              const filteredList = resList.filter((res) =>
                res.info.name.toLowerCase().includes(searchText.toLowerCase())
              );
              setFilteredList(filteredList);
            }}
          >
            Search
          </button>
        </div>
      </div>
      <div className="flex flex-wrap items-center justify-center">
        {filteredList?.length === 0 ? (
          <div className="no-match-found">No match found</div>
        ) : (
          filteredList?.map((res) => {
            return res.info.promoted ? (
              <PromotedRestaurantCard key={res.info.id} data={res.info} />
            ) : (
              <RestaurantCard key={res.info.id} data={res.info} />
            );
          })
        )}
      </div>
    </div>
  );
};

export default RestaurantsBody;
