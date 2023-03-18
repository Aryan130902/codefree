import React from 'react'
i


const GetCode = ({description}) => {

 
  return (
    <div className="pr-5 pb-8 pt-2 mx-auto">
         <div className="flex flex-wrap m-4">
      <div className="w-full p-4">
        <div className="border border-gray-200 p-6 rounded-lg">
          <h2 className="text-lg text-gray-900 font-medium title-font mb-2">{description.title}</h2>
          <p className="leading-relaxed text-base">{description.description}</p>
          <a className="text-indigo-500 inline-flex items-center mt-4">Learn More
          </a>
        </div>
      </div>
    </div>
    </div>
  )
}

export default GetCode