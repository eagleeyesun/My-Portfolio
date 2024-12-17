import React from 'react'
import { Route,RouterProvider,createBrowserRouter,createRoutesFromElements,Link } from 'react-router-dom'
import './App.css'
import Layout from '../components/Layout'
import Home from '../components/Home'
import About from '../components/About'
import Vans, { vansLoader} from '../components/vans/Vans'
import VanDetails,{loader as VanDetailsLoader} from '../components/vans/VanDetails'
import Login , {loader as loginLoader , action as loginAction } from '../components/Login'
import "../components/Server"
import Dashboard from '../components/Host/Dashboard'
import Income from '../components/Host/Income'
import Reviews from '../components/Host/Reviews'
import HostVans, { loader as hostVansLoader} from '../components/Host/HostVans'
import HostLayout from '../components/HostLayout'
import HostVanDetail ,{loader as HostVanDetailLoader}from '../components/Host/HostVanDetail'
import HostVanInfo from '../components/Host/HostVanInfo'
import HostVanPricing from '../components/Host/HostVanPricing'
import HostVanphoto from '../components/Host/HostVanphoto'
import Error from '../components/Error'
import NotFound from '../components/NotFound'
import { requieredAuth } from './Utils'


const router = createBrowserRouter(createRoutesFromElements(
  <Route path="/"element={<Layout />}>
  <Route  index element={<Home />} />
  <Route  path="about" element={<About />} />
  <Route  path="login" element={<Login />} loader={loginLoader} action={loginAction}/>
  <Route  path="vans" element={<Vans />} loader={vansLoader} errorElement={<Error />}/>
  <Route  path="vans/:id" element={<VanDetails />} loader={VanDetailsLoader}/>

  <Route  path="host" element={<HostLayout />}>
  <Route  index element={<Dashboard />} loader={async () => await requieredAuth()}/>
  <Route  path="income" element={<Income />} loader={async () => await requieredAuth()}/>
  <Route  path="reviews" element={<Reviews />} loader={async () => await requieredAuth()}/>
  <Route  path="vans" element={<HostVans />} loader={hostVansLoader} />
  <Route  path="vans/:id" element={<HostVanDetail />} loader={HostVanDetailLoader}>
  <Route  index element={<HostVanInfo />} loader={async () => await requieredAuth()}/>
  <Route  path="photos" element={<HostVanphoto />} loader={async () => await requieredAuth()}/>
  <Route  path="pricing" element={<HostVanPricing />} loader={async () => await requieredAuth()}/>
  </Route>
  

  </Route>
  
  <Route path="*" element={<NotFound />} />

  </Route>

))


function App() {
   return (
   <RouterProvider router={router}/>
  )
}

export default App
