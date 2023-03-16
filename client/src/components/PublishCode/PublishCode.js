import React from 'react'
import { useState,useEffect, useContext } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { DataContext } from '../../context/DataProvider'
import {API} from '../../service/api'


const initialCode ={
  username:'',
  title:'',
  date: new Date(),
  body:'',
  file:'',
  courses:'',
}


const PublishCode = () => {


  const [description,setDescription] = useState(initialCode);
  const [file,setFile] = useState([]);
  const [error,setError] = useState('');
  const {account} = useContext(DataContext);
  const handleChange = (e) => {

    setDescription({...description,[e.target.name]:e.target.value})

  }

  const handleUpload = (e) => {
    setFile(e.target.files);
  //   const selectedFile = e.target.files[0];

  // if (selectedFile.size > 500000) {
  //   setError("File size should be less than 500kb");
  // } else {
  //   setFile(selectedFile);
  //   setError("");
  // }
  }

  const navigate = useNavigate();
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const courses = searchParams.get('courses');


  const saveDescription = async() => {
   let response = await API.createDescription(description);
   if(response.isSuccess){
    navigate('/')
   }
  }

  useEffect(() => {
    const getFile = async() => {
      if(file){
        const data = new FormData();
        data.append('name',file.name);

        for (let i = 0; i < file.length; i++) {
          data.append('file', file[i]);
        }

        
        //API CALL
        const response = await API.uploadFile(data);
        description.file = response.data;
      }
    }

    getFile();
    description.courses = courses;
    description.username=account.username;

  },[file])

  
 
  return (
    <div className='my-10 ml-10 w-full'>
        <div id="textarea">
            <textarea 
                onChange={(e) => handleChange(e)}
                name='title'
                rows="1" 
                className="font-primaryfont drop-shadow-md border-transparent p-2.5 w-5/6 text-lg font-heading font-bold text-heading bg-bgsecondary rounded-lg focus:border-transparent focus:ring-0" 
                placeholder="Write your Title here...">
            </textarea>
        </div>
        <div id="textarea">
            <textarea 
                onChange={(e) => handleChange(e)}
                name='description' 
                rows="20" 
                className="font-primaryfont drop-shadow-md border-transparent p-2.5 w-5/6 text-sm text-heading bg-bgsecondary rounded-lg focus:border-transparent focus:ring-0" 
                placeholder="Write your code here...">
            </textarea>
        </div>
       
        <label className="font-primaryfont text-gray-900 ml-2 text-sm" for="file-input">Upload a file (less than 500kb):</label>

        <div className='flex flex-row flex-wrap drop-shadow-md'>
            <input className="font-primaryfont my-2 block w-4/6 text-sm text-gray-900 rounded-lg cursor-pointer bg-bgsecondary focus:ring-heading focus:border-heading"
            type="file"
            onChange={(e) => handleUpload(e)}
            name='file' 
            multiple/>
            <button 
            type="button" 
            className="font-primaryfont drop-shadow-md  text-white bg-primary hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5  ml-10"
            onClick={() => saveDescription()}
            >
              Publish
            </button>
        </div>
        {error && <p className='ml-2 text-red-600 font-primaryfont'>{error}</p>}
    </div>
  )
}


export default PublishCode