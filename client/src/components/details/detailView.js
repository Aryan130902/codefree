import React from 'react'
import Appbar from '../PublishCode/Appbar'
import Article from './article'
import FileUploader from './upload'


const DetailView = () => {
  return (
    <div>
      <Appbar/>
    <div className='flex flex-row flex-wrap'>
    <div className='mx-auto'>
      <FileUploader/>
    </div>
  </div>
</div>
  )
}

export default DetailView