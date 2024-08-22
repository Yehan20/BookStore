import React from 'react'

const MessagePromptModal = ({deletedBook,togglePromptModal, deleteBook}) => {
 
  return (
    <div className="fixed inset-0 " id="modal-overlay">
    <div className="w-full px-10 py-10 text-center modal-form fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white p-6 rounded-lg shadow-lg " id="modal-content">
        <p className="text-3xl text-greenColor mb-6">Do you  want to delete the Book  “{deletedBook.title}” ? </p>

        <button onClick={()=>deleteBook(deletedBook._id)} className="hover:opacity-70 modal-button mx-3 text-lg inline-block bg-greenColor text-white px-7 py-2"> 
        
            Yes
        </button>
         <button onClick={togglePromptModal} className="hover:opacity-70 modal-button text-lg inline-block outline-greenColor outline outline-2 bg-white text-greenColor px-7 py-2">
            Cancel
        </button>
    </div>
</div>
  )
}

export default MessagePromptModal