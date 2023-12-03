// @ts-nocheck
"use client";

import React from 'react';
import { Carousel } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import styles from './Carousel.module.scss'
import imageheader from 'public/assets/img/Rectangle49.png'

import Image from 'next/image';
import Link from 'next/link';

import VolDate from '../VolumeDate/VolumeDate'

interface CarouselProps {
  text: string;
  label: string;
  description: string;
}

const ExampleCarouselImage: React.FC<CarouselProps> = () => {
  return (
    <div className={styles.carousel_image} >
      <Image src={imageheader} alt="header" />     
    </div>
  );
};

const CustomCarousel: React.FC = () => {
  return (
    <Carousel >
      <Carousel.Item  className={styles.backgraundContainer}>
        <ExampleCarouselImage />
        <Carousel.Caption className={styles.carrucelCap}>
          <Link href="/login">
            <button className={styles.button_one}>INICIAR SESION</button>
          </Link>
   
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item  className={styles.backgraundContainer}>
        <ExampleCarouselImage  />
        <Carousel.Caption className={styles.carrucelCap}>
          <Link href="/register">
            <button className={styles.button_two}>REGISTRARSE</button>
          </Link>

        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};

export default CustomCarousel;
