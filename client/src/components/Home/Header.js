import React from 'react'
import { NavLink } from 'react-router-dom';

const Header = ({}) => {


  return (
    <div>
        <section className="bg-bgcolor pt-32">
  <div className="container max-w-full mx-auto flex px-5 pt-24 pb-8 md:flex-row flex-col items-center md:pt-0">
    <div className="lg:flex-grow lg:pl-24 md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center" >
    
      <h1 className="sm:text-4xl font-primarylightfont lg:text-6xl text-primaryheading font-light lg:leading-14" >
     <span className='text-primary font-primarylightfont font-semibold'> Code Free  </span>
    provide all the code of your assignments for free! 
      </h1>
      <p className="font-primaryfont text-lg pr-15 py-5 pr- mb-8  text-secondary ">Get your assignment code for free, and feel free to add your contribution</p>
      
      <NavLink
      className="lg:mr-5 md:mr-0 md:ml-0 font-primaryfont bg-primary hover:scale-110  rounded-full decoration-2  duration-300 py-5 px-8 font-semibold text-white"
      to="/createPage"
      >  Publish </NavLink>
    </div>
    <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
      <img className="object-fill object-center rounded" alt="hero" src="./Group 9.png"/>
    </div>
  </div>
</section>
    </div>
  )
}

export default Header