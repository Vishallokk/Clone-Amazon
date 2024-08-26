
import React from 'react'
import Navbar from './Components/Navbar.jsx';
import Footer from './Components/Footer.jsx';
import Card from './Components/Card.jsx';
import { GiHamburgerMenu } from "react-icons/gi";

export const App = () => {
  return (
   <>
   <Navbar/>
   <div className='h-[39px] w-full bg-[#232f3e] flex items-center justify-center gap-6 ml-2 mr-2 text-white
   font-bold  '>
    <span  className='h-[38px] flex items-center justify-center hover:border border-spacing-5 border-white'>
    <GiHamburgerMenu className=''/>All</span>
    <span className='h-[38px] flex items-center justify-center hover:border border-spacing-5 border-white'>Fresh</span>
    <span  className='h-[38px] flex items-center justify-center hover:border border-spacing-5 border-white'>Amazon miniTV</span>
    <span  className='h-[38px] flex items-center justify-center hover:border border-spacing-5 border-white'>Sell</span>
    <span  className='h-[38px] flex items-center justify-center hover:border border-spacing-5 border-white'>Best Sellers</span>
    <span className='h-[38px] flex items-center justify-center hover:border border-spacing-5 border-white'>Today's Deals</span>
    <span className='h-[38px] flex items-center justify-center hover:border border-spacing-5 border-white'>Mobiles</span>
    <span className='h-[38px] flex items-center justify-center hover:border border-spacing-5 border-white'>Customer Services</span>
    <span className='h-[38px] flex items-center justify-center hover:border border-spacing-5 border-white'>Electronics</span>
    <span className='h-[38px] flex items-center justify-center hover:border border-spacing-5 border-white'>Fashions</span>
    <span className='h-[38px] flex items-center justify-center hover:border border-spacing-5 border-white'>Home & Kitchen</span>
    <span className='h-[38px] flex items-center justify-center hover:border border-spacing-5 border-white'>Amazon Pay</span>
   </div>



    {/* This s image section */}
    <div className=' '>
      <img src="https://images-eu.ssl-images-amazon.com/images/G/31/img18/HomeImprovement/harsmisc/2024/AugBAU/HI_HMD_3000_PC-FDFO._CB565898884_.jpg" alt="" srcset="" />
    </div>












      <div className='bg-gray-300 flex items-center justify-around mt-[-230px]'> 
        <Card
        tittle = "Furniture"
        imgsrc = "https://m.media-amazon.com/images/I/91UCn1Tl-QL._AC_SY400_.jpg"
        />

<Card
        tittle = "Furniture"
        imgsrc = "https://m.media-amazon.com/images/I/91UCn1Tl-QL._AC_SY400_.jpg"
        />

<Card
        tittle = "Furniture"
        imgsrc = "https://m.media-amazon.com/images/I/91UCn1Tl-QL._AC_SY400_.jpg"
        />


<Card
     tittle = "Furniture"
        imgsrc = "https://m.media-amazon.com/images/I/91UCn1Tl-QL._AC_SY400_.jpg"
    />


<Card
     tittle = "Furniture"
        imgsrc = "https://m.media-amazon.com/images/I/91UCn1Tl-QL._AC_SY400_.jpg"
    />


<Card
     tittle = "Furniture"
        imgsrc = "https://m.media-amazon.com/images/I/91UCn1Tl-QL._AC_SY400_.jpg"
    />

        </div>






        {/* this new sectin */}


        <div className=' flex items-center justify-around mt-6'> 
        <Card
        tittle = "Furniture"
        imgsrc = "https://m.media-amazon.com/images/I/91UCn1Tl-QL._AC_SY400_.jpg"
        />
          <Card
        tittle = "Furniture"
        imgsrc = "https://m.media-amazon.com/images/I/91UCn1Tl-QL._AC_SY400_.jpg"
        />
          <Card
        tittle = "Furniture"
        imgsrc = "https://m.media-amazon.com/images/I/91UCn1Tl-QL._AC_SY400_.jpg"
        />


<Card
     tittle = "Furniture"
        imgsrc = "https://m.media-amazon.com/images/I/91UCn1Tl-QL._AC_SY400_.jpg"
    />


<Card
     tittle = "Furniture"
        imgsrc = "https://m.media-amazon.com/images/I/91UCn1Tl-QL._AC_SY400_.jpg"
    />


<Card
     tittle = "Furniture"
        imgsrc = "https://m.media-amazon.com/images/I/91UCn1Tl-QL._AC_SY400_.jpg"
    />

        </div>
   <Footer/>
   </>
  )
}
  export default App;