import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import MessageModal from '../../components/messageModal'
import SideBar from '../../components/sideBar'
import {  useGlobalContext } from '../../context/context'

const Login = () => {
    const navigate = useNavigate()
   //Context Data
   const {showMessageModal,setShowMessageModal,
    loginUser,errorMessage,userdata,closeModal,loading} = useGlobalContext()
   
   // when user will sign up the model will close when he is navigated back 2 the login
   useEffect(()=>{
     closeModal();
   },[])

   // states in the component
   const [email,setEmail] = useState('');
   const [password,setPassword] = useState('');
   
   const handleSubmit = (e)=>{
      e.preventDefault()
      if(email==='' || password===''){
           setShowMessageModal(true)
           return
      }
      loginUser(email,password)

   }
   useEffect(()=>{
    if(userdata){
        console.log('correct');
        navigate('/books',)
      }
   },[userdata])
 

    return (
        <>
         <div className="login-section flex-1 flex flex-col lg:flex-row justify-between" >
            <div className='login p-10 sm:px-20 sm:py-28 '>
                <div className='text-white mb-5 sm:mb-14'>
                    <h2 className=' text-heading-large font-bold '>Hello
                    </h2>
                    <p className='text-2xl sm:text-heading-medium mb-0 line'>Welcome to BS <br /> Books Store</p>
                </div>

                <form  onSubmit={(e)=>handleSubmit(e)} >
                    <div className='mb-8'>
                        <input type="email" value={email}  onChange={(e)=>setEmail(e.target.value)} placeholder='email'/>
                    </div>
                    <div className='mb-12'>
                        <input type="password" value={password} onChange={(e)=>setPassword(e.target.value)}  placeholder='password'/>
                    </div>
                    <div className='text-white text-text-buttons pb-2'>

                   <button disabled={loading} title='Click to login' className='custom-button' type='submit'>login</button>

                        &nbsp; or  &nbsp;
                        <Link className='mt-2 block sm:inline text-white underline' title='Click to visit' to='/register'>Click here to register</Link>
                    </div>
                </form>

            </div>
            <SideBar/>
        </div>
        {(errorMessage && showMessageModal)&& <MessageModal message={errorMessage}/>}
        {(showMessageModal && !errorMessage) && <MessageModal message={"Please fill all feilds"}/>}

        </>


    )
}

export default Login
