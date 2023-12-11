// BotonesComponent.jsx
import React from 'react';
import { GoPaperclip } from "react-icons/go";
import { FaRegFilePdf, FaFacebook, FaTelegram, FaWhatsapp } from 'react-icons/fa6';

const BtnComponent = () => {
  return (
    <div className="buttons flex justify-end">
      <div>
        <a href="#" className="btn" type="button">
          <FaRegFilePdf color="#178435" size={30} />
        </a>
      </div>
      <div className="dropdown ms-6">
        <button className="more">
          <GoPaperclip color="#178435" size={30} />
        </button>
        <ul className="dropdown-menu">
          <li className="ml-2 mb-4">
            <a href="#">
              <FaFacebook color="#178435" size={30} />
            </a>
            <a href="#">
              <FaTelegram color="#178435" size={30} />
            </a>
            <a href="#">
              <FaWhatsapp color="#178435" size={30} />
            </a>
          </li>
        </ul>
      </div>
    </div>
    
  );
};

export default BtnComponent;
