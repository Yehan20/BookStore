import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'
import { useGlobalContext } from '../context/context'

const ProtectedRoute = ({children}) => {


    const loggedUser = JSON.parse(localStorage.getItem('user'))

    if(loggedUser){
        return children;
    }
  
    return loggedUser ? children: <Navigate to="/" replace={true} />;
}

export default ProtectedRoute