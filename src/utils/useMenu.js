import { useEffect, useState } from "react";
import { RESTAURANTS_DETAILS_URL } from "../utils/constants";

const useMenu = (resId) => {
  const [resInfo, setResInfo] = useState(null);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const response = await fetch(`${RESTAURANTS_DETAILS_URL}${resId}`);
    const json = await response.json();
    setResInfo(json.data);
  };

  return resInfo;
};

export default useMenu;
