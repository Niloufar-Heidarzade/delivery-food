import React from "react";
import { menu_list } from "../assets/frontend_assets/assets";

const ExploreMenu = ({category , setCategory}) => {
  return (
    <div className="flex flex-col gap-[20px]" id="explore-menu">
      <h1 className="text-[#262626] font-medium">Explore our menu</h1>
      <p className="max-w-[60%] text-[#808080]">
        Choose from a diverse menu featuring a delectable array of dishes
        crafted with the finest ingredients and culinary expertise. Our mission
        is to satisfy your cravings and elevate your dining experience , one
        delicious meal at a time.
      </p>
      <div className="flex justify-between items-center gap-[30px] text-center mx-[0px] my-[20px] overflow-x-scroll hide-scrollbar">
        {menu_list.map((item, index) => {
          return (
            <div key={index} onClick={() => setCategory(prev => prev===item.menu_name ? "All" : item.menu_name)}>
              <img src={item.menu_image} className={`w-[7.5vw] min-w-[80px] cursor-pointer rounded-[50%] transition duration-[0.2s] ${category===item.menu_name && "border-solid border-[4px] border-[#FF6347] p-[2px]"}`}/>
              <p className="mt-[10px] text-[#747474] text-[max(1.4vw,16px)] cursor-pointer">{item.menu_name}</p>
            </div>
          );
        })}
      </div>
      <hr className="mx-0 my-[10px] h-[2px] bg-[#e2e2e2] border-none"/>
    </div>
  );
};

export default ExploreMenu;
