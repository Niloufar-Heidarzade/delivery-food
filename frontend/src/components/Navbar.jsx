import React, { useState } from 'react'
import { assets } from '../assets/frontend_assets/assets'

const Navbar = () => {

  const [menu , setMenu] = useState("home");

  return (
    <div className='py-[20px] px-0 flex justify-between items-center'>
      <img src={assets.logo} className='w-[150px]'/>
      <ul className='flex list-none gap-[20px] text-[#49557e] text-[18px] '>
        <li onClick={() => setMenu("home")} className={menu==="home"?"pb-[2px] border-b-solid border-b-[2px] border-b-[#49557e] cursor-pointer":"cursor-pointer"}>home</li>
        <li onClick={() => setMenu("menu")} className={menu==="menu"?"pb-[2px] border-b-solid border-b-[2px] border-b-[#49557e] cursor-pointer":"cursor-pointer"}>menu</li>
        <li onClick={() => setMenu("mobile-app")} className={menu==="mobile-app"?"pb-[2px] border-b-solid border-b-[2px] border-b-[#49557e] cursor-pointer":"cursor-pointer"}>mobile-app</li>
        <li onClick={() => setMenu("contact-us")} className={menu==="contact-us"?"pb-[2px] border-b-solid border-b-[2px] border-b-[#49557e] cursor-pointer":"cursor-pointer"}>contact us</li>
      </ul>
      <div className='flex items-center gap-[40px]'>
        <img src={assets.search_icon} />
        <div className='relative'>
          <img src={assets.basket_icon} />
          <div className='absolute min-w-[10px] min-h-[10px] bg-[#FF6347] rounded-[5px] top-[-8px] right-[-8px]'></div>
        </div>
        <button className='bg-transparent text-[16px] text-[#49557e] boredr-solid border-[1px] border-[#FF6347] py-[10px] px-[30px] rounded-[50px] hover:bg-[#fff4f2] cursor-pointer transition duration-300'>sign in</button>
      </div>
    </div>
  )
}

export default Navbar