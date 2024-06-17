import React from 'react'
import styles from "../style";
import { Footer, Navbar } from "../components";
import { projectsData } from "../constants";
import { menuBras ,euHome, ahorcado,tareas, calculadora, reservaciones, parejas, homebeta, restaurante } from './importsPortafolio';
import ArticlePortafolio from '../components/ArticlePortafolio';

const Portafolio = () => {

  const handleButtonClick = (link) => {
    window.open(link);
  };

  return (

    /*  ==================== Navbar ====================*/
    <div className="bg-primary w-full overflow-hidden">
    <div className={`${styles.paddingX} ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>
        <Navbar />
      </div>
    </div>


   {/*  ==================== Contenido ====================*/}
   <div className='m-4'>  
      <div className="rounded-[20px] flex-1 grid grid-cols-1 gap-8 md:grid-cols-3 lg:grid-cols-4">
        <ArticlePortafolio imgUrl={menuBras} date="May 10, 2024" title={projectsData[0]?.title} text={projectsData[0]?.description} link={projectsData[0]?.link} handleButtonClick={(link) => handleButtonClick(link)} />
        <ArticlePortafolio imgUrl={euHome} date="Dec 22, 2022" title={projectsData[1]?.title} text={projectsData[1]?.description} link={projectsData[1]?.link} handleButtonClick={(link) => handleButtonClick(link)} />
        <ArticlePortafolio imgUrl={ahorcado} date="Feb 14, 2024" title={projectsData[2]?.title} text={projectsData[2]?.description} link={projectsData[2]?.link} handleButtonClick={(link) => handleButtonClick(link)} />
        <ArticlePortafolio imgUrl={tareas} date="May 12, 2024" title={projectsData[3]?.title} text={projectsData[3]?.description} link={projectsData[3]?.link} handleButtonClick={(link) => handleButtonClick(link)} />
        <ArticlePortafolio imgUrl={calculadora} date="Abr 27, 2024" title={projectsData[4]?.title} text={projectsData[4]?.description} link={projectsData[4]?.link} handleButtonClick={(link) => handleButtonClick(link)} />
        <ArticlePortafolio imgUrl={reservaciones} date="Feb 5, 2024" title={projectsData[5]?.title} text={projectsData[5]?.description} link={projectsData[5]?.link} handleButtonClick={(link) => handleButtonClick(link)} />
        <ArticlePortafolio imgUrl={parejas} date="Ene 18, 2024" title={projectsData[6]?.title} text={projectsData[6]?.description} link={projectsData[6]?.link} handleButtonClick={(link) => handleButtonClick(link)} />
        <ArticlePortafolio imgUrl={homebeta} date="Jun 5, 2024" title={projectsData[7]?.title} text={projectsData[7]?.description} link={projectsData[7]?.link} handleButtonClick={(link) => handleButtonClick(link)} />
        <ArticlePortafolio imgUrl={restaurante} date="Jun 10, 2024" title={projectsData[8]?.title} text={projectsData[8]?.description} link={projectsData[8]?.link} handleButtonClick={(link) => handleButtonClick(link)} />
      </div>  
    </div>





    {/*  ==================== Footer ====================*/}
    <div className={`bg-primary ${styles.paddingX} ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>
        <Footer />
      </div>
    </div>
  </div>
  )
}

export default Portafolio
