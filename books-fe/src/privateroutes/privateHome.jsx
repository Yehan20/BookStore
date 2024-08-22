import React from 'react'
import { Navigate } from 'react-router-dom'

import { useGlobalContext } from '../context/context'

const PrivateRoute = ({children}) => {
  // This would protect our home form unlogged users
  const {userdata} = useGlobalContext()
  // const navigate = useNavigate() 
  console.log(userdata);
  
  if(userdata){
    return children
  } 
  return userdata?<Navigate to={'/'} replace={true}/>:''
}

export default PrivateRoute