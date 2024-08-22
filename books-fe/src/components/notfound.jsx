import React from 'react'
import { Link } from 'react-router-dom'
import {FaSadCry} from 'react-icons/fa'
const NotFound = () => {
  return (
    <div className='bg-greenColor text-center py-32 min-h-screen'>
         <h3 className='flex my-10  flex-col items-center text-heading-large text-white text-center'>
            Page Not found
            <FaSadCry/>
         </h3>
         <Link className='text-heading-medium text-white text-center' to={'/'}>Go Back</Link>
    </div>
  )
}

export default NotFound