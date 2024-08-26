import React, { useContext } from 'react'
import { useParams } from 'react-router-dom'
import { CourseContext } from '../../Context/CourseContext/CourseContext'
import { allCourses } from './../../Data/AllCourses';



const SingleCourse = () => {

    const {id} = useParams()
    const {allCourses} = useContext(CourseContext)

    const currentCourse = allCourses.filter(course => course.id === Number(id))

    console.log(currentCourse[0].video)

  return (
    <div id='single_courses' className='py-8 bg-dark mb-5'>
      <div className="container mx-auto">
        <div className="page_header text-white lg:flex gap-20">
            {/* Course Details */}
            <div className="course_details w-[60%]">
                <h1 className='text-3xl font-bold'>{currentCourse[0].title}</h1>
                <p className='my-3'>{currentCourse[0].description}</p>
                <div className='flex items-center gap-3'>
                    <div className="badge py-2 px-3 bg-yellow-200 font-bold rounded-sm inline-block mt-2 text-black">
                    {currentCourse[0].badge}
                    </div>

                    <div className="review_and_rating flex items-center gap-4 my-2">
                    <h3 className="text-md font-bold">{currentCourse[0].rating}</h3>
                    <ul className='flex items-center gap-2 text-yellow-600'>
                        <li><i className="fa-solid fa-star"></i></li>
                        <li><i className="fa-solid fa-star"></i></li>
                        <li><i className="fa-solid fa-star"></i></li>
                        <li><i className="fa-solid fa-star"></i></li>
                        <li><i className="fa-regular fa-star"></i></li>
                    </ul>
                    <p>({currentCourse[0].review})</p>
                    </div>
                </div>
            </div>

            {/* Course Intro */}
            <div className="course_intro w-[40%] mt-10 lg:mt-0">
                <iframe width="560" height="315" src={currentCourse[0].video_url} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
            </div>
        </div>
      </div>
    </div>
  )
}

export default SingleCourse
