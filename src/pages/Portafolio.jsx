import React from 'react';
import styles from "../style";
import { Footer, Navbar } from "../components";
import { portafolioData } from "../constants/portafolioData";
import { useNavigate } from 'react-router-dom';

const Portafolio = () => {

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
            Mis Proyectos
          </h1>
        </div>
        <div className="rounded-[20px] flex-1 grid grid-cols-1 gap-4 md:grid-cols-3 lg:grid-cols-4">
          {portafolioData.map((project) => (
            <div 
              key={project.id} 
              onClick={() => navigate(`/articulo/${project.id}`)} 
              className="flex flex-col bg-footer w-full h-full border rounded-[25px] bg-black-gradient-2 cursor-pointer"
            >
              <div className="w-full h-full bg-bg">
                <img src={project.imgUrl} alt="portfolio_image" className="rounded-[25px] w-full h-full" />
              </div>
              <div className="flex flex-col justify-between p-4 sm:p-6 h-full">
                <div>
                  <p className="font-poppins text-[11.65px] font-bold leading-[35px] text-white">{project.date}</p>
                  <h1 className="font-poppins text-[25.11px] sm:text-[18px] sm:leading-[25px] font-extrabold leading-[30.3px] text-gradient mb-5 cursor-pointer border rounded-[20px] p-2">{project.title}</h1>
                  <h3 className="font-poppins text-[23px] sm:text-[15px] sm:leading-[25px] font-bold leading-[30.3px] text-gradient mb-20 cursor-pointer">
                    {project.text}
                  </h3>
                </div>

                <button 
                  type="button" 
                  className={`py-4 px-6 font-poppins font-medium text-[22px] text-primary bg-gold-gradient rounded-[20px] outline-none ${styles}`} 
                  onClick={(e) => {
                    e.stopPropagation();
                    handleButtonClick(project.link);
                  }}
                >
                  Visitar
                </button>
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

export default Portafolio;
