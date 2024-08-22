// Consits of the auth operations and store of the jwt token
import axios from 'axios';
import React, { useEffect } from 'react'
import { useState } from 'react';
import { useContext } from 'react';



const AppContext = React.createContext();

const AppProvider = ({children}) => {

  axios.defaults.withCredentials=true;

  const [loggedUser,setLoggedUser] = useState(null)
  const [showMessageModal,setShowMessageModal] = useState(false)
  const [errorMessage,setErrorMessage] = useState('');
  const [userdata,setUserData] = useState('');
  const [success,setSuccess]= useState('');
  const [loading,setLoading] = useState(false)
  const [apploading,setAppLoading] = useState(false)


  let baseURL = "http://localhost:3001";

  //refresh token function 

  const refreshToken = async () => {
   //refresh tken done

   console.log('refresh token method run')
   try {
     
  
      const response = await axios.post(`${baseURL}/token`,{
        id:userdata._id,
        token:localStorage.getItem('refreshToken')
     });
     
     const newToken = response.data.accessToken

     localStorage.setItem('accessToken', newToken);

   } catch (error) {
     console.log('Token refresh failed:', error);
   }
 };



  const closeModal = ()=>{
    setErrorMessage('');
    setShowMessageModal(false)
    setSuccess(false)
  }

  const isLogged = ()=>{
     console.log('run');
     setAppLoading(true)
     //http://localhost:3001/login
     const user = JSON.parse(localStorage.getItem('user'))
     if(user){
          setUserData(user)   
     }else{
          setUserData('')
     }

  }

  const loginUser = async(email,password)=>{
     setLoading(true)
     //http://localhost:3001/login
     try{
      const user = await axios.post(`${baseURL}/login`,{email,password})
      // update states
      setUserData({email:user.data.email,_id:user.data._id});
      setLoggedUser(true)
      setLoading(false)
      // store token i local storeage
      localStorage.setItem('accessToken',user.data.accessToken);
      localStorage.setItem('refreshToken',user.data.refreshToken)
      localStorage.setItem('user',JSON.stringify({email:user.data.email,_id:user.data._id}))
   
     }catch(e){
      // wrong login 
   
       setErrorMessage(e.response.data.message);
       setShowMessageModal(true);
       setLoading(false)
      //  navigate('/books',{replace:true})
     }
  }

  const register = async(email,password)=>{
    setLoading(true)
    setUserData('')

      try{
         const user =  await axios.post(`${baseURL}/register`,{email,password});
      
         localStorage.setItem('accessToken',user.data.accessToken);
         localStorage.setItem('refreshToken',user.data.refreshToken)
         localStorage.setItem('user',JSON.stringify({email:user.data.email,_id:user.data._id}))
         
         setLoggedUser(true)
         setUserData({email:user.data.email,_id:user.data._id});

         setLoading(false)

      }catch(e){
         console.log(e.response.data.message);
         // can be same email or else
        setErrorMessage(e.response.data.message);
        setShowMessageModal(true)
        setSuccess(false)
        setLoading(false)
      }
  }

  const logout = async(_id)=>{
   console.log('logouts')
     try{
       await axios.delete(`${baseURL}/logout/`+_id.toString())

       localStorage.removeItem('accessToken'),
       localStorage.removeItem('refreshToken')
       localStorage.removeItem('user')

       setUserData('')
       setLoggedUser(false)

       
     }catch(e){
        console.log(e)
     }
  }

  useEffect(() => {
   if(!userdata) return
   const refreshInterval = setInterval(refreshToken,1500000); // Refresh token every 25 minutes

   return () => {
     clearInterval(refreshInterval);
   };
 }, [userdata]);





  return (
    <AppContext.Provider value={{isLogged,
          loggedUser,
          showMessageModal,
          setShowMessageModal,
          loginUser,
          errorMessage,
          closeModal,
          userdata,
          register,
          success,
          logout,
          loading,
          apploading
          
          }}>
       {children}
    </AppContext.Provider>
  )
}
const useGlobalContext = ()=>{
     return useContext(AppContext)
}

export {useGlobalContext,AppContext}
export default AppProvider