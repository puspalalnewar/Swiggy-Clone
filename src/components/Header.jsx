import React, { useState } from 'react'
import { RxCaretDown } from "react-icons/rx";
import { SiSwiggy } from "react-icons/si";
import { IoIosSearch } from "react-icons/io";
import { BiSolidOffer } from "react-icons/bi";



const Header = () => {

  const [toggle, setToggle] = useState(false);

  const showSideMenu = () => {
    setToggle(true);
  }

  const hideSideMenu = () => {
    setToggle(false);
  }
  return (
    <>
      <div className="black-overlay h-full w-full fixed duration-500" onClick={hideSideMenu} style={{
        opacity: toggle ? 1 : 0,
        visibility: toggle ? 'visible' : 'hidden'
      }}></div>

      <div className='w-[500px] h-full bg-white absolute duration-300' style={{
        left: toggle ? "0%" : "-100%"
      }}></div>
      <header className='p-[15px] shadow-xl' >
        <div className='max-w-[1200px] mx-auto border border-red-400 flex items-center'>
          <div className='w-[50px]  mr-6'>
            <SiSwiggy className='w-full text-orange-400 text-5xl mr-4' />
          </div>
          <div className="">
            <span className='font-bold border-b-[3px] border-[black] mr-1'>Ratanada</span>Jodhpur, Rajasthan, India <RxCaretDown onClick={showSideMenu} fontSize={25} className='inline font-bold  text-[#fc8019] bold cursor-pointer' />
          </div>
          <nav className='flex list-none gap-5 ml-auto font-semibold text-[18px]'>
            <li className='flex items-center gap-2'>
              <IoIosSearch />
              Search
            </li>
            <li className='flex items-center gap-2'>
              <BiSolidOffer/>
              Offers
            </li>
            <li>
              Help
            </li>
            <li>
              Sign In
            </li>
            <li>
              Cart
            </li>

          </nav>
        </div>

      </header>
    </>
  )
}

export default Header
