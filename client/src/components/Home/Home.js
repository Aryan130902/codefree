import { Navbar,Dropdown,Avatar } from 'flowbite-react'
import React from 'react';
import { useRef } from 'react';

//import components 
import PageFooter  from '../Home/PageFooter';
import Courses from '../Home/Courses';
import Header from '../Home/Header';
import Create from '../Home/Create';
import DetailView from '../details/detailView';


const Home = () => {
    
  const scrollDown = (ref) => {
    window.scrollTo({
      top: ref.current.offsetTop,
      behavior: 'smooth',
    });
  };

  const headerSection = useRef(null);
  const createSection = useRef(null);
  const courseSection = useRef(null);
  const footerSection = useRef(null);

   return (

   
  <div className="sticky top-0">
        <Navbar
          fluid={true}
          rounded={true}
        >
      
        <div className='flex'>
          <img
            src="./logo.png"
            className="mr-3 h-8"
            alt="Logo"
          />
          
        </div>
        <div className="flex md:order-2 text-pr">
          <Dropdown
            arrowIcon={false}
            inline={true}
            label={
              <Avatar 
              alt="User settings" 
              img="" 
              rounded={true}/>}
          >
            <Dropdown.Header>
              <span className="block text-sm">
                
              </span>
              <span className="block truncate text-sm font-medium">

              </span>
            </Dropdown.Header>
            <Dropdown.Divider />
            <Dropdown.Item>
              Sign out
            </Dropdown.Item>
          </Dropdown>
          <Navbar.Toggle />
        </div>
        <Navbar.Collapse>
          <Navbar.Link
            href="/"
            className="text-primaryfont cursor-pointer"
            onClick={() => scrollDown('')}
          >
            Home
          </Navbar.Link>
          <Navbar.Link
           className="text-primaryfont cursor-pointer"
          onClick={() => scrollDown(headerSection)}
          >
            About
          </Navbar.Link>
          <Navbar.Link 
           className="text-primaryfont cursor-pointer"
          onClick={() => scrollDown(courseSection)}
          >
            Courses
          </Navbar.Link>
          <Navbar.Link 
           className="text-primaryfont cursor-pointer"
          onClick={() => scrollDown(createSection)}>
            Create
          </Navbar.Link>
        </Navbar.Collapse>
      </Navbar>

      <div ref={headerSection}>
        <Header/>
      </div>
      <div ref={courseSection}>
       <Courses/>
      </div>
      <div ref={footerSection}>
        <PageFooter/>
      </div>
 </div>
  )
}

export default Home