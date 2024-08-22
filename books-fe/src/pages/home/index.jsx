import axios from 'axios';
import React from 'react'
import { useRef } from 'react';
import { useEffect } from 'react';
import { useState } from 'react'
import { Link } from 'react-router-dom'
import MessageModal from '../../components/messageModal';
import MessagePromptModal from '../../components/messagePromt';
import { FiLoader } from 'react-icons/fi';
import Tablerow from '../../components/tablerow';
import { useGlobalContext } from '../../context/context';

const baseURL = 'http://localhost:3001' // replace with url

const Home = () => {
    const {setShowMessageModal,showMessageModal} = useGlobalContext()
    const linkRef = useRef() 
    // to allow us pass the jwt token
    const token = localStorage.getItem('accessToken')

    const headers =  {
    "Authorization":token,
    "Content-Type": 'application/json'
   }



    axios.defaults.withCredentials=true;

    const [books,setBooks]= useState('');
    const [showPromptModal,setShowPromptModal] =useState(false);
    const [deletedBook,setDeletedBook]=useState('');
    const [loading,setLoading]=useState(false);
    const [isexpiredToken,setIsExpiredToken] =useState(false);

    const togglePrompt=()=>{
         setShowPromptModal(!showPromptModal)
    }
   
    const deleteBook = async(id)=>{
        //http://localhost:3001/books/delete/
        try{
            const result =await axios.delete(`${baseURL}/books/delete/`+id,{headers})
            setBooks(result.data.books);
            setShowPromptModal(false);
            setShowMessageModal(true);
        }catch(e){
            console.log(e.response.data.message)
        }

    }

    const updateBook = async(updatedBook) => {

     console.log(updatedBook,'function')
     
     linkRef.current.style.pointerEvents = 'none'   
     setDeletedBook('')
     const newBook={ 
          
            newTitle: updatedBook.modifiedTitle,
            newGenre: updatedBook.modifiedGenre,
            newAuthor: updatedBook.modifiedAuthor,
            newDate: updatedBook.modifedDate,
            id:updatedBook._id,
     }
     try{
         const result = await axios.put(`${baseURL}/books/update`,newBook,{headers})
         setBooks(result.data.books)
         setShowMessageModal(true)
     }catch(e){
         console.log(e.response.data.message);
         if(e.response.status === 401) {
             setIsExpiredToken(true);
         }

     }
     linkRef.current.style.pointerEvents = ''   
    }

    useEffect(()=>{
        setLoading(true)
        const abortController = new AbortController();
        const signal = abortController.signal;
        const getbooks =  async()=>{
           //http://localhost:3001/books/show 
           
            try{
            const contactList = await axios.post(`${baseURL}/books/show`,{},{headers},signal)

                // console.log(contactList.data.books)
                setBooks(contactList.data.books)
                localStorage.setItem("contactAmount",contactList.data.books.length);
                setLoading(false)
            }catch(e){
                console.log(e.response.data.message);
                setLoading(false)
                if(e.response.status === 401) {
                    setIsExpiredToken(true);
                }
            }
        }

        getbooks()
        return ()=> abortController.abort() // to remove the fetch if go to sudden route
    },[])


    return (
        <>
         {!books &&<FiLoader className='mx-auto' size={'55px'} color={'white'}/>}
         {(books&&books.length<1) && <div className='text-white'>
            <h2 className='text-heading-large font-bold'>
                Hello
            </h2>
            <p className='text-heading-medium leading-tight mb-12 '>
                Looks like you have not added any Books click below to add one
            </p>
            <Link to='/books/new' className='text-2xl custom-button' title='Click to Add'>add your first Book</Link>
        </div>}
        {books && books.length>=1 &&
        <div>
        <div className='flex items-start justify-between mb-10 flex-col gap-y-2 sm:flex-row sm:items-center'>
           <h2 className='text-4xl text-white font-bold '>
            books
            </h2>
            <Link ref={linkRef}  to='/books/new' className='text-lg custom-button'>Add new Book</Link>
         </div>

         <div className='bg-white  px-2 lg:px-10 py-5 rounded-3xl'>
           <table className='w-full text-greenColor border-separate border-spacing-2 lg:border-spacing-4'>
              <thead>
                <tr className='hidden lg:table-row font-normal'>
                  
                    <th>Book Title</th>
                    <th>Author</th>
                    <th>Published Date</th>
                    <th>Genre</th>
                  
                    <th>
                   
                    </th>
                </tr>
              </thead>
              <tbody>
                 {
                    !loading && books.map((book)=>{
                        return <Tablerow key={book._id} 
                                         updateBook={updateBook} 
                                         book={book}
                                         showPromptModal={showPromptModal}
                                         togglePrompt={togglePrompt}
                                         setDeletedBook={setDeletedBook}
                                        
                      />
                    })
                 }
                 {loading && <tr><td>Loading..</td></tr>}

              </tbody>
           </table>
        </div>
        </div>}

        {showMessageModal && <MessageModal message={"Your Book has been saved successfully!"}/>}

        {showPromptModal &&  <MessagePromptModal  deleteBook={deleteBook} 
           deletedBook={deletedBook} togglePromptModal={togglePrompt} fullName={"Name"}/>}

        {(showMessageModal && deletedBook) &&  <MessageModal message={"Your Book has been deleted successfully!"}/>}

        
        {(isexpiredToken) &&  <MessageModal message={"Token is Expired"}/>}
      </>

    )
}

export default Home
