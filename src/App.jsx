import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './SASS/app.scss'
import Header from './Components/Header/Header'
import Footer from './Components/Footer/Footer'
import Home from './Pages/Home/Home'
import { useContext } from 'react'
import { CourseContext } from './Context/CourseContext/CourseContext'


function App() {
  const { name } = useContext(CourseContext)
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App
