import React from "react";
import style from './CarouselArticleComponent.module.scss'
import Link from "next/link";
const CarouselArticule = (props: any) => {
  return (
    <div>
        <Link href={'#'} className={style.Article}>
          <div className='flex justify-center items-center'>
            <img
                className={style.productImage}
                src={props.image}
                alt="product-image"
            />
          </div>
        </Link>
        <p className={style.date}>{props.date}</p>
        <h3 className={style.subtitle}>{props.name}</h3>
    </div>
  );
};
export default CarouselArticule;
