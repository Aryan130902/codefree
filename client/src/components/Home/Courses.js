import React from 'react'
import { Avatar } from 'flowbite-react'
import { categories } from '../../constants/data'
import { Link } from 'react-router-dom'


const Courses = () => {
  return (
    <section className="text-gray-600 body-font">
  <div className="container px-5 py-24 mx-auto">
    <div className="flex flex-wrap w-full mb-20 flex-col items-center text-center">
      <h1 className="font-primaryfont sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900">Branch Courses</h1>
      <p className="font-primaryfont lg:w-1/2 w-full leading-relaxed text-gray-500">More courses will be updates soon</p>
    </div>
    <div className="flex flex-wrap m-4 ">
      
        {
        categories.map(courses => (
          <div  className="xl:w-1/3 md:w-1/2 sm:w-16 p-4" key={courses.id}>
          <Link to={`/readPage/?courses=${courses.type}`}>
              <div className="border border-gray-200 p-6 rounded-lg">
                  <div className="w-10 h-10 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-4">
                      
                      <Avatar
                      key={courses.id}
                      placeholderInitials={courses.avatar} />
                  
              </div><h2 className="text-lg text-gray-900 font-medium title-font mb-2">{courses.type}</h2>
              <p className="leading-relaxed text-base"> {courses.faculty} </p>
              </div>
          </Link>    
          </div>
        ))
        }
        
    </div>
  </div>
</section>
  )
}

export default Courses



                