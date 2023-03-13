import React from 'react'
import { Dropdown } from 'flowbite-react'
import { categories } from '../../constants/data.js'
import { useSearchParams, Link } from 'react-router-dom'


const Create = () => {


    const [searchParams] = useSearchParams();
    const courses = searchParams.get('courses');

  return (
    <div>
        <section className="text-gray-600 body-font relative">
            <div className="container px-5 py-24 mx-auto">
                <div className="flex flex-col text-center w-full mb-12">
                <h1 className="font-primaryfont sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">Create</h1>
                <p className=" font-primaryfont lg:w-2/3 mx-auto leading-relaxed text-base">Your contribution to the community will be of great help</p>
                </div>
                <div className="flex w-1/2 mx-auto">
                <div className='bg-primary py-2 px-4  text-white rounded-l-lg font-primaryfont'>
                    <Dropdown
                    
                    label="Categories" 
                    inline={true}
                    >
                    {
                        categories.map(courses => (
                            <div  key={courses.id}>
                        <Dropdown.Item >
                            <Link 
                             to={`/?courses=${courses.type}`}
                           >
                           {courses.type}
                           </Link>
                        </Dropdown.Item>
                       </div>
                        ))
                    }
                    </Dropdown>
                    </div>
                    <div className="relative w-full flex-wrap">
                        <input type="search" id="search-dropdown" className="block p-2.5 w-full z-20 text-sm text-gray-900 bg-gray-50 rounded-r-lg border-l-gray-50 border-l-2 border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-l-gray-700  dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:border-blue-500" placeholder="Search Mockups, Logos, Design Templates..." required/>
                        <button type="submit" className="absolute top-0 right-0 p-2.5 text-sm font-medium text-white bg-blue-700 rounded-r-lg border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                            <svg aria-hidden="true" className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
                            <span className="sr-only">Search</span>
                        </button>
                    </div>
                </div>
                </div>
        </section>
    </div>
  )
}

export default Create


