import React, { useEffect } from 'react'
import { useEffect,useState } from 'react'
import { Link, useSearchParams } from 'react-router-dom';

import {API} from '../../service/api'


const GetAllCode = () => {

  const [description,setDescrption] = useState([]); 
  const [searchParams] = useSearchParams();
  const category = searchParams.get('category');

  useEffect(() => {
    const fetchData = async () => { 
        let response = await API.getAllPosts({ category : category || '' });
        if (response.isSuccess) {
            getPosts(response.data);
        }
    }
    fetchData();
}, [category]);

  return (
    <div className="pr-5 pb-8 pt-2 mx-auto">
         <div className="flex flex-wrap m-4">
      <div className="w-full p-4">
        <div className="border border-gray-200 p-6 rounded-lg">
          <h2 className="text-lg text-gray-900 font-medium title-font mb-2">Shooting Stars</h2>
          <p className="leading-relaxed text-base">Fingerstache flexitarian street art 8-bit waist co, subway tile poke farm.</p>
          <a className="text-indigo-500 inline-flex items-center mt-4">Learn More
          </a>
        </div>
      </div>
    </div>
    </div>
  )
}

export default GetAllCode