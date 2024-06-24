import React from 'react'
import styles from "../style";
import { Footer, Navbar } from "../components";

import CajaServicios from '../components/CajaServicios';
import { serviciosData } from '../constants/serviciosData';

const Servicios = () => {


  const [primerArticulo, ...articulosRestantes] = serviciosData;
  
  return (
    <div className="bg-primary w-full overflow-hidden">
    <div className={`${styles.paddingX} ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>
        <Navbar />
      </div>
    </div>

    {/* ======================================= Body =============================== */}
    <div className="bg-primary rounded-[20px] m-5 flex flex-col py-12 px-6" id="servicios1">
      <div className="w-full flex justify-center items-center mb-10">
        <h1 className="border p-4 rounded-[20px] text-gradient font-poppins font-extrabold text-[46px] leading-[52px] md:text-[62px] md:leading-[75px]">
          Nuestros Servicios
        </h1>
      </div>
      <div className="bg-primary rounded-[50px] flex flex-col lg:flex-row">
        <div className="rounded-[50px] bg-gray-gradient flex-[0.75] lg:mr-8 mb-8 lg:mb-0">
          {/* Renderizamos el primer artículo */}
          <CajaServicios
            key={primerArticulo.id}
            id={primerArticulo.id}
            imgUrl={primerArticulo.imgUrl}
            date={primerArticulo.date}
            title={primerArticulo.title}
            resume={primerArticulo.resume}
            link={primerArticulo.link}
          />
        </div>
        <div className="rounded-[20px] flex-1 grid grid-cols-1 gap-8 lg:grid-cols-2">
          {/* Mapeamos y renderizamos los artículos restantes */}
          {articulosRestantes.map((article) => (
            <CajaServicios
              key={article.id}
              id={article.id}
              imgUrl={article.imgUrl}
              date={article.date}
              title={article.title}
              resume={article.resume}
              link={article.link}
            />
          ))}
        </div>
      </div>
    </div>   
    
    {/* ======================================= Footer =============================== */}
    <div className={`bg-primary ${styles.paddingX} ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>
        <Footer />
      </div>
    </div>
  </div>
  )
}

export default Servicios
