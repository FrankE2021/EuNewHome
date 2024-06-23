import React from 'react';
import styles from '../style';
import Navbar from './Navbar';
import Footer from './Footer';
import { useParams } from 'react-router-dom';
import { blogData } from '../constants/blogData'; 

const ArticleBlog = () => {
  let { id } = useParams();

  // Buscar el artículo correspondiente según el id
  const article = blogData.find(article => article.id === id);

  if (!article) {
    return <div>Artículo no encontrado</div>; // Manejo de caso si el artículo no se encuentra
  }

  return (
    <div className="bg-primary w-full overflow-hidden">
      {/* ============================= NavBar =============================   */}
      <div className={`${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <Navbar />
        </div>
      </div>

     
      <div className="m-5 flex flex-col bg-footer border rounded-[25px] bg-black-gradient-2">
        <div>
          <img src={article.imgUrl} alt="blog_image" className="rounded-[25px] w-full h-auto" />
        </div>
        <div className="flex flex-col justify-between p-4 sm:p-6 h-full">
          <div>
            <p className="font-poppins text-[11.65px] font-bold leading-[35px] text-white">{article.date}</p>
            <h1 className="font-poppins text-[25.11px] sm:text-[30px] sm:leading-[30px] font-extrabold leading-[30.3px] text-gradient mb-5 cursor-pointer border rounded-[20px] p-3">{article.title}</h1>
            <h3 className="font-poppins text-[25px] sm:text-[30px] sm:leading-[30px] font-bold leading-[30.3px] text-gradient mb-20 cursor-pointer">
              {article.description}
            </h3>
          </div>
        </div>
      </div>

      <div className={`bg-primary ${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default ArticleBlog;
