import React from 'react'
import { addElipsis } from '../../utils/common-utils'


const GetCode = ({description}) => {

 
  return (
    <div className="pr-5 pb-8 pt-2 mx-auto">
         <div className="flex flex-wrap m-4">
      <div className="w-full p-4">
        <div className="border border-gray-200 p-6 rounded-lg">
          <h2 className="text-lg text-gray-900 font-medium title-font mb-2" >{addElipsis(description.title,10)}</h2>
          <p className="leading-relaxed text-base">{addElipsis(description.description,50)}</p>
          <p className="text-heading items-center mt-4"> course : {description.courses}</p>
          <p className="text-indigo-500 inline-flex items-center mt-4"> Learn More
          </p>
        </div>
      </div>
    </div>
    </div>
  )
}

export default GetCode