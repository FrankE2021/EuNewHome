import React from 'react'
import styles from "../style";
import { Footer, Navbar } from "../components";
import ServicesOn from '../components/ServicesOn';

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
      <ServicesOn handleButtonClick={handleButtonClick}/>
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
