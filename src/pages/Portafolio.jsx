import React from 'react'
import styles from "../style";
import { Footer, Navbar } from "../components";

const Portafolio = () => {
  return (

    /*  ==================== Navbar ====================*/
    <div className="bg-primary w-full overflow-hidden">
    <div className={`${styles.paddingX} ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>
        <Navbar />
      </div>
    </div>


   {/*  ==================== Contenido ====================*/}






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
