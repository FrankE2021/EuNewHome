import React from 'react';
import CajaServicios from './CajaServicios';
import { serviciosData } from '../constants/serviciosData';

const Servicios1 = () => (
  <div className="bg-black-gradient-2 rounded-[20px] m-5 flex flex-col py-12 px-6" id="servicios1">
    <div className="text-center w-full text-left mb-20">
      <h1 className="border p-4 rounded-[20px] text-gradient font-poppins font-extrabold text-[46px] leading-[52px] md:text-[62px] md:leading-[75px]">
        Nuestros Servicios:
      </h1>
    </div>
    <div className="bg-black-gradient rounded-[50px] flex flex-col lg:flex-row">
      <div className="rounded-[50px] bg-gray-gradient flex-[0.75] lg:mr-8 mb-8 lg:mb-0">
        {/* Un solo artículo*/}
        {serviciosData.map((article) => {
          if (article.id === "1") {
            return (
              <CajaServicios
                key={article.id}
                id={article.id}
                imgUrl={article.imgUrl}
                date={article.date}
                title={article.title}
                resume={article.resume}
                link={article.link}
              />
            );
          }
          return null;
        })}
      </div>
      <div className="rounded-[20px] flex-1 grid grid-cols-1 gap-8 lg:grid-cols-2">
        {/* Mapeo de los artículos restantes */}
        {serviciosData.slice(1).map((article) => (
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
);

export default Servicios1;
