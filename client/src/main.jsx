import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {BrowserRouter} from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import { Provider } from 'react-redux'
import { userStore } from './redux/user/userStore'
createRoot(document.getElementById('root')).render(

 <BrowserRouter>
 <Provider store={userStore}>
   <ToastContainer autoClose={3000}/>
    <App />
    </Provider>
 </BrowserRouter>
 
)
