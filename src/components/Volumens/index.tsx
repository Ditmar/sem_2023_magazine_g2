'use client'
import styles from './styles.module.scss';
import Image from "next/image";
import React, { useEffect, useState } from 'react';
import { getJsonData } from '../../app/async/service';
import {roboto, montserrat, lato} from "./fonts"

interface UserData {
  albumId: number;
  id: number;
  title: string;
  url: string;
  thumbnailUrl: string;
}

const UserComponent: React.FC = () => {
  const [userData, setUserData] = useState<UserData[]>([]);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const url = 'https://jsonplaceholder.typicode.com/photos';
        const data = await getJsonData<UserData[]>(url);
        setUserData(data.slice(0, 12));
      } catch (error) {
        console.error('Error fetching user data:', error);
      }
    };

    fetchUserData();
  }, []);


  return (
    <div className="mx-auto">
      <div className='w-full flex justify-center mb-4'><h3 className={`${montserrat.className} ${styles.title}`}>VOLUMENES</h3></div>
      <div className="flex flex-wrap -mx-4 justify-center">
        {userData.map((photo) => (
          <div key={photo.id} className="w-full sm:w-1/2 md:w-1/3 lg:w-1/3 px-4 mb-8">
            <div className=" rounded m-8 mt-0">
              <Image src={photo.thumbnailUrl} alt={photo.title} width={339} height={512} className="w-full h-auto mb-2"></Image>
              <p className={`${lato.className} ${styles.descrip}`}>{photo.title}</p>
              <p className={`${roboto.className} ${styles.volumen}`}>Vol.1</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UserComponent;


