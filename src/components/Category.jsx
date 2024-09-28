import React, { useState } from 'react'
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";
import burger from '../images/burger.jpeg'
import pizzaType1 from '../images/pizza.jpeg'
import pizzaType2 from '../images/pizzaType-2.jpeg'


const Category = () => {

    const data = [
        {
            "image": burger,
            "path": "north-indian"
        },
        {
            "image": pizzaType1,
            "path": "pizza"
        },
        {
            "image": pizzaType2,
            "path": "noodles"
        },
        {
            "image": burger,
            "path": "pasta"
        },
        {
            "image": burger,
            "path": "paratha"
        },
        {
            "image": burger,
            "path": "biryani"
        },
        {
            "image": burger,
            "path": "burger"
        },
        {
            "image": burger,
            "path": "cakes"
        },
        {
            "image": burger,
            "path": "chinese"
        },
        {
            "image": burger,
            "path": "chole-bature"
        },
        {
            "image": burger,
            "path": "dost"
        },
        {
            "image": burger,
            "path": "gulab-jamun"
        },
        {
            "image": burger,
            "path": "ice-creams"
        },
        {
            "image": burger,
            "path": "idli"
        },
        {
            "image": burger,
            "path": "khichdi"
        },
        {
            "image": burger,
            "path": "poori"
        },
        {
            "image": burger,
            "path": "pure-veg"
        },
        {
            "image": burger,
            "path": "rolls"
        },
        {
            "image": burger,
            "path": "salad"
        },
        {
            "image": burger,
            "path": "south-indian"
        }
    ]

    const [slide, setSlide] = useState(0);

    const nextSlide = () => {
        if (slide >= 15) {
            return;
        }
        setSlide(slide + 3);
        // console.log(data.length);
    }
    const prevSlide = () => {
        if (slide <= 0) {
            setSlide(0);
        } else {
            setSlide(slide - 3);
        }

    }


    return (
        <div className='max-w-[1200px] mx-auto mt-4'>
            <div className='flex items-center justify-between'>
                <div className='text-[25px] font-bold'>What's on your mind?</div>
                <div className='flex'>
                    <div onClick={prevSlide} className='flex justify-center items-center cursor-pointer w-[40px] h-[40px] bg-[#e2e2e7] rounded-full mx-2'><FaArrowLeft /></div>
                    <div onClick={nextSlide} className='flex justify-center items-center  cursor-pointer w-[40px] h-[40px] bg-[#e2e2e7] rounded-full mx-2'><FaArrowRight /></div>
                </div>

            </div>
            <div className="flex mt-4 overflow-hidden">
                {
                    data.map((food, idx) => {
                        return (
                            <div key={idx} className="w-[200px] shrink-0 duration-500" style={{
                                transform: `translateX(-${slide * 100}%)`
                            }}>
                                <img className='rounded-full aspect-[9/16]' src={food.image} alt="" />
                                <p className='font-bold mr-12'>{food.path}</p>
                            </div>
                        )
                    })
                }
            </div>
            <hr className='my-10 border-[2px]'/>
        </div>
    )
}

export default Category
