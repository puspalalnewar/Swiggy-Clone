import React from 'react'
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";
import Card from './Card';

const TopRest = () => {
    return (
        <div className='max-w-[1200px] mx-auto mt-4'>
            <div className='flex items-center justify-between'>
                <div className='text-[25px] font-bold'>Top restaurant chains in Jodhpur</div>
                <div className='flex'>
                    <div className='flex justify-center items-center cursor-pointer w-[40px] h-[40px] bg-[#e2e2e7] rounded-full mx-2'><FaArrowLeft /></div>
                    <div className='flex justify-center items-center  cursor-pointer w-[40px] h-[40px] bg-[#e2e2e7] rounded-full mx-2'><FaArrowRight /></div>
                </div>

            </div>
            <Card/>
        </div>
    )
}

export default TopRest
