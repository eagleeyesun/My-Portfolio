import './App.css'
import Hero from './Hero'
import Navbar from './Navbar'
import Sidebar from './Sidebar'
import SideBarRight from './SideBarRight'
import DignosticList from './DignosticList'
import LabResult from './LabResult'

function App() {
  return (
    <div className='app-container'>
      <Navbar />
          <Sidebar/>
          <Hero/>
          <SideBarRight />
          <DignosticList />
          <LabResult />
           </div>
  
    
  )
}

export default App
