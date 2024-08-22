import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import AppProvider from './context/context.jsx'
import './styles/index.css'
import './styles/style.css'

ReactDOM.createRoot(document.getElementById('root')).render (
    <React.StrictMode>
        <AppProvider>
            <App/>
        </AppProvider>
    </React.StrictMode>,
)
