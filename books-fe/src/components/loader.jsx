import React from 'react'
import LoaderImg from '../assets/images/loader.gif'
const Loader = () => {
  return (
    <div className='pt-28 flex justify-center items-center'>
      <img className='w-custom' src={LoaderImg}alt='loader'/>
      <p>Loading</p>
    </div>
  )
}

export default Loader