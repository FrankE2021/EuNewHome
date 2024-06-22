import React from 'react'
import styles from "../style";
import { Footer, Navbar } from "../components";

import Servicios1 from '../components/Servicios1';

const Servicios = () => {

  const handleButtonClick = (link) => {
    window.open(link);
  };
  
  return (
    <div className="bg-primary w-full overflow-hidden">
    <div className={`${styles.paddingX} ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>
        <Navbar />
      </div>
    </div>

    <div>
      <Servicios1 />
    </div>    
    
    <div className={`bg-primary ${styles.paddingX} ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>
        <Footer />
      </div>
    </div>
  </div>
  )
}

export default Servicios
