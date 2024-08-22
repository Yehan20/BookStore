import axios from 'axios';
import React from 'react'
import {useEffect} from 'react';
import {useState} from 'react';
import MessageModal from '../../components/messageModal';
import {useGlobalContext} from '../../context/context';

const AddContact = () => {
    axios.defaults.withCredentials = true;
    // context api values
    const {showMessageModal, setShowMessageModal} = useGlobalContext()

    // state
    const [bookUser, setbookUser] = useState
    ({bookTitle: '', bookAuthor: '', genre: '', publishedDate: ''})

    const [addedContact, setAddedContact] = useState('')
    const [contactAmount, setIsContactAmount] = useState(true)

    useEffect(() => {
        const amount = localStorage.getItem('contactAmount')
        setIsContactAmount(amount)
    }, [])

    const handleInput = (target) => {
        const name = target.name;
        const value = target.value;
        setbookUser({
            ...bookUser,
            [name]: value
        })
        console.log(bookUser);
    }

    const handleSubmit = async (e) => {

        e.preventDefault();
        if (bookUser.bookAuthor === '' || bookUser.bookTitle === '' || bookUser.genre === '' || bookUser.publishedDate === '') {

            setShowMessageModal(true)
            return
        }


        // get our jwt token and header set up
        const token = localStorage.getItem('accessToken')
        const headers = {
            "Authorization": token,
            "Content-Type": 'application/json'
        }

        // 
        try {
            const newUser = await axios.post('http://localhost:3001/books/add', {

              title: bookUser.bookTitle,
              author: bookUser.bookAuthor,
              genre: bookUser.genre,
              publishedDate: bookUser.publishedDate
  

            }, {headers})
            console.log(newUser.data)
            setAddedContact(newUser.data)

        } catch (e) {
            console.log(e);

        }

    }

    return (
        <>
            <div className='add-contact px-30'>

                <h2 className='text-white font-bold text-heading-medium  lg:text-heading-large mb-6 lg:mb-14'>New Book</h2>

                <form onSubmit={handleSubmit}
                    className=''>

                    <div className='flex flex-col lg:flex-row gap-x-2'>

                        <div className='mb-8 w-full'>
                            <input name='bookTitle'
                                value={
                                    bookUser.bookTitle
                                }
                                onChange={
                                    (e) => handleInput(e.target)
                                }
                                type="text"
                                placeholder='Book Title'/>
                        </div>
                        <div className='mb-8 w-full'>
                            <input name='bookAuthor'
                                value={
                                    bookUser.bookAuthor
                                }
                                onChange={
                                    (e) => handleInput(e.target)
                                }
                                type="text"
                                placeholder='Book Author'/>
                        </div>
                    </div>

                    <div className='flex flex-col lg:flex-row gap-x-2'>
                        <div className='mb-6 lg:mb-12 w-full'>
                            <input name='publishedDate'
                                value={
                                    bookUser.publishedDate
                                }
                                onChange={
                                    (e) => handleInput(e.target)
                                }
                                type="date"
                                placeholder='Published Date'/>
                        </div>

                        <div className='flex flex-col lg:flex-row items-start text-white mb-12 w-full lg:gap-11 lg:items-center'>
                         

                            {/* <div className='flex items-center'>
                                <input id='m' type="radio" name="bookGenre" className='appearance-none border-2 rounded-full  bg-greenColor checked:bg-white' value="male"
                                    checked={
                                        bookUser.bookGenre === 'male'
                                    }
                                    onChange={
                                        (e) => handleInput(e.target)
                                    }/>
                                <label className='text-xl font-normal' htmlFor='m'>
                                    male
                                </label>


                            </div> */}

                            <select  onChange={
                                        (e) => handleInput(e.target)
                                    } className='border-2 rounded-full bg-white' name="genre" id="genres">
                                
                                <option value="fiction">Fiction</option>
                                <option value="mystery">Mystery</option>
                                <option value="fantasy">Fantasy</option>
                                <option value="non-fiction">Non-Fiction</option>
                                <option value="science-fiction">Science Fiction</option>
                            </select>

                        </div>
                    </div>


                    <div className='text-white text-text-buttons  mb-5'>
                        <button type='submit' title='Click to add' className='text-lg lg:text-xl custom-button'>
                            Add Book </button>

                    </div>
                </form>
            </div>
            {
            (showMessageModal) && <MessageModal message={"Please fill feilds"}/>
        }
            {
            (addedContact) && <MessageModal canRedirect={true}
                message={"New Book saved"}/>
        } </>

    )
}

export default AddContact
