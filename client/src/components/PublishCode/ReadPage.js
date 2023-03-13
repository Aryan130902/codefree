import React from 'react'
import SideTable from './SideTable'
import Appbar from './Appbar'
import ReadCode from './ReadCode'


const ReadPage = () => {
  return (
    <div>
    <Appbar/>
    <div className='flex flex-row flex-wrap'>
    <div>
      <SideTable/>
    </div>
    <div className='flex-auto'>
      <ReadCode/>
    </div>
  </div>
</div>
  )
}

export default ReadPage