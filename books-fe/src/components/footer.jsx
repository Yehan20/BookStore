import React from 'react'
import { Navigate, useNavigate } from 'react-router';
import LogoutIcon from '../assets/images/logout.svg'
import { useGlobalContext } from '../context/context'
const Footer = () => {
  const {userdata,logout} = useGlobalContext();

  console.log("lgo",userdata)
  
  if(!userdata){
    const loggedUser = JSON.parse(localStorage.getItem('user'))
    if(!loggedUser)  return <Navigate to={'/'}/>
  }
  return (
    <div className='flex justify-end mt-6'>
       <button onClick={()=>logout(userdata._id)} className='static lg:relative lg:-right-20  flex gap-2 items-center underline text-white text-2xl'>
        <img src={LogoutIcon} alt="Icon"  /> logout</button>
    </div>
  )
}

export default Footer