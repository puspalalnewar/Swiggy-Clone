import React from 'react'

const Card = (props) => {


  return (
    <div className='w-[273px] mt-8 shrink-0 grow'>
      <div className="h-[200px] w-[300px] rounded-[15px] overflow-hidden relative">
        <img className=' h-full w-full' src={props.name} alt="" />
        <div className='absolute image-overlay w-full h-full top-0 flex items-end p-2 text-[25px] font-bold text-white tracking-tighter'>
            {props.offer}
        </div>
      </div>
      
    </div>
  )
}

export default Card
