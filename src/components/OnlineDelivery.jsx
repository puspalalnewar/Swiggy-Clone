import React from 'react'
import Card from './Card'
import mixture from '../images/res-mixture.jpg'
import fish from '../images/res-fish.jpeg'
import fruites from '../images/res-fruites.jpeg'

const OnlineDelivery = () => {

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
        <div className='max-w-[1200px] mx-auto'>
            <div className='flex items-center justify-between'>
                <div className='text-[25px] font-bold'>Top restaurant with online food delivery jodhpur</div>
            </div>
            <div className="grid grid-cols-4 gap-6">
                {
                    data.map((val, idx) => {
                        return (
                            <div className="box">
                                <Card {...val} image = {val.name} id = {idx} />
                            </div>
                            
                        )
                    })
                }
            </div>
        </div>
    )
}

export default OnlineDelivery
