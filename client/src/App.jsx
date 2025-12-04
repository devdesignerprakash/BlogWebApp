

import { Routes,Route } from 'react-router-dom'
import './App.css'
import Layout from './components/ui/Layout'
import { RouteHome, RouteLogin, RouteSignUp } from './RouteNames'
import Home from './pagees/Home'
import Login from './pagees/Login'  
import SignUp from './pagees/SignUp'

function App() {
  return (
    <>
     <Routes>
      <Route  path={RouteHome} element={<Layout/>}>
      <Route index element={<Home/>}/>
      </Route>
      <Route path={RouteLogin} element={<Login/>}/>
      <Route path={RouteSignUp} element={<SignUp/>}/>
     </Routes>
    </>
  )
}

export default App
