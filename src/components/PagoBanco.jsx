import React from 'react';
import styles from '../style';
import Navbar from './Navbar';
import Footer from './Footer';
import { bancoData } from '../constants/MetodosPagoData';


const PagoBanco = () => {

  return (
    <div className="bg-primary w-full overflow-hidden">
      {/* NavBar */}
      <div className={`${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <Navbar />
        </div>
      </div>


      {/* =========================== Content para Banco ============================= */}  
        <div className="flex flex-col justify-between p-4 sm:p-6 h-full m-5 flex flex-col bg-footer border rounded-[25px] bg-black-gradient-2">
          <div>
            <p className="font-poppins text-[11.65px] font-bold leading-[35px] text-white">{bancoData.date}</p>
            <h1 className="flex  justify-center font-poppins text-[25.11px] sm:text-[30px] sm:leading-[30px] font-extrabold leading-[30.3px] text-gradient mb-5 cursor-pointer border rounded-[20px] p-3">{bancoData.title}</h1>
            <h3 className="font-poppins text-[25px] sm:text-[30px] sm:leading-[30px] font-bold leading-[30.3px] text-gradient mb-20 cursor-pointer">
              {bancoData.description}
            </h3>
            <div className="mb-5 border rounded-[20px] p-5">
              <h4 className="flex justify-center font-poppins text-[40px] sm:text-[40px] sm:leading-[40px] font-bold leading-[40px] text-gradient mb-20 cursor-pointer">
                Agencia: {bancoData.agencia}
              </h4>
              <h5 className="flex justify-center font-poppins text-[32px] sm:text-[32px] sm:leading-[32px] font-bold leading-[32px] text-gradient cursor-pointer">
                Cuenta: {bancoData.cuenta}
              </h5>
            </div>  
            <h6 className="border p-2 rounded-[20px] font-poppins text-[25px] sm:text-[30px] sm:leading-[30px] font-bold leading-[30.3px] text-gradient mb-10 cursor-pointer">
              Propietario: {bancoData.propietario}
            </h6>
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

export default PagoBanco;
