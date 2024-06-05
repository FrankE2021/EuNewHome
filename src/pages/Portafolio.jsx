import React from 'react'
import styles from "../style";
import { Footer, Navbar } from "../components";
import Projects from '../components/Projects';

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
      <div >
        <Projects handleButtonClick={handleButtonClick}/>       
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
