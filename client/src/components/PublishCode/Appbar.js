import React from 'react'
import { Navbar, Dropdown, Avatar } from 'flowbite-react'





const Appbar = () => {
  return (
        <div className="">
        <Navbar
          fluid={true}
          rounded={true}
        >
      
        <div className='flex'>
          <img
            src="logo.png"
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
          
          >
            Home
          </Navbar.Link>
          <Navbar.Link
           className="text-primaryfont cursor-pointer"
          
          >
            About
          </Navbar.Link>
          <Navbar.Link 
           className="text-primaryfont cursor-pointer"
         
          >
            Courses
          </Navbar.Link>
          <Navbar.Link 
           className="text-primaryfont cursor-pointer"
          >
            Create
          </Navbar.Link>
        </Navbar.Collapse>
      </Navbar>
    </div>
  )
}

export default Appbar