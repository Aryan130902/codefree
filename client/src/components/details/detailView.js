import React from 'react'
import Appbar from '../PublishCode/Appbar'
import Article from './article'


const DetailView = () => {
  return (
    <div>
      <Appbar/>
    <div className='flex flex-row flex-wrap'>
    <div className='mx-auto'>
      <Article/>
    </div>
  </div>
</div>
  )
}

export default DetailView