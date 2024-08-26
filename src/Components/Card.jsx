import React from 'react'

const Card = (props) => {
  return (
   <div className='h-[235px] w-[223px] p-3 bg-white '>
    <span className='font-bold'>{props.tittle}</span>
   <img src={props.imgsrc} />
    <span className='text-green-400'> See more</span>
   </div>
   
  )
}

export default Card