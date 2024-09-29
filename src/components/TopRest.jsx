import React from 'react'
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";
import Card from './Card';
import mixture from '../images/res-mixture.jpg'
import fish from '../images/res-fish.jpeg'
import fruites from '../images/res-fruites.jpeg'

const TopRest = () => {

    const data = [
        {
            name: mixture,
            offer : "Items at ₹ 179",
            title : "Pizza Hut",
            rating : 4.2,
            minTime : 30,
            maxTime : 45,
            shopName : "Pizzas",
            place : "New Jodhpur",
        },
        {
            name: fish,
            offer : "₹ 50 OF ABOVE at ₹ 199",
            title : "Pizza Hut",
            rating : 4.2,
            minTime : 30,
            maxTime : 45,
            shopName : "Pizzas",
            place : "New Jodhpur",
        },
        {
            name: fruites,
            offer : "₹ 70 OF ABOVE at ₹ 249",
            title : "Pizza Hut",
            rating : 4.2,
            minTime : 30,
            maxTime : 45,
            shopName : "Pizzas",
            place : "New Jodhpur",
        },
        {
            name: mixture,
            offer : "₹ 80 OF ABOVE at ₹ 349",
            title : "Pizza Hut",
            rating : 4.2,
            minTime : 30,
            maxTime : 45,
            shopName : "Pizzas",
            place : "New Jodhpur",
        },
        {
            name: mixture,
            offer : "Items at ₹ 179",
            title : "Pizza Hut",
            rating : 4.2,
            minTime : 30,
            maxTime : 45,
            shopName : "Pizzas",
            place : "New Jodhpur",
        },
        {
            name: mixture,
            offer : "Items at ₹ 179",
            title : "Pizza Hut",
            rating : 4.2,
            minTime : 30,
            maxTime : 45,
            shopName : "Pizzas",
            place : "New Jodhpur",
        },
        {
            name: mixture,
            offer : "Items at ₹ 179",
            title : "Pizza Hut",
            rating : 4.2,
            minTime : 30,
            maxTime : 45,
            shopName : "Pizzas",
            place : "New Jodhpur",
        },
    ]

    return (
        <div className='max-w-[1200px] mx-auto mt-4'>
            <div className='flex items-center justify-between'>
                <div className='text-[25px] font-bold'>Top restaurant chains in Jodhpur</div>
                <div className='flex'>
                    <div className='flex justify-center items-center cursor-pointer w-[40px] h-[40px] bg-[#e2e2e7] rounded-full mx-2'><FaArrowLeft /></div>
                    <div className='flex justify-center items-center  cursor-pointer w-[40px] h-[40px] bg-[#e2e2e7] rounded-full mx-2'><FaArrowRight /></div>
                </div>

            </div>
            <div className="flex gap-10 overflow-hidden">

                {
                    data.map((val, idx) => {
                        return (
                            <Card {...val} image = {val.name} id = {idx}/>
                        )
                    })
                }

            </div>
        </div>
    )
}

export default TopRest
