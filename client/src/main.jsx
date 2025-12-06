import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {BrowserRouter} from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import { Provider } from 'react-redux'
import { persistor, store} from './redux/store'
import { PersistGate } from 'redux-persist/integration/react'
createRoot(document.getElementById('root')).render(

 <BrowserRouter>
 <Provider store={store}>
  <PersistGate loading={null} persistor={persistor}>
   <ToastContainer autoClose={3000}/>
    <App />
    </PersistGate>
    </Provider>
 </BrowserRouter>
 
)
