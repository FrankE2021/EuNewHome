import React, { useState } from 'react';
import styles from '../style';
import Navbar from './Navbar';
import Footer from './Footer';
import { cubaDataMlc, cubaDataCup } from '../constants/MetodosPagoData';

const PagoCuba = () => {
  const [selectedOption, setSelectedOption] = useState('mlc');

  const handleSelectMlc = () => {
    setSelectedOption('mlc');
  };

  const handleSelectCup = () => {
    setSelectedOption('cup');
  };

  const moneda = selectedOption === 'mlc' ? cubaDataMlc : cubaDataCup;

  return (
    <div className="bg-primary w-full overflow-hidden">
      {/* NavBar */}
      <div className={`${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <Navbar />
        </div>
      </div>

      {/* Buttons for selection */}
      <div className="w-full flex justify-center items-center">
        <h1 className="ml-5 mr-5 mb-5  border p-3 rounded-[25px] text-gradient font-poppins font-extrabold text-[30px] leading-[52px] md:text-[60px] md:leading-[75px]">
            Seleccione la Moneda:
        </h1>
      </div>
      <div className="flex justify-center">
        <button onClick={handleSelectMlc} className={`mr-5 py-4 px-6 font-poppins font-medium text-[18px] text-primary bg-gold-gradient rounded-[10px] outline-none hover-bounce active-click ${styles} ${selectedOption === 'mlc' ? 'bg-white-gradient' : 'bg-blue-500'}`}>
          MLC
        </button>
        <button onClick={handleSelectCup} className={`py-4 px-6 font-poppins font-medium text-[18px] text-primary bg-gold-gradient rounded-[10px] outline-none hover-bounce active-click ${styles} ${selectedOption === 'cup' ? 'bg-white-gradient' : 'bg-green-500'}`}>
          CUP
        </button>
      </div>

      {/* Content for Cuba */}
      <div className="m-5 flex flex-col bg-footer border rounded-[25px] bg-black-gradient-2">
        <div className='flex justify-center mt-2'>
          <img src={moneda.imgUrl} alt="payment_image" className=" rounded-[25px] w-80% h-auto" />
        </div>
        <div className="flex flex-col justify-between p-4 sm:p-6 h-full">
          <div>
            <p className="flex justify-center font-poppins text-[18px] font-bold leading-[35px] text-white">{moneda.date}</p>
            <h1 className="flex justify-center font-poppins text-[25.11px] sm:text-[30px] sm:leading-[30px] font-extrabold leading-[30.3px] text-gradient mb-5 cursor-pointer border rounded-[20px] p-3">{moneda.title}</h1>
            <h3 className="font-poppins text-[25px] sm:text-[30px] sm:leading-[30px] font-bold leading-[30.3px] text-gradient mb-20 cursor-pointer">
              {moneda.description}
            </h3>
            <h4 className="flex justify-center font-poppins text-[25.11px] sm:text-[30px] sm:leading-[30px] font-extrabold leading-[30.3px] text-gradient mb-5 cursor-pointer border rounded-[20px] p-3">TARJETA: &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{moneda.tarjeta}</h4>
            <h4 className="flex justify-center font-poppins text-[25.11px] sm:text-[30px] sm:leading-[30px] font-extrabold leading-[30.3px] text-gradient mb-5 cursor-pointer border rounded-[20px] p-3">NÚMERO: &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{moneda.numeroConfirmacion}</h4>
            <h4 className="flex justify-center font-poppins text-[25.11px] sm:text-[30px] sm:leading-[30px] font-extrabold leading-[30.3px] text-gradient mb-5 cursor-pointer border rounded-[20px] p-3">PROPIETARIO: &nbsp;&nbsp;&nbsp;&nbsp;{moneda.propietario}</h4>
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
};

export default PagoCuba;
