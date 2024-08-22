import React from 'react'
import logo from '../assets/images/main-logo.svg'
const SideBar = () => {
  return (
    <div className='w-full py-10 sm:py-0 side-bar mt-10 sm:mt-1 flex items-center '>
       <div className='p-10 sm:ps-28'>
         <img src={logo} className='w-36' alt="Logo" />
         <h2 className='text-greenColor text-heading-medium sm:text-heading-very-large font-bold leading-none'>Book <br /> 
         <span className='font-normal'> Store</span></h2>
       </div>
    </div>
  )
}

export default SideBar