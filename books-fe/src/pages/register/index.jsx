import React, { useEffect } from 'react'
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom'
import MessageModal from '../../components/messageModal';
import SideBar from '../../components/sideBar'
import { useGlobalContext } from '../../context/context';

const Register = () => {
    const {showMessageModal,setShowMessageModal,errorMessage,success,register,loading,userdata} = useGlobalContext()

    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');
    const [verifypassword,setVerifyPassword] = useState('');
    const [isSamePass,setIsSamePass]=useState(false);
    const navigate =useNavigate();

    const handleSubmit = (e)=>{

        e.preventDefault();
         // check for empty user && Check for not matching passwords
         if(email==='' || password==='' || verifypassword==='' ){
            setShowMessageModal(true)
            setIsSamePass(false)
            return
         }
         if(password!==verifypassword){
            setShowMessageModal(true)
            setIsSamePass(true)
            return
         }
         register(email,password)

    
     
    }
    

    useEffect(()=>{
        if(userdata){
            console.log('correct');
            navigate('/books',)
          }
       },[userdata])


    return (
        <>
         <div className="register-section flex justify-between flex-1  flex-col lg:flex-row">
            <div className='register p-10 sm:p-20'>
                <h2 className='text-white font-bold text-heading-medium sm:text-heading-large mb-5 sm:mb-14'>Register Now
                </h2>
                <form onSubmit={handleSubmit} className=''>
                    <div className='mb-8'>
                        <input value={email}  onChange={(e)=>setEmail(e.target.value)}   type="email" placeholder='email'/>
                    </div>
                    <div className='mb-8'>
                        <input value={password}  onChange={(e)=>setPassword(e.target.value)} type="password" placeholder='create password'/>
                    </div>
                    <div className='mb-12'>
                        <input value={verifypassword} onChange={(e)=>setVerifyPassword(e.target.value)}  type="password" placeholder='confirm password'/>
                    </div>
                    <div className='text-white text-text-buttons  mb-5'>
                     <button disabled={loading}  type='submit' title='Click to Register' className='custom-button'>register</button>

                    </div>
                    <Link to='/'  className='text-white underline text-text-buttons'> &lt; Back to Login</Link>
                </form>
            </div>
            <SideBar/>
        </div>
        {(showMessageModal && !isSamePass ) && <MessageModal message="Fill all Feilds"/>}
        {(showMessageModal && isSamePass) && <MessageModal message="Not Matching Passwords"/>}
        {(showMessageModal && errorMessage) && <MessageModal message={errorMessage}/>}
        {/* {(showMessageModal && success) && <MessageModal redirectLogin={true} message={"User Created now you can login"}/>} */}
     </>

    )
}

export default Register
