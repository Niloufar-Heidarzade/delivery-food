import React from "react";
import { assets } from "../assets/frontend_assets/assets";
import "../index.css"

const FoodItem = ({ id, name, price, description, image }) => {
  return (
    <div className="w-[100%] m-auto rounded-[15px] shadow-[0_0_10px_#00000015] transition duration-[0.3s] fadeIn">
      <div>
        <img src={image} className="w-[100% rounded-[15px_15px_0_0]"/>
      </div>
      <div className="p-[20px]">
        <div className="flex justify-between items-center mb-p[10px]">
          <p className="text-[20px] font-medium">{name}</p>
          <img src={assets.rating_starts} className="w-[70px]"/>
        </div>
        <p className="text-[#676767] text-[12px]">{description}</p>
        <p className="text-[#FF6347] text-[22px] font-medium my-[10px] mx-0">${price}</p>
      </div>
    </div>
  );
};

export default FoodItem;
