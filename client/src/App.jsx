

import { Routes,Route } from 'react-router-dom'
import './App.css'
import Layout from './components/ui/Layout'

function App() {
  return (
    <>
     <Routes>
      <Route index element={<Layout/>}>
      </Route>
     </Routes>
    </>
  )
}

export default App
