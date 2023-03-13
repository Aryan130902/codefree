import React from 'react'
import { Table, Button } from 'flowbite-react'
import { categories } from '../../constants/data'
import { useSearchParams,Link } from 'react-router-dom'


const SideTable = (  ) => {

  

  const [searchParams] = useSearchParams();
  const courses = searchParams.get('courses');


  return (  
    <div className='my-10 mx-10 rounded-sm '>  
    <Table >
    <Table.Head>
        <Table.HeadCell className=' font-primaryfont text-primary'>
         Categories
        </Table.HeadCell>
    </Table.Head>
            {
                categories.map(courses => ( 
                    <Table.Body className="bg-white dark:border-gray-700 dark:bg-gray-800 sm- ">
                    <Table.Cell className="font-primaryfont hover:bg-gray-50 cursor-pointer whitespace-nowrap font-medium text-gray-900 dark:text-white"
                    key={courses.id}>
                     <Link to={`/readPage?courses=${courses.type}`}>
                           {courses.type}
                           </Link>
                    </Table.Cell>
                    </Table.Body>
                ))
            }  
    
    </Table> 
    <Link to={`/createPage?courses=${courses || ''}`}>
      <Button 
      className="mx-auto w-full mt-10"
      color="purple"
      >
        Create
      </Button> 
    </Link>
    </div>
  )
}

export default SideTable
