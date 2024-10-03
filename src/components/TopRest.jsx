import { React, useState } from 'react'
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";
import Card from './Card';
import mixture from '../images/res-mixture.jpg'
import fish from '../images/res-fish.jpeg'
import fruites from '../images/res-fruites.jpeg'


const TopRest = () => {

    const data = [
        {
            name: mixture,
            offer: "Items at ₹ 179",
            title: "Pizza Hut",
            rating: 4.2,
            minTime: 30,
            maxTime: 45,
            shopName: "Pizzas",
            place: "New Jodhpur",
        },
        {
            name: fish,
            offer: "₹ 50 OF ABOVE at ₹ 199",
            title: "Pizza Hut",
            rating: 4.2,
            minTime: 30,
            maxTime: 45,
            shopName: "Pizzas",
            place: "New Jodhpur",
        },
        {
            name: fruites,
            offer: "₹ 70 OF ABOVE at ₹ 249",
            title: "Pizza Hut",
            rating: 4.2,
            minTime: 30,
            maxTime: 45,
            shopName: "Pizzas",
            place: "New Jodhpur",
        },
        {
            name: mixture,
            offer: "₹ 80 OF ABOVE at ₹ 349",
            title: "Pizza Hut",
            rating: 4.2,
            minTime: 30,
            maxTime: 45,
            shopName: "Pizzas",
            place: "New Jodhpur",
        },
        {
            name: mixture,
            offer: "Items at ₹ 179",
            title: "Pizza Hut",
            rating: 4.2,
            minTime: 30,
            maxTime: 45,
            shopName: "Pizzas",
            place: "New Jodhpur",
        },
        {
            name: mixture,
            offer: "Items at ₹ 179",
            title: "Pizza Hut",
            rating: 4.2,
            minTime: 30,
            maxTime: 45,
            shopName: "Pizzas",
            place: "New Jodhpur",
        },
        {
            name: mixture,
            offer: "Items at ₹ 179",
            title: "Pizza Hut",
            rating: 4.2,
            minTime: 30,
            maxTime: 45,
            shopName: "Pizzas",
            place: "New Jodhpur",
        },
        {
            name: mixture,
            offer: "Items at ₹ 179",
            title: "Pizza Hut",
            rating: 4.2,
            minTime: 30,
            maxTime: 45,
            shopName: "Pizzas",
            place: "New Jodhpur",
        },
        {
            name: mixture,
            offer: "Items at ₹ 179",
            title: "Pizza Hut",
            rating: 4.2,
            minTime: 30,
            maxTime: 45,
            shopName: "Pizzas",
            place: "New Jodhpur",
        },
        {
            name: mixture,
            offer: "Items at ₹ 179",
            title: "Pizza Hut",
            rating: 4.2,
            minTime: 30,
            maxTime: 45,
            shopName: "Pizzas",
            place: "New Jodhpur",
        },
        {
            name: mixture,
            offer: "Items at ₹ 179",
            title: "Pizza Hut",
            rating: 4.2,
            minTime: 30,
            maxTime: 45,
            shopName: "Pizzas",
            place: "New Jodhpur",
        },
    ]

    const [slide, setSlide] = useState(0);

    const nextSlide = () => {
        if (slide >= 9) {
            return;
        }
        setSlide(slide + 3.3);
        // console.log(data.length);
    }
    const prevSlide = () => {
        if (slide <= 0) {
            setSlide(0);
        } else {
            setSlide(slide - 3.3);
        }

    }

    return (
        <div className='max-w-[1200px] mx-auto mt-4'>
            <div className='flex items-center justify-between'>
                <div className='text-[25px] font-bold'>Top restaurant chains in Jodhpur</div>
                <div className='flex'>
                    <div onClick={prevSlide} className='flex justify-center items-center cursor-pointer w-[40px] h-[40px] bg-[#e2e2e7] rounded-full mx-2'><FaArrowLeft /></div>
                    <div onClick={nextSlide} className='flex justify-center items-center  cursor-pointer w-[40px] h-[40px] bg-[#e2e2e7] rounded-full mx-2'><FaArrowRight /></div>
                </div>
            </div>

            <div className="flex gap-10 overflow-hidden" >

                {
                    data.map((val, idx) => {
                        return (
                            <div id={idx} className="box duration-500" style={{
                                transform: `translateX(-${slide * 100}%)`
                            }}>
                                <Card width="w-full md:w-[273px]" {...val} image={val.name} />
                            </div>

                        )
                    })
                }

            </div>
            <hr className='my-10 border-[2px]' />
        </div>
    )
}

export default TopRest
