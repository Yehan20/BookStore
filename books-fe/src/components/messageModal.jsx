import React from 'react'
import { Link } from 'react-router-dom';
import { useGlobalContext } from '../context/context'

const MessageModal = ({message,canRedirect,redirectLogin}) => {
    const {closeModal} = useGlobalContext()
    return (
        <div className="fixed inset-0 " id="modal-overlay">
            <div className="w-full px-10 text-center modal-form fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white p-6 rounded-lg shadow-lg " id="modal-content">
                <p className="text-3xl text-greenColor mb-4">{message}</p>

                {(!canRedirect && !redirectLogin ) && <button onClick={closeModal} className="hover:opacity-75 modal-button text-lg inline-block bg-greenColor text-white px-7 py-2">
                    Okay !
                </button>}
                {canRedirect && <Link  className="modal-button  hover:opacity-75 text-lg inline-block bg-greenColor text-white px-7 py-2" to={'/books/all'}> Okay </Link>}
                {redirectLogin && <Link  className="modal-button  hover:opacity-75text-lg inline-block bg-greenColor text-white px-7 py-2" to={'/'}> Okay </Link>}
              
            </div>
        </div>
    )
}

export default MessageModal
