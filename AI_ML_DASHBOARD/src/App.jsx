import './index.css';
import Navbar from './components/Navbar.jsx';
import Sidebar from './components/Sidebar.jsx';
import Hero from './components/Hero.jsx';

function App() {

  return (
    <>
      <Navbar  />
      <div className='flex w-screen h-screen'>
        <Sidebar />
        <Hero />
      </div>

    </>

  )
}

export default App
