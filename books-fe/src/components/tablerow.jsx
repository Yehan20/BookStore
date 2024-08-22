import React from 'react'
import {useState} from 'react'
import {FaPencilAlt, FaTrash} from 'react-icons/fa'


const Tablerow = ({book, updateBook, togglePrompt, setDeletedBook}) => {

   
    const [edit, setEdit] = useState(false);

    const [modifedBook, setModifiedBook] = useState({
        modifiedTitle: book.title,
        modifiedGenre: book.genre,
        modifiedAuthor: book.author,
        modifedDate: book.publishedDate,
        _id: book._id
    })

    const handleChange = (target) => {
        const name = target.name;
        const value = target.value;
        setModifiedBook({
            ...modifedBook,
            [name]: value
        })

    }

    const handleSave = () => {
        setEdit(!edit)
        updateBook(modifedBook);
    }

    // toggling funciton
    const toggleEdit = () => {
        setEdit(!edit);
    }

    const toggleDeletePrompt = () => {
        setDeletedBook(book);
        togglePrompt();
    }


    return (
        <>
            <tr> 

                <td className='mb-1 block lg:table-cell'>
                    {
                    edit ? (
                        <input name='modifiedTitle'
                            onChange={
                                (e) => handleChange(e.target)
                            }
                            className='bg-slate-200 px-2 py-1'
                            value={
                                modifedBook.modifiedTitle
                            } />
                    ) : book.title
                } </td>

  
                <td className='mb-1 block lg:table-cell'>
                    {
                    edit ? (
                        <input name='modifiedAuthor'
                            onChange={
                                (e) => handleChange(e.target)
                            }
                            className='bg-slate-200 px-2 py-1'
                            value={
                                modifedBook.modifiedAuthor
                            }/>
                    ) : book.author
                } </td>


                <td className='mb-1 block lg:table-cell'>
                    {
                    edit ? (
                        <input type='date' name='modifedDate'
                            onChange={
                                (e) => handleChange(e.target)
                            }
                            className='bg-slate-200 px-2 py-1'
                            value={
                                modifedBook. modifedDate
                            } />
                    ) : book.publishedDate
                } </td>


                <td className='mb-1 block lg:table-cell'>
                    {
                    edit ? (

                        <select onChange={
                                (e) => handleChange(e.target)
                            }
                            defaultValue={book.genre}
                            className='border-2 rounded-full  p-2 text-sm bg-white'
                            name="modifiedGenre"
                            id="genres">

                            <option   value="fiction"  
                              >Fiction</option>
                            <option 
                                value="mystery">Mystery</option>
                            <option 
                                value="fantasy">Fantasy</option>
                            <option 
                                value="non-fiction">Non-Fiction</option>
                            <option 
                                value="science-fiction">Science Fiction</option>
                        </select>

                    ) : book.genre
                } </td>


                <td className='mb-1 block lg:table-cell'>
                    <div className='flex justify-start lg:justify-end gap-3'>
                        {
                        edit ? <button onClick={handleSave}
                            className='bg-greenColor hover:opacity-70 text-white inline-block px-3 py-1 rounded-2xl'>save</button> : <>
                            <button onClick={toggleEdit}><FaPencilAlt color='#083F46'/></button>
                            <button onClick={toggleDeletePrompt}><FaTrash color='#083F46'/></button>
                        </>
                    } </div>
                </td>
            </tr>

        </>

    )
}

export default Tablerow
