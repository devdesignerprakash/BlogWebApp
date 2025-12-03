

import { Routes,Route } from 'react-router-dom'
import './App.css'
import Layout from './components/ui/Layout'
import { RouteHome } from './RouteNames'
import Home from './pagees/Home'

function App() {
  return (
    <>
     <Routes>
      <Route  path={RouteHome} element={<Layout/>}>
      <Route index element={<Home/>}/>
      </Route>
     </Routes>
    </>
  )
}

export default App
