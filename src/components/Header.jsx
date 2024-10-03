import React, { useState } from 'react'
import { RxCaretDown } from "react-icons/rx";
import { SiSwiggy } from "react-icons/si";
import { IoIosSearch } from "react-icons/io";
import { BiSolidOffer } from "react-icons/bi";
import { IoMdHelpCircleOutline } from "react-icons/io";
import { FiUser } from "react-icons/fi";
import { FaCartPlus } from "react-icons/fa6";




const Header = () => {

  const [toggle, setToggle] = useState(false);

  const showSideMenu = () => {
    setToggle(true);
  }

  const hideSideMenu = () => {
    setToggle(false);
  }

  const links = [
    {
      icon: <IoIosSearch />,
      name: "Search",
    },
    {
      icon: <BiSolidOffer />,
      name: "Offer",
      new: "New",
    },
    {
      icon: <IoMdHelpCircleOutline />,
      name: "Help"
    },
    {
      icon: <FiUser />,
      name: "Sign In",
    },
    {
      icon: <FaCartPlus />,
      name: "Cart"
    }

  ]

  return (
    <>
      <div className="black-overlay h-full w-full fixed duration-500" onClick={hideSideMenu} style={{
        opacity: toggle ? 1 : 0,
        visibility: toggle ? 'visible' : 'hidden',
        
      }}></div>

      <div className='w-[500px] h-full bg-white absolute duration-300' style={{
        left: toggle ? "0%" : "-100%",
        zIndex : 9999999,
      }}></div>
      <header className='p-[15px] shadow-xl sticky top-0 z-[9999] bg-white' >
        <div className='max-w-[1200px] mx-auto  flex items-center'>
          <div className='w-[50px]  mr-6'>
            <SiSwiggy className='w-full text-orange-400 text-5xl mr-4' />
          </div>
          <div className="">
            <span className='font-bold border-b-[3px] border-[black] mr-1'>Ratanada</span>Jodhpur, Rajasthan, India <RxCaretDown onClick={showSideMenu} fontSize={25} className='inline font-bold  text-[#fc8019] bold cursor-pointer' />
          </div>
          <nav className='hidden md:flex list-none gap-8 ml-auto font-semibold text-[18px]'>
            {
              links.map((link, idx) => {
                return (
                  <li key={idx} className='flex items-center gap-2 hover:text-[#fc8019] cursor-pointer'>
                    {link.icon}
                    {link.name}
                    <sup>{link.new}</sup>
                  </li>
                )

              })
            }
          </nav>
        </div>

      </header>
    </>
  )
}

export default Header
