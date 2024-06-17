import React from 'react'
import styles from "../style";
import { Footer, Navbar } from "../components";
import ArticleProducts from '../components/ArticleProducts';
import { productsData } from "../constants/products";
import { menuBras ,euHome, ahorcado,tareas, huawei } from './importsPortafolio'
import ModeloBlog from '../components/ModeloBlog';

const Productos = () => {
  return (
    <div className="bg-primary w-full overflow-hidden">

    {/* ============================= NavBar =============================   */}  
    <div className={`${styles.paddingX} ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>
        <Navbar />
      </div>
    </div>


   {/* ============================= Body =============================   */}
    <div >
      <div className="w-full flex justify-center items-center">
        <h1 className="m-5  border p-3 rounded-[25px] text-gradient font-poppins font-extrabold text-[50px] leading-[52px] md:text-[60px] md:leading-[75px]">
            Tienda Eurekae:
        </h1>
      </div>
      <ModeloBlog />
    </div> 
    {/* ============================= Footer =============================   */}
    
    <div className={`bg-primary ${styles.paddingX} ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>
        <Footer />
      </div>
    </div>
  </div>
  )
}

export default Productos
