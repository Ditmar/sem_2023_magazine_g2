'use client'
import './scss/mystile.scss';
import image from "./img/Rectangle.jpg";
import Image from "next/image";
import React, { useEffect, useState } from 'react';
import { fetchData } from '../../app/async/api';
import { ArticleItem } from '../ArticlesItem';
const ArticlesTuComponente: React.FC = () => {
  const [articles, setAerticles] = useState<Article[]>([]);

  useEffect(() => {
    const fetchDataAndSetState = async () => {
      const data = await fetchData();
    //   console.log(data);
      setAerticles(data);
    };

    fetchDataAndSetState();
  }, []);

    return (
        <div className="flex min-h-screen items-top justify-between p-24">
           <div className="w-3/4 mr-16">
            {articles.slice(0, 10).map((article) => (
            <ArticleItem key={article.id} article={article} />
          )
        )
      }
      </div>            
          <div className="w-1/4">
            <div className="">
              <Image src={image} alt="imagen de footer" width={440} height={667} />
            </div>
          </div>
      </div>
    );
};
export default ArticlesTuComponente;




