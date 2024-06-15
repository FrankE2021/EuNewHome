import React from 'react'
import styles from "../style";
import { Footer, Navbar } from "../components";
import Article from '../components/Article';
import { productsData } from "../constants/products";
import { menuBras ,euHome, ahorcado,tareas, huawei } from './importsPortafolio'

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
   <div className='ml-4 mr-4 '>  
      <div className="rounded-[20px] flex-1 grid grid-cols-1 gap-8 md:grid-cols-3 lg:grid-cols-4">
        <Article 
          imgUrl={huawei}
          date="Jun 20, 2024" 
          title={productsData[0]?.title} 
          text={productsData[0]?.description} 
          link={productsData[0]?.link} 
          handleButtonClick={(link) => handleButtonClick(link)} />

        <Article 
          imgUrl={euHome} 
          date="Dec 12, 2022" 
          title={productsData[1]?.title} 
          text={productsData[1]?.description} 
          link={productsData[1]?.link} 
          handleButtonClick={(link) => handleButtonClick(link)} 
        />

        <Article 
          imgUrl={ahorcado} 
          date="Mar 10, 2024"
          title={productsData[2]?.title}  
          text={productsData[2]?.description}
          link={productsData[2]?.link}
          handleButtonClick={(link) => handleButtonClick(link)} 
          />

        <Article 
          imgUrl={tareas} 
          date="May 15, 2024" 
          title={productsData[3]?.title}
          text={productsData[3]?.description}
          link={productsData[3]?.link}
          handleButtonClick={(link) => handleButtonClick(link)} 
          />
        <Article 
          imgUrl={tareas} 
          date="May 15, 2024" 
          title={productsData[3]?.title}
          text={productsData[3]?.description}
          link={productsData[3]?.link}
          handleButtonClick={(link) => handleButtonClick(link)} 
          />
        <Article 
          imgUrl={tareas} 
          date="May 15, 2024" 
          title={productsData[3]?.title}
          text={productsData[3]?.description}
          link={productsData[3]?.link}
          handleButtonClick={(link) => handleButtonClick(link)} 
          />
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
