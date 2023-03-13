import React, { useEffect, useState } from 'react'
import { Link, useSearchParams } from 'react-router-dom';
import { Button } from 'flowbite-react';
import {API} from '../../service/api'


const GetAllCode = () => {

  const [descriptions,setDescrption] = useState([]); 
  const [searchParams] = useSearchParams();
  const courses = searchParams.get('courses');

  useEffect(() => {
    const fetchData = async () => { 
        let response = await API.getAllDescription({ courses : courses || '' });
        if (response.isSuccess) {
          setDescrption(response.data);
        }
    }
    fetchData();
}, [courses]);

  return (
    <>
       {
                descriptions?.length ? descriptions.map(description => (
                    <div>
                      hello
                    </div>
                )) : (
                  <section class="bg-white dark:bg-gray-900 mt-16">
                      <div class="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
                          <div class="mx-auto max-w-screen-sm text-center">
                              <h1 class="mb-4 text-7xl  font-primaryfont tracking-tight font-extrabold lg:text-9xl text-heading">404</h1>
                              <p class="mb-4 text-3xl  font-primaryfont tracking-tight font-bold text-heading md:text-4xl">OPPs.</p>
                              <p class="mb-4 text-lg font-primaryfont font-light text-gray-500">No data is available for this category </p>
                              <Link to={`/createPage?courses=${courses || ''}`}>
                                <Button 
                                className="mx-auto w-full mt-10"
                                color="purple"
                                >
                                  Create
                                </Button> 
                              </Link>
                          </div>   
                      </div>
                  </section>
                )
            }
    </>
    // <div className="pr-5 pb-8 pt-2 mx-auto">
    //      <div className="flex flex-wrap m-4">
    //   <div className="w-full p-4">
    //     <div className="border border-gray-200 p-6 rounded-lg">
    //       <h2 className="text-lg text-gray-900 font-medium title-font mb-2">Shooting Stars</h2>
    //       <p className="leading-relaxed text-base">Fingerstache flexitarian street art 8-bit waist co, subway tile poke farm.</p>
    //       <a className="text-indigo-500 inline-flex items-center mt-4">Learn More
    //       </a>
    //     </div>
    //   </div>
    // </div>
    // </div>
  )
}

export default GetAllCode