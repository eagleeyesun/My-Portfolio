import React from 'react'
import { Route,RouterProvider,createBrowserRouter,createRoutesFromElements,Link } from 'react-router-dom'
import './App.css'
import Layout from '../components/Layout'
import Home from '../components/Home'
import About from '../components/About'
import Vans, { vansLoader} from '../components/vans/Vans'
import "../components/Server"


const router = createBrowserRouter(createRoutesFromElements(
  <Route path="/"element={<Layout/>}>
  <Route  index element={<Home/>} />
  <Route  path="about" element={<About/>} />
  <Route  path="vans" element={<Vans />} loader={vansLoader}/>
  </Route>

))


function App() {
   return (
   <RouterProvider router={router}/>
  )
}

export default App
