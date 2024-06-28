import React from 'react';
import styles from '../style';
import Navbar from './Navbar';
import Footer from './Footer';
import { pixData } from '../constants/MetodosPagoData';


const PagoPix = () => {

  return (
    <div className="bg-primary w-full overflow-hidden">
      {/* NavBar */}
      <div className={`${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <Navbar />
        </div>
      </div>


      {/* =========================== Content para Pix ============================= */}  
      <div className="m-5 flex flex-col bg-footer border rounded-[25px] bg-black-gradient-2">
        <div className='flex justify-center m-10'>
          <img src={pixData.imgUrl} alt="pix_image" className="rounded-[25px] w-80% h-auto " />
        </div>
        <div className="flex flex-col justify-between p-4 sm:p-6 h-full">
          <div>
            <p className="font-poppins text-[11.65px] font-bold leading-[35px] text-white">{pixData.date}</p>
            <h1 className="flex justify-center font-poppins text-[30px] sm:text-[30px] sm:leading-[30px] font-extrabold leading-[30.3px] text-gradient mb-5 cursor-pointer border rounded-[20px] p-3">{pixData.title}</h1>
            <h3 className="font-poppins text-[25px] sm:text-[30px] sm:leading-[30px] font-bold leading-[30.3px] text-gradient mb-20 cursor-pointer">
              {pixData.description}
            </h3>
            <h2 className="font-poppins text-[25.11px] sm:text-[30px] sm:leading-[30px] font-extrabold leading-[30.3px] text-gradient mb-5 cursor-pointer border rounded-[20px] p-3">CHAVE PIX: {pixData.llavePix}</h2>
            <h4 className="font-poppins text-[25.11px] sm:text-[30px] sm:leading-[30px] font-extrabold leading-[30.3px] text-gradient mb-5 cursor-pointer border rounded-[20px] p-3">PROPIETARIO: {pixData.propietario}</h4>
          </div>
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

export default PagoPix;
