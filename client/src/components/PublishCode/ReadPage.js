import React from 'react'
import SideTable from './SideTable'
import Appbar from './Appbar'
import GetAllCode from './GetAllCode'


const ReadPage = () => {
  return (
    <div>
    <Appbar/>
    <div className='flex flex-row flex-wrap'>
    <div>
      <SideTable/>
    </div>
    <div className='flex-auto'>
      <GetAllCode/>
    </div>
  </div>
</div>
  )
}

export default ReadPage