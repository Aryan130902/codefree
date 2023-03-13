import React from 'react'
import PublishCode from './PublishCode'
import SideTable from './SideTable'
import Appbar from './Appbar'




const CreatePage = () => {


  return (
    <div>
        <Appbar/>
        <div className='flex flex-row flex-wrap'>
        <div>
          <SideTable/>
        </div>
        <div className='flex-auto'>
          <PublishCode/>
        </div>
      </div>
    </div>
  )
}

export default CreatePage