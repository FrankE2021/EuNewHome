import React from 'react';
import Article from '../Article';
import { blogData } from './blogData'; // Asegúrate de importar los datos del blog correctamente

const Blog1 = () => (
  <div className="bg-black-gradient-2 rounded-[50px] m-5 flex flex-col py-12 px-6" id="blog">
    <div className="w-full text-left mb-20">
      <h1 className="border p-4 rounded-[50px] text-gradient font-poppins font-extrabold text-[46px] leading-[52px] md:text-[62px] md:leading-[75px]">
        Está pasando mucho, <br /> y estamos Bloggeando acerca de ello:
      </h1>
    </div>
    <div className="bg-black-gradient rounded-[50px] flex flex-col lg:flex-row">
      <div className="rounded-[50px] bg-gray-gradient flex-[0.75] lg:mr-8 mb-8 lg:mb-0">
        {/* Ejemplo de un solo artículo, podrías cambiarlo según tu diseño */}
        {blogData.map((article) => {
          if (article.id === "1") {
            return (
              <Article
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
        {blogData.slice(1).map((article) => (
          <Article
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

export default Blog1;
