import React from 'react'
import { Link } from 'react-router-dom'
import Logo from '../assets/images/logo-sm.png'
const Header = () => {
  return (
    <div className='text-white mb-5 lg:mb-16'>
      <Link to='/' title='Go Home'><img src={Logo} className='w-8' alt="Logo" /></Link>
      <h3 className='text-3xl font-bold'>Book <br />
       <span className='font-normal'>Store</span> 
      </h3>
    </div>
  )
}

export default Header