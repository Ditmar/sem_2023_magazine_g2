
import React from 'react';
import { TbPointFilled } from 'react-icons/tb';

const SlideNavigation = ({ onPrevSlide, onNextSlide }) => {
  return (
    <div className='flex justify-center items-center'>
      <div className=" left-0 top-0 bottom-0 flex items-center">
        <button onClick={onPrevSlide} className="p-2">
          <TbPointFilled color='#178435'/>
        </button>
      </div>
      <TbPointFilled color='178435'/>
      <div className=" right-0 top-0 bottom-0 flex items-center">
        <button onClick={onNextSlide} className="p-2">
          <TbPointFilled color='178435'/>
        </button>
      </div>
    </div>
  );
};

export default SlideNavigation;
