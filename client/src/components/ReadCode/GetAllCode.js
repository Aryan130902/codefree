import React, { useEffect, useState } from 'react'
import { Link, useSearchParams } from 'react-router-dom';
import { Button } from 'flowbite-react';
import {API} from '../../service/api'
import GetCode from './GetCode';

const GetAllCode = () => {

  const [descriptions,setDescrption] = useState([]); 
  const [searchParams] = useSearchParams();
  const courses = searchParams.get('courses');
  
  const handleClick = () => {
    console.log(descriptions);
  }
useEffect(() => {
    const fetchData = async () => { 
        let response = await API.getAllDescription({courses : courses || '' });
        
        if (response.isSuccess) {
         
          setDescrption(response.data.descriptions);
        }
    }
    fetchData();
}, [courses]);

  return (
    <>
                  {
              descriptions && descriptions.length > 0 ? (
                descriptions.map((description) => (
                  <Link to={`details/${description._id}`} key={descriptions.id}>
                    <GetCode description={description} />
                  </Link>
                ))
              ) : (
                  <section className="bg-white dark:bg-gray-900 mt-16">
                      <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
                          <div className="mx-auto max-w-screen-sm text-center">
                              <h1 className="mb-4 text-7xl  font-primaryfont tracking-tight font-extrabold lg:text-9xl text-heading">404</h1>
                              <p className="mb-4 text-3xl  font-primaryfont tracking-tight font-bold text-heading md:text-4xl">OPPs.</p>
                              <p className="mb-4 text-lg font-primaryfont font-light text-gray-500">No data is available for this category </p>
                              <Link to={`/createPage?courses=${courses || ''}` }>
                                <Button 
                                className="mx-auto w-full mt-10"
                                color="purple"
                                onClick={() => handleClick()}
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
   
  )
}

export default GetAllCode