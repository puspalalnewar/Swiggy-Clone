import React from 'react'

const Box = ({name}) => {
  return (
    <div>
        <p className='border w-[20rem] h-12 flex items-center justify-center mt-3 rounded-md'>{name}</p>
    </div>
  )
}

export default Box
