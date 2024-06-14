import React from 'react';
import styles from '../style';

const Article = ({ imgUrl, date, text, title,link, handleButtonClick }) => (
  <div className="flex flex-col bg-footer w-full h-full border rounded-[50px] bg-black-gradient-2">
    <div className="w-full h-full bg-bg">
      <img src={imgUrl} alt="blog_image" className="rounded-[50px] w-full h-full" />
    </div>
    <div className="flex flex-col justify-between p-4 sm:p-6 h-full">
      <div>
        <p className="font-poppins text-[11.65px] font-bold leading-[35px] text-white">{date}</p>
        <h1 className="font-poppins text-[25.11px] sm:text-[18px] sm:leading-[25px] font-extrabold leading-[30.3px] text-gradient mb-5 cursor-pointer border rounded-[20px] p-2">{title}</h1>
        <h3 className="font-poppins text-[23px] sm:text-[15px] sm:leading-[25px] font-bold leading-[30.3px] text-gradient mb-20 cursor-pointer">
          {text}
        </h3>
      </div>

      <button 
      type="button" 
      className={`py-4 px-6 font-poppins font-medium text-[22px] text-primary bg-gold-gradient rounded-[20px] outline-none ${styles}`} 
      onClick={() => handleButtonClick(link)}>
        Visitar
      </button>

    </div>
  </div>
);

export default Article;
