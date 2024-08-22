import React from 'react'
import { Navigate } from 'react-router-dom'
import { useGlobalContext } from '../context/context'

const ProtectedRoute = ({children}) => {
    const {userdata} = useGlobalContext()
    console.log(userdata)
  
    if(userdata){
      return <Navigate to={'/books'} replace={true}/>
    } 
    return userdata?'': children
  
}

export default ProtectedRoute