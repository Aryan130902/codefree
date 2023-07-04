import React from 'react'
import { useParams } from 'react-router'
import { useEffect, useState} from 'react';
import { useNavigate } from 'react-router';
import { API } from '../../service/api';
import { useContext } from 'react';
import { DataContext } from '../../context/DataProvider';

const Article = () => {


    const [description, setDescrption] = useState({});
    const { account } = useContext(DataContext);

    const navigate = useNavigate();
    const { id } = useParams();
    
    useEffect(() => {
        const fetchData = async () => {
            let response = await API.getArticleById(id);
            
            if (response.isSuccess) {
                console.log(response.data.data);
                setDescrption(response.data.data);
            }
        }
        fetchData();
    }, []);

  return (
    <div>
        <article className="max-w-2xl px-6 py-24 mx-auto space-y-12 dark:bg-gray-800 dark:text-gray-50">
            <div className="w-full mx-auto space-y-4 text-center">
            {description && description.title && (
                <p className="text-xs font-semibold tracking-wider uppercase">{description.course}</p>
                )}
                <h1 className="text-4xl font-bold leading-tight md:text-5xl">{description.title}</h1>
                <p className="text-sm dark:text-gray-400">by
                    <a rel="noopener noreferrer" href="#" target="_blank" className="underline dark:text-violet-400">
                        <span itemprop="name">{description.username}</span>
                    </a>
                </p>
            </div>
            <div className="dark:text-gray-100">
                <p>{description.description}</p>
            </div>
            <div className="pt-12 border-t dark:border-gray-700">
                <div className="flex flex-col space-y-4 md:space-y-0 md:space-x-6 md:flex-row items-centre">
                    <img src="https://source.unsplash.com/75x75/?portrait" alt="" className="self-center flex-shrink-0 w-24 h-24 border rounded-full md:justify-self-start dark:bg-gray-500 dark:border-gray-700" />
                    <div className="flex flex-col ">
                        <h4 className="text-lg font-semibold">{description.username}</h4>
                    </div>
                </div>
            </div>
        </article>
    </div>
  )
}

export default Article