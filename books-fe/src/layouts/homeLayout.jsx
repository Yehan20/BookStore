import React from 'react'
import { Outlet } from 'react-router'
import Footer from '../components/footer'
import Header from '../components/header'

const HomeLayout = () => {
  return (
    <div className="outer flex-1">
      <div className='inner py-20 px-10 bg-greenColor lg:bg-transparent  lg:py-28 lg:px-32'>
        <Header/>
        <Outlet/>
        <Footer/>
      </div>
    </div>

  )
}

export default HomeLayout