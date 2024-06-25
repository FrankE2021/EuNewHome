import React from 'react';
import styles, {layout} from '../style';
import Navbar from './Navbar';
import Footer from './Footer';
import { useCart } from '../contexts/CartContext';
import {features} from '../constants/MetodosPagoData'


const PaymentMethod = () => {
  const { cart } = useCart();

  const MetodosPago = ({ icon, title, content, index }) => (
    <div className={`flex flex-row p-6 rounded-[20px] ${index !== features.length - 1 ? "mb-6" : "mb-0"} feature-card`}>
      <div className={`w-[64px] h-[64px] rounded-full ${styles.flexCenter} bg-dimBlue`}>
        <img src={icon} alt="star" className="w-[50%] h-[50%] object-contain" />
      </div>
      <div className="flex-1 flex flex-col ml-3">
        <h4 className="font-poppins font-semibold text-white text-[18px] leading-[23.4px] mb-1">
          {title}
        </h4>
        <p className="font-poppins font-normal text-dimWhite text-[16px] leading-[24px]">
          {content}
        </p>
      </div>
    </div>
  );

  return (
    <div className="bg-primary w-full overflow-hidden">
      {/* NavBar */}
      <div className={`${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <Navbar />
        </div>
      </div>

				<div className="w-full flex justify-center items-center">
					<h1 className="m-5  border p-3 rounded-[25px] text-gradient font-poppins font-extrabold text-[50px] leading-[52px] md:text-[60px] md:leading-[75px]">
							Elija la forma de pago:
					</h1>
				</div>
      <div className='m-8 bg-gray-gradient rounded-[20px]'>
				<div className={`${layout.sectionImg} flex-col md:ml-0`}>
					{features.map((feature, index) => (
							<MetodosPago key={feature.id} {...feature} index={index} />
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

export default PaymentMethod;
