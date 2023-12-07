'use client'
import styles from './styles.module.scss';
import Image from "next/image";
import React, { useEffect, useState } from 'react';
import { fetchData } from '../../app/async/api';

const TuComponente: React.FC = () => {
  const [photos, setPhotos] = useState<Photo[]>([]);

  useEffect(() => {
    const fetchDataAndSetState = async () => {
      const data = await fetchData();
      console.log(data);
      setPhotos(data);
    };

    fetchDataAndSetState();
  }, []);

  const displayedPhotos = photos.slice(0, 12); //Aqui puedes modificar el #6 indica la catidad de fotos que va rescatar de la api

  return (
    <div className="container mx-auto">
      <div className='w-full flex justify-center mb-4'><h3 className={styles.title}>VOLUMENES</h3></div>
      <div className="flex flex-wrap -mx-4 justify-center">
        {displayedPhotos.map((photo) => (
          <div key={photo.id} className="w-full sm:w-1/2 md:w-1/3 lg:w-1/3 px-4 mb-8">
            <div className="bg-white rounded m-8 mt-0">
              <Image src={photo.thumbnailUrl} alt={photo.title} width={339} height={512} className="w-full h-auto mb-2"></Image>
              <p className={styles.descrip}>{photo.title}</p>
              <p className={styles.volumen}>Vol.1</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TuComponente;


