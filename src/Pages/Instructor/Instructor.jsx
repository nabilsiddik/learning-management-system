import axios from 'axios'
import React, { useState } from 'react'

const Instructor = () => {

  const [course, setCourse] = useState({
    title: "",
    description: "",
    old_price: "",
    new_price: "",
    badge: "",
    image_path: ""
  })

  const [file, setFile] = useState(null)

  const {title, description, old_price, new_price, badge} = course

  const onChangeInput = (e) => {
    if(e.target.type === 'file'){
      setFile(e.target.files[0])
    }else{
      setCourse(prevCourse => ({
        ...prevCourse,
          [e.target.name] : e.target.value
      }))
    }
  }

  const handleAddCourse = async (e) => {
    e.preventDefault()

    if(file){
      const formData = new FormData();
      formData.append('file', file);

      const fileUploadResponse = await axios.post('http://localhost:8080/upload', formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });

      imageUrl = fileUploadResponse.data.url
    }
    const courseData = { ...course, image_path: imageUrl }

    await axios.post("http://localhost:8080/course", courseData)

    console.log("success")
  }

  return (
    <div id='register' className='my-10'>
      <div className="container mx-auto">
        <h1 className='text-5xl text-center'>Add A Course</h1>

        <div className="login_form mt-10 shadow-2xl md:max-w-[60%] lg:max-w-[40%] max-w-[80%] mx-auto py-10 rounded-md">
          <form onSubmit={handleAddCourse} className='flex flex-col gap-5 w-[80%] mx-auto'>
            <div className="input-group">
              <input type="text"
                placeholder='Course Title'
                name='title'
                value={title}
                onChange={(e) => onChangeInput(e)}
                className='border rounded-md py-4 px-5 focus:outline-none w-full'
              />
            </div>

            <div className="input-group">
              <textarea rows='4'
                placeholder='Course Description'
                name='description'
                value={description}
                onChange={(e) => onChangeInput(e)}
                className='border rounded-md py-4 px-5 focus:outline-none w-full'
              />
            </div>

            <div className="input-group flex items-center gap-3">
              <input type="number"
                placeholder='Old Price'
                name='old_price'
                value={old_price}
                onChange={(e) => onChangeInput(e)}
                className='border rounded-md py-4 px-5 focus:outline-none w-full'
              />
              <input type="number"
                placeholder='Discount Price'
                name='new_price'
                value={new_price}
                onChange={(e) => onChangeInput(e)}
                className='border rounded-md py-4 px-5 focus:outline-none w-full'
              />
            </div>

            <div className="input-group">
              <label className="block mb-3" htmlFor="Registration type">Select Course Badge</label>
              <select
                name='badge'
                className='focus:outline-none border border-solid border-gray py-4 px-4 rounded-md w-full'
                value={badge}  // Step 3: Set value
                onChange={(e) => onChangeInput(e)}
              >
                  <option value='New Seller'>New Seller</option>
                  <option value='Bestseller'>Bestseller</option>
              </select>
            </div>

            <div className="upload_image">
              <input onChange={(e)=>{onChangeInput(e)}} type="file" className='text-lg' accept='.jpg,.jpeg,.png'/>
            </div>

            <input type="submit" value='Add Course' className='btn btn-lg bg-purple-600 text-white font-bold py-3 rounded-md cursor-pointer' />
          </form>
        </div>
      </div>
    </div>
  )
}

export default Instructor
