import React from 'react'
import SideTable from '../PublishCode/SideTable'
import Appbar from '../PublishCode/Appbar'
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