import React from 'react'
import { FaLocationDot } from "react-icons/fa6";
import { IoIosSearch } from "react-icons/io";
import { LiaShoppingCartSolid } from "react-icons/lia";


function Navbar() {
  return (
   <>
   <div className='h-[60px] w-full bg-[#0f1111] flex '>
    <div>
      <div  className='flex gap-2'>
       <img src="https://w7.pngwing.com/pngs/221/535/png-transparent-amazon-dark-hd-logo-thumbnail.png" 
       className='h-[58px] w-[128px] p-1  object-cover  hover:border border-spacing-5 border-white ' />



     <div className='flex text-white flex-col h-[58px] w-[215px]  hover:border border-spacing-5 border-white'>
     <div className='pl-5 mt-1'>Delvering to India</div>
     <div className='flex font-bold'> <FaLocationDot />Update location</div>
 
     </div>
      </div>
    </div>

   {/* This is search setion here are three div one is parent and other two ae sibblings inside last icon is present */}

      <div className='ml-2 mt-2 flex w-[401px] h-[44px] justify-center items-center
       border-2 border-yellow-500 rounded-lg
        bg-white' >
      
      <select className='h-[44px] w-[60px] text-center border  rounded-md outline-none 
      bg-slate-300  hover:bg-slate-400' >s
        <option >All</option>
       </select>
      
       <input type="text" placeholder='Search Amazon'  className='h-[40px] w-[340px] text-black text-center'/>
       <div className='text-white bg-yellow-600 h-[44px] flex items-center justify-center border
       rounded-lg hover:bg-yellow-400'> <IoIosSearch className=' h-[33px] w-[33px]' /> </div>
      </div>


        {/* THIS IS FLAG SECTION AND CHOOSE LANGUAGE SECTION */}


      <div className='flex ml-2  justify-center items-center gap-1 h-[58px] w-[200px]
      hover:border border-spacing-5 border-white'>
         <img src="https://media.istockphoto.com/id/2164656551/photo/close-up-of-indian-flag.jpg?s=612x612&w=0&k=20&c=T22PWt_KtHCUJNpKZoK0mkK-Ws6j2ENHJdi8LA_xo64="  className='h-[20px] w-[30px] '/>


         <select className='border-none outline-none text-white font-bold bg-[#0f1111] '>
          <option >EN</option>
         </select>
         </div>

          {/* THIS IS ACCOUNT SECTION */}

      <div className='flex  flex-col justify-center items-center hover:border border-spacing-5 border-white ml-2
      h-[58px] w-[200px]'>
        <span className='text-white font-bold '>hello,sign in</span>
        <select className='font-bold bg-[#0f1111] text-white border-none outline-none '>
          <option>Accounts & Lists</option>
        </select>
      </div>


      {/* THIS IS THE RETURNS AND ORDERS SECTION */}

      <div className='text-white flex items-center justify-center flex-col ml-2 hover:border border-spacing-5 border-white h-[58px] w-[100px]'>Returns 
        <span className='font-bold'>& Orders</span>
      </div>

     {/* THIS IS CART LOGO AND CARTS SECTION */}

      <div className='h-[58px] w-[100px] hover:border border-spacing-5 border-white ml-2 text-white 
      flex justify-center items-center font-bold'>
      <LiaShoppingCartSolid className='text-white h-[44px] w-[44px]'/>
      Carts
      </div>




   </div>
   </>
  )
}

export default Navbar;