import React from 'react'
import styles from "../style";
import { Footer, Navbar } from "../components";
import { projectsData } from "../constants";
import Article from '../components/Article';
import { blog05 } from '../components/blog/imports';
import { menuBras ,euHome, ahorcado,tareas } from './importsPortafolio';

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

   <div className='ml-4 mr-4 '>  
      <div className="rounded-[20px] flex-1 grid grid-cols-1 gap-8 md:grid-cols-3 lg:grid-cols-4">
        <Article 
          imgUrl={menuBras}
          date="Jun 20, 2024" 
          title={projectsData[0]?.title} 
          text={projectsData[0]?.description} 
          link={projectsData[0]?.link} 
          handleButtonClick={(link) => handleButtonClick(link)} />

        <Article 
          imgUrl={euHome} 
          date="Dec 12, 2022" 
          title={projectsData[1]?.title} 
          text={projectsData[1]?.description} 
          link={projectsData[1]?.link} 
          handleButtonClick={(link) => handleButtonClick(link)} 
        />

        <Article 
          imgUrl={ahorcado} 
          date="Mar 10, 2024"
          title={projectsData[2]?.title}  
          text={projectsData[2]?.description}
          link={projectsData[2]?.link}
          handleButtonClick={(link) => handleButtonClick(link)} 
          />

        <Article 
          imgUrl={tareas} 
          date="May 15, 2024" 
          title={projectsData[3]?.title}
          text={projectsData[3]?.description}
          link={projectsData[3]?.link}
          handleButtonClick={(link) => handleButtonClick(link)} 
          />
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
