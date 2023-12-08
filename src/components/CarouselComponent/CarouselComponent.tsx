'use client'
import React, { useRef } from 'react';
import Glider from 'react-glider';
import './glider.min.css';
import style from './CarouselComponent.module.scss'
import CarouselArticule from '../CarouselArticleComponent/CarouselArticleComponent';
import itemData from '../__mock__/data.json';
import Image from 'next/image';
import arrowleft from 'public/assets/images/arrowleft.svg';
import arrowright from 'public/assets/images/arrowRight.svg';
const product = itemData.map(item =>(
  <CarouselArticule
    key={item.id}
    image={item.image}
    name={item.volume}
    date={item.date}
  />
));
const CarouselComponent = () =>{
  const leftArrowButton = useRef(null);
  const rightArrowButton = useRef(null);
  return (
    <>
      <div className={style.margin}>
        <div className={style.carousel}>
          <button id="buttonPrev" ref={leftArrowButton}>
            <Image className={style.button_left} src={arrowleft} alt='left'/>
          </button>
            <div className={style.carouselContainer}>
              <h1 className={style.title}>VOLÚMENES</h1>
                <Glider 
                  className="glider-container"
                  draggable
                  hasArrows={true} 
                  slidesToShow={3}
                  itemWidth={3}
                  arrows={{
                    prev: '#buttonPrev',
                    next: '#buttonNext',
                  }}
                >
                {product.map(item=>{return item})}
              </Glider> 
            </div>
          <button id="buttonNext" ref={rightArrowButton}>
            <Image className={style.button_right} src={arrowright} alt='right'/>
          </button>
        </div>
      </div>
    </>
  );
};
export default CarouselComponent;
