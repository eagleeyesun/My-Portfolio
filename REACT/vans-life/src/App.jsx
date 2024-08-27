import React from 'react'
import { Route,RouterProvider,createBrowserRouter,createRoutesFromElements,Link } from 'react-router-dom'
import './App.css'
import Layout from '../components/Layout'
import Home from '../components/Home'
import About from '../components/About'
import Vans, { vansLoader} from '../components/vans/Vans'
import VanDetails from '../components/vans/VanDetails'
import Login , {loader as messageLoader} from '../components/Login'
import "../components/Server"
import Dashboard from '../components/Host/Dashboard'
import Income from '../components/Host/Income'
import Reviews from '../components/Host/Reviews'
import HostVans, {hostVansLoader} from '../components/Host/HostVans'
import HostLayout from '../components/HostLayout'
import HostVanDetail ,{loader as HostVanDetailLoader}from '../components/Host/HostVanDetail'
import HostVanInfo from '../components/Host/HostVanInfo'
import HostVanPricing from '../components/Host/HostVanPricing'
import HostVanphoto from '../components/Host/HostVanphoto'


const router = createBrowserRouter(createRoutesFromElements(
  <Route path="/"element={<Layout/>}>
  <Route  index element={<Home/>} />
  <Route  path="about" element={<About/>} />
  <Route  path="login" element={<Login/>} loader={messageLoader} />
  <Route  path="vans" element={<Vans />} loader={vansLoader}/>
  <Route path="vans/:id" element={<VanDetails />} />

  <Route  path="host" element={<HostLayout />}>
  <Route  index element={<Dashboard />}/>
  <Route  path="income" element={<Income />}/>
  <Route  path="reviews" element={<Reviews />}/>
  <Route  path="vans" element={<HostVans />} loader={hostVansLoader}/>
  <Route  path="vans/:id" element={<HostVanDetail />} loader={HostVanDetailLoader}>
  <Route  index element={<HostVanInfo />}/>
  <Route  path="photos" element={<HostVanphoto />}/>
  <Route  path="pricing" element={<HostVanPricing />}/>
  </Route>
  

  </Route>
  

  </Route>

))


function App() {
   return (
   <RouterProvider router={router}/>
  )
}

export default App
