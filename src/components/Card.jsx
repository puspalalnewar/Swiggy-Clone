import React from 'react'
import { FaStar } from "react-icons/fa";
// import mixture from '../images/res-mixture.jpg'

const Card = (props) => {


  return (
    <div className='w-[273px] mt-8 shrink-0 grow'>
      <div className="h-[200px] w-[300px] rounded-[15px] overflow-hidden relative">
        <img className=' h-full w-full' src={props.name} alt="" />
        <div className='absolute image-overlay w-full h-full top-0 flex items-end p-2 text-[25px] font-bold text-white tracking-tighter'>
            {props.offer}
        </div>
      </div>
      <div className='flex mt-2 text-2xl font-bold'>
        {props.title}
      </div>
      <div className='flex items-center gap-2'>
        <FaStar className='text-green-500 inline'/> {props.rating}
        <span className='ml-2'> {props.minTime} - {props.maxTime} Mins </span>
      </div>
      <div className='flex'>
        {props.shopName}
      </div>
      <div className='flex'>
      {props.place}
      </div>
    </div>
  )
}

export default Card
