import React from 'react';
import styles from "../style";
import { Footer, Navbar } from "../components";
import { promotionsData } from "../constants/promotionsData";
import { useNavigate } from 'react-router-dom';

const Promotions = () => {

  const navigate = useNavigate();

  const handleButtonClick = (link) => {
    window.open(link);
  };

  return (
    <div className="bg-primary w-full overflow-hidden">
      {/* Navbar */}
      <div className={`${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <Navbar />
        </div>
      </div>

      {/* Contenido */}
      <div className='m-4'>
        <div className="w-full flex justify-center items-center mb-10">
          <h1 className="border p-4 rounded-[20px] text-gradient font-poppins font-extrabold text-[46px] leading-[52px] md:text-[62px] md:leading-[75px]">
            Promociones
          </h1>
        </div>
        <div className="rounded-[20px] flex-1 grid grid-cols-2 gap-4 md:grid-cols-3 ss:grid-cols-2 sm:grid-cols-3 lg:grid-cols-4">
          {promotionsData.map((project) => (
            <div 
              key={project.id} 
              onClick={() => navigate(`/promotions/${project.id}`)} 
              className="flex flex-col bg-footer w-full h-full border rounded-[25px] bg-black-gradient-2 cursor-pointer"
            >
              <div className="w-full h-full bg-bg">
                <img src={project.imgUrl} alt="promotions_image" className="rounded-[25px] w-full h-full" />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Footer */}
      <div className={`bg-primary ${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default Promotions;
