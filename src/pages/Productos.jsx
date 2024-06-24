import React from 'react'
import styles from "../style";
import { Footer, Navbar } from "../components";
import ArticleProducts from '../components/ArticleProducts';
import { productsData } from '../constants/productsData';

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
            Tienda Eurekae
        </h1>
      </div>
        
      <div className="bg-primary w-full overflow-hidden">
        <div className="bg-primary rounded-[50px] m-2 flex flex-col py-12 px-6" id="ModeloBlog">
          <div className="bg-primary rounded-[25px] flex flex-col lg:flex-row">
            <div className="rounded-[20px] flex-1 grid grid-cols-1 gap-4 sm:grid-cols-3 md:grid-cols-4">
              {productsData.map((product, index) => (
                <ArticleProducts 
                  key={product.id} 
                  id={product.id} 
                  imgUrl={product.imgUrl} 
                  date={product.date} 
                  title={product.title} 
                  text={product.description} 
                  link={product.link} 
                  handleButtonClick={(link) => handleButtonClick(link)} />
              ))}
            </div>
          </div>
        </div>
      </div>
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
