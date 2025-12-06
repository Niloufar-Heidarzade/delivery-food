import React, { useContext } from "react";
import { StoreContext } from "../context/StoreContext";
import FoodItem from "./FoodItem";

const FoodDisplay = ({ category }) => {
  const { food_list } = useContext(StoreContext);
  return (
    <div id="food-display" className="mt-[30px]">
      <h2 className="text-[max(2vw,24px)] font-medium">Top dishes near you</h2>
      <div className="grid mt-[30px] gap-[30px] gap-y-[50px] grid-cols-[repeat(auto-fill,minmax(240px,1fr))]">
        {food_list.map((item, index) => {
          return (
            <FoodItem
              key={index}
              id={item._id}
              name={item.name}
              description={item.description}
              price={item.price}
              image={item.image}
            />
          );
        })}
      </div>
    </div>
  );
};

export default FoodDisplay;
