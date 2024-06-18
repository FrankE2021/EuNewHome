import React from 'react';
import styles from '../style';
import { useNavigate } from 'react-router-dom';

const ArticleBlog = ({ imgUrl, date, text, title }) => {
  
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/articulo/${id}`);
  };

  return (
  <div onClick={handleClick} className="flex flex-col bg-footer w-full h-full border rounded-[25px] bg-black-gradient-2">
    <div>
      <img src={imgUrl} alt="blog_image" className="rounded-[25px] w-50% h-50%" />
    </div>
    <div className="flex flex-col justify-between p-4 sm:p-6 h-full">
      <div>
        <p className="font-poppins text-[11.65px] font-bold leading-[35px] text-white">{date}</p>
        <h1 className="font-poppins text-[25.11px] sm:text-[30px] sm:leading-[30px] font-extrabold leading-[30.3px] text-gradient mb-5 cursor-pointer border rounded-[20px] p-3">{title}</h1>
        <h3 className="font-poppins text-[25px] sm:text-[30px] sm:leading-[30px] font-bold leading-[30.3px] text-gradient mb-20 cursor-pointer">
          {text}
        </h3>
      </div>
    </div>
  </div>
  );
}

export default ArticleBlog;
