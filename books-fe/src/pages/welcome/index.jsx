import React from 'react'
import { Link } from 'react-router-dom'

const Welcome = () => {
  return (
    <div className='text-white flex-1'>
            <h2 className='text-heading-medium sm:text-heading-large font-bold'>
                Welcome
            </h2>
            <p className='text-lg sm:text-heading-medium leading-tight mb-12 '>
                You can view your books and add books here 
            </p>
            <div className='flex flex-col gap-x-2 gap-y-3 sm:flex-row'>
            <Link to='/books/new' className='text-2xl custom-button' title='Click to Add'>Add Books</Link>
            <Link to='/books/all' className='text-2xl custom-button' title='Click to View'>View Books</Link>
            </div>
        </div>
  )
}

export default Welcome