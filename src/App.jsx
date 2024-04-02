
import './App.css'
import Header from './Components/Header'
import LandingPage from './Pages/LandingPage'
import Footer from './Components/Footer'
import Home from './Pages/Home'
import WatchHistory from './Pages/WatchHistory'
import { Route, Routes } from 'react-router-dom'

function App() {
  

  return (
    <>
    <Header/>
    <Routes>
      <Route path='/' element={<LandingPage/>}/>
      <Route path='/home' element={<Home/>} />
      <Route path='/watchhistory' element={<WatchHistory/>} />
    </Routes>
    <Footer/>
    </>
  )
}

export default App
