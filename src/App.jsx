import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './SASS/app.scss'
import Header from './Components/Header/Header'
import Footer from './Components/Footer/Footer'
import Home from './Pages/Home/Home'
import { useContext } from 'react'
import { CourseContext } from './Context/CourseContext/CourseContext'
import Courses from './Pages/Courses/Courses';
import SingleCourse from './Pages/SingleCourse/SingleCourse';


function App() {
  const { name } = useContext(CourseContext)
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/courses' element={<Courses/>}/>
        <Route path='/courses/:id' element={<SingleCourse/>}/>
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App
