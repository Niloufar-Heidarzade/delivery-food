import React from "react";
import header_image from "../assets/frontend_assets/header_img.png";
import "../index.css"

const Header = () => {
  return (
    <div
      className="h-[34vw] mx-auto my-[30px] bg-no-repeat bg-contain relative"
      style={{
        backgroundImage: `url(${header_image})`,
      }}
    >
      <div
        className="absolute flex flex-col items-start gap-[1.5vw] max-w-[50%] bottom-[10%] left-[6vw] fadeIn"
      >
        <h2 className="font-medium text-white text-[max(4.5vw,22px)] ">
          Order your favorite food here
        </h2>
        <p className="text-white text-[1vw]">
          Choose from a diverse menu featuring a delectable array of dishes
          crafted with the finest ingredients and culinary expertise. Our
          mission is to satisfy your cravings and elevate your dining experience
          , one delicious meal at a time.
        </p>
        <button className="border-none text-[#747474] font-medium px-[2.3vw] py-[1vw] bg-white w-[max(1vw , 13px)] rounded-[50px]">
          View Menu
        </button>
      </div>
    </div>
  );
};

export default Header;
