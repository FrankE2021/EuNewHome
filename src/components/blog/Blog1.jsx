import React from 'react';
import Article from '../Article';
import { blog01, blog02, blog03, blog04, blog05 } from './imports';
import { art1 } from '../../pages/importsPortafolio';

const Blog1 = () => (
  <div className="bg-black-gradient-2 rounded-[50px] m-5 flex flex-col py-12 px-6" id="blog">
    <div className="w-full text-left mb-20">
      <h1 className="border p-4 rounded-[50px] text-gradient font-poppins font-extrabold text-[46px] leading-[52px] md:text-[62px] md:leading-[75px]">
        Está pasando mucho, <br /> y estamos Bloggeando acerca de ello:
      </h1>
    </div>
    <div className="bg-black-gradient rounded-[50px] flex flex-col lg:flex-row">
      <div className="rounded-[50px] bg-gray-gradient flex-[0.75] lg:mr-8 mb-8 lg:mb-0">
        <Article id={1} imgUrl={art1} date="Jun 18, 2024" title='!Somos Oficiales!' text="Eurekae es una empresa Oficial e Internacional !!!" link='/articulo/1' />
      </div>
      <div className="rounded-[20px] flex-1 grid grid-cols-1 gap-8 lg:grid-cols-2">
        <Article id={2} imgUrl={art1} date="Jun 12, 2024" text="EUREKAE, Nueva Pagina Web. Primeros Pasos, y metas inmediatas" link='/articulo/3'/>
        <Article id={3} imgUrl={blog03} date="Jun 12, 2024" text="EUREKAE, Nueva Pagina Web. Primeros Pasos, y metas inmediatas" />
        <Article id={4} imgUrl={blog04} date="Jun 12, 2024" text="EUREKAE, Nueva Pagina Web. Primeros Pasos, y metas inmediatas" />
        <Article id={5} imgUrl={blog05} date="Jun 12, 2024" text="EUREKAE, Nueva Pagina Web. Primeros Pasos, y metas inmediatas" />
      </div>
    </div>
  </div>
);

export default Blog1;
