import React from 'react'
import { categories } from '../../constants/data'
import { Sidebar } from 'flowbite-react'



const PageSidebar = () => {
  return (
    <div className='drop-shadow-md '>
    <div className="w-1/4 md:w-full ml-5 mt-10 rounded-lg">
  <Sidebar aria-label="Sidebar with logo branding example">
    <Sidebar.Logo
      href="#"
      img="./logo.png"
      imgAlt="Flowbite logo"
      className='font-primaryfont'
    >
      Codefree
    </Sidebar.Logo>
    <Sidebar.Items>
      <Sidebar.ItemGroup 
      className='font-primaryfont'>
        <Sidebar.Item
          href="/"
        >
          Home
        </Sidebar.Item>
        <Sidebar.Item
          href="/createPage"
        
        >
          Create
        </Sidebar.Item>
        <Sidebar.Item
          href="#"
         
        >
          Users
        </Sidebar.Item>
        <Sidebar.Item
          href="/login"
         
        >
          Sign In
        </Sidebar.Item>
      </Sidebar.ItemGroup>
    </Sidebar.Items>
  </Sidebar>
</div>
</div>
  )
}

export default PageSidebar