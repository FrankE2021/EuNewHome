import React from 'react';
import styles from '../style';

const Article = ({ imgUrl, date, text }) => (
  <div className="flex flex-col bg-footer w-full h-full border rounded-[50px]">
    <div className="w-full h-full bg-bg">
      <img src={imgUrl} alt="blog_image" className="rounded-[50px] w-full h-full" />
    </div>
    <div className="flex flex-col justify-between p-4 sm:p-6 h-full">
      <div>
        <p className="font-poppins text-[11.65px] font-bold leading-[35px] text-white">{date}</p>
        <h3 className="font-poppins text-[25.11px] sm:text-[18px] sm:leading-[25px] font-extrabold leading-[30.3px] text-gradient mb-20 cursor-pointer">
          {text}
        </h3>
      </div>
      <p className="font-poppins text-[11.65px] font-bold leading-[35px] text-white cursor-pointer">Ver Completo</p>
    </div>
  </div>
);

export default Article;
