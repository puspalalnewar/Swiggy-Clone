import React from 'react'
import Box from './Box'

const topPlaces = [
    {
        name: "Best Resturant in West Beangal",
    },
    {
        name: "Best Resturant in  Delhi",
    },
    {
        name: "Best Resturant in Mumbai",
    },
    {
        name: "Best Resturant in Benguluru",
    },
    {
        name: "Best Resturant in West UP",
    },
    {
        name: "Best Resturant in Delhi",
    },
    {
        name: "Best Resturant in Delhi",
    },
    {
        name: "Best Resturant in West Delhi",
    },
]

const TopResturant = () => {
    return (
        <div className='max-w-[1200px] mx-auto mb-4'>
            <hr className='my-10 border-[2px]' />
            <div className='flex items-center justify-between'>
                <div className='text-[25px] font-bold'>Top restaurant with online food delivery jodhpur</div>
            </div>
            <div className="w-full flex gap-3 flex-wrap justify-center">
                {topPlaces.map((val, idx) => {
                    return (
                        <Box name={val.name} idx={idx} />
                    )
                })}
            </div>


        </div>
    )
}

export default TopResturant
