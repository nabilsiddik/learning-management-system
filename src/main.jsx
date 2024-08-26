import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './SASS/index.scss'
import { CourseContextProvider } from './Context/CourseContext/CourseContext.jsx'


ReactDOM.createRoot(document.getElementById('root')).render(
  <CourseContextProvider>
    <App />
  </CourseContextProvider>,
)
