'use client'
import './scss/mystile.scss';
import image from "./img/Rectangle.jpg";
import Image from "next/image";
import React, { useEffect, useState } from 'react';
import { getJsonData } from '../../app/async/api';
import { BsFiletypePdf } from 'react-icons/bs';
import { SlPaperClip } from 'react-icons/sl';
import { FaFacebook, FaTelegram, FaWhatsapp } from 'react-icons/fa6';

interface Article {
    postId: number;
    id: number;
    name: string;
    email: string;
    body: string;
}
const ArticlesComponent: React.FC = () => {
  const [articles, setAerticles] = useState<Article[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const url = 'https://jsonplaceholder.typicode.com/comments';
        const data = await getJsonData<Article[]>(url);
        setAerticles(data.slice(0, 12));
        console.log(data);
      } catch (error) {
        console.error('Error fetching user data:', error);
      }
    };

    fetchData();
  }, []);
    return (
        <div className="flex min-h-screen items-top justify-between p-24">
            <div className=" w-3/4 mr-16">
                {articles.map((article) => (
                    <div key={article.id} className="">
                        {article.id % 2 == 0 ? (
                          <p className='article-recent'>ARTÍCULOS MAS RECIENTES </p>
                        ) : (
                          <p></p>)
                        }
                        <p className='article-date'>Abril 15 I 2023</p>
                        <p className='article-title'>{article.name}</p>
                        <p className='article-content'>{article.body}</p>
                        <h3 className="article-author">{article.email}</h3>
                        <div className='buttons flex justify-end '>
                          <div>
                            <a href="#" className='btn' type='button'><BsFiletypePdf color='#178435' size={25}/></a>
                          </div>
                          <div className="dropdown ms-6">
                              <button className="more">
                                <SlPaperClip color='#178435' size={25}/>
                              </button>

                              <ul className="dropdown-menu">
                                  <li className='ml-2 mb-2'>
                                    <a href="#"><FaFacebook color='#178435' size={30}/></a>
                                    <a href="#"><FaTelegram color='#178435' size={30}/></a>
                                    <a href="#"><FaWhatsapp color='#178435' size={30}/></a>
                                  </li>
                              </ul>
                          </div>
                        </div>
                      <hr className="my-auto mb-4 border-t-4 border-green-700" />
                    </div>
                ))}
            </div>            
            <div className="w-1/4">
              <div className="">
                <Image src={image} alt="imagen de footer" width={440} height={667} />
              </div>
            </div>
        </div>
    );
};
export default ArticlesComponent;