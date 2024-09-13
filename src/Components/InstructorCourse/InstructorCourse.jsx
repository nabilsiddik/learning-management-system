import axios from 'axios'
import React, { useContext } from 'react'
import { CourseContext } from '../../Context/CourseContext/CourseContext'

const InstructorCourse = (props) => {
    const {loadCourses} = useContext(CourseContext)
    const {title, image_path, id, description, old_price, new_price, badge, category} = props.course
    
    const handleDeleteCourse = async (id) =>{
        await axios.delete(`http://localhost:8080/course/${id}`)
        loadCourses()
    }

  return (
    <div id='instructor_course'>
      <ul>
        <li className='bg-purple-300 py-3 px-3 mb-3 flex gap-3'>
            <div className="col_1 flex gap-3 w-[50%]">
                <div className="course_image">
                    <img className='w-[100px]' src={image_path} alt="" />
                </div>
                <div className="title_and_desc">
                    <h3 className='font-bold text-lg'>{title}</h3>
                    <p className='text-sm'>{description}</p>
                </div>
            </div>

            <div className="col_2 w-[10%]">
                <div className="prices">
                    <h2 className='text-lg font-bold'>${new_price}</h2>
                    <p><del>${old_price}</del></p>
                </div>
            </div>

            <div className="col_3 w-[20%]">
                <div className="category_and_badge">
                    <h3 className='category'>
                        <span className='font-bold text-lg'>Category:</span>
                        <span> {category}</span>
                    </h3>
                    <h3 className='badge'>
                        <span className='font-bold text-lg'>Badge:</span>
                        <span> {badge}</span>
                    </h3>
                </div>
            </div>

            <div className="action_buttons">
                <button className='btn btn-md bg-yellow-300 py-3 px-4 rounded-md font-bold'>Edit</button>
                <button className='btn btn-md mx-3 bg-green-500 py-3 px-4 rounded-md font-bold text-white'>Update</button>
                <button
                    onClick={(e) => {
                        handleDeleteCourse(id)
                    }}
                className='btn btn-md bg-red-600 py-3 px-4 rounded-md font-bold text-white'>Delete</button>
            </div>
        </li>
      </ul>
    </div>
  )
}

export default InstructorCourse
