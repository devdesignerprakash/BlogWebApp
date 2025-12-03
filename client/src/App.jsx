

import { Routes,Route } from 'react-router-dom'
import './App.css'
import Layout from './components/ui/Layout'
import { RouteHome } from './RouteNames'

function App() {
  return (
    <>
     <Routes>
      <Route index path={RouteHome} element={<Layout/>}>
      </Route>
     </Routes>
    </>
  )
}

export default App
