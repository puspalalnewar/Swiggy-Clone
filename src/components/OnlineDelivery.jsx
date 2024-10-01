import { React, useRef, useEffect, useState } from 'react'
import Card from './Card'
import mixture from '../images/res-mixture.jpg'
import fish from '../images/res-fish.jpeg'
import fruites from '../images/res-fruites.jpeg'

const OnlineDelivery = () => {

    const myRef = useRef(null);
    const [isAtTop, setIsAtTop] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (myRef.current) {
                const top = myRef.current.getBoundingClientRect().top;
                if (top <= 0) {
                    setIsAtTop(true);
                } else {
                    setIsAtTop(false);
                }
            }
        };

        window.addEventListener("scroll", handleScroll);

        // Cleanup the event listener on unmount
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

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

    return (
        <div className='max-w-[1200px] mx-auto' ref={myRef}>
            <div className='flex items-center justify-between'>
                <div className='text-[25px] font-bold'>Top restaurant with online food delivery jodhpur</div>
            </div>
            <div className={isAtTop ? 'fixed top-0 z-[99999] bg-white w-full left-0' : ''}>
                <div className="max-w-[1200px] mx-auto my-4 gap-3 flex flex-wrap">
                    <div className="p-3 rounded-md shadow">Filter</div>
                    <div className="p-3 rounded-md shadow">Sort By</div>
                    <div className="p-3 rounded-md shadow">Filter</div>
                    <div className="p-3 rounded-md shadow">Sort By</div>
                    <div className="p-3 rounded-md shadow">Filter</div>
                    <div className="p-3 rounded-md shadow">Sort By</div>
                    <div className="p-3 rounded-md shadow">Filter</div>
                    <div className="p-3 rounded-md shadow">Sort By</div>
                </div>
            </div>
            <div className="md:grid grid-cols-4 gap-5">
                {
                    data.map((val, idx) => {
                        return (
                            <Card {...val} image={val.name} id={idx} />
                        )
                    })
                }
            </div>
        </div>
    )
}

export default OnlineDelivery
