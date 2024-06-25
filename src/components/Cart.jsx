import React from 'react';
import styles from '../style';
import Navbar from './Navbar';
import Footer from './Footer';
import { useCart } from '../contexts/CartContext';
import { productsData } from '../constants/productsData';
import { useNavigate } from 'react-router-dom';


const Cart = () => {
  const { cart } = useCart();
  const navigate = useNavigate();

  const handleButtonClick = () => {
    navigate('/payment');
  };

  return (
    <div className="bg-primary w-full overflow-hidden">
      {/* NavBar */}
      <div className={`${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <Navbar />
        </div>
      </div>

      {/* Carrito */}
      <div className={`${styles.paddingX} ${styles.flexCenter} bg-primary rounded-[20px] m-2 flex flex-col py-5 px-5 `}>
        <div className={`${styles.boxWidth}`}>
          
          <div className="w-full flex justify-center items-center mb-10">
            <h1 className="border p-4 rounded-[20px] text-gradient font-poppins font-extrabold text-[46px] leading-[52px] md:text-[62px] md:leading-[75px]">
              Carrito de Compra
            </h1>
          </div>

          <div className=''>
            {cart.length === 0 ? (
              <p className='mt-20 font-poppins font-extrabold text-[35px] border rounded-[20px] text-center max-w-[400px] mx-auto bg-white-gradient text-black-400'>😔CARRITO VACIO😔</p>
            ) : (
              <ul>
                {cart.map((productInCart, index) => {
                  // Buscar el producto correspondiente en productsData por su id
                  const productInfo = productsData.find(product => product.id === productInCart.id);

                  if (!productInfo) {
                    console.error(`No se encontró información para el producto con id: ${productInCart.id}`);
                    return null; // Manejo de caso donde el producto no se encuentra en productsData
                  }

                  return (
                    <div className={`${styles.flexCenter} ${styles.marginY} ${styles.padding} sm:flex-row flex-col bg-black-gradient rounded-[20px] box-shadow`} key={index}>
                      <li className="flex-1 flex  flex-col">
                        <h4 className={`${styles.heading2}`}>{productInfo.title}</h4>
                        <p className={`border p-4 rounded-[20px] text-gradient mx-auto  font-poppins font-extrabold text-[46px] leading-[52px] md:text-[62px] md:leading-[75px]`}>Precio: {productInfo.precio}</p>
                      </li>
                      <div className=''>
                        <button 
                          className={`m-5 py-4 px-6 font-poppins font-medium text-[26px] text-primary bg-gold-gradient rounded-[20px] outline-none ${styles}`}
                          onClick={handleButtonClick}
                          >
                            Pagar
                        </button>
                      </div>  
                    </div>  
                  );
                })}
              </ul>
            )}
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

export default Cart;
