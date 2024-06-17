import React from 'react'
import styles from "../style";
import { Footer, Navbar } from "../components";
import ArticleProducts from '../components/ArticleProducts';
import { productsData } from "../constants/products";
import { menuBras ,euHome, ahorcado,tareas, huawei, lbpaulo } from '../pages/importsPortafolio'

const ModeloBlog = () => {
  return (
    <div className="bg-primary w-full overflow-hidden">
        <div className="bg-black-gradient-2 rounded-[50px] m-5 flex flex-col py-12 px-6" id="ModeloBlog">
            <div className="bg-black-gradient rounded-[25px] flex flex-col lg:flex-row">
            <div className="rounded-[20px] flex-1 grid grid-cols-1 gap-8 lg:grid-cols-2">
                <ArticleProducts imgUrl={huawei} date="Nov 12, 2023" title={productsData[0]?.title} text={productsData[0]?.description} link={productsData[0]?.link} handleButtonClick={(link) => handleButtonClick(link)} />
                <ArticleProducts imgUrl={lbpaulo} date="Dec 12, 2023" title={productsData[1]?.title} text={productsData[1]?.description} link={productsData[1]?.link} handleButtonClick={(link) => handleButtonClick(link)} />
                <ArticleProducts imgUrl={huawei} date="Jun 20, 2024" title={productsData[0]?.title} text={productsData[0]?.description} link={productsData[0]?.link} handleButtonClick={(link) => handleButtonClick(link)} />
                <ArticleProducts imgUrl={huawei} date="Jun 20, 2024" title={productsData[0]?.title} text={productsData[0]?.description} link={productsData[0]?.link} handleButtonClick={(link) => handleButtonClick(link)} />
            </div>
            <div className="rounded-[50px] mt-5 bg-gray-gradient flex-[0.75] lg:ml-8 lg:mb-0 lg:mt-0">
                <ArticleProducts imgUrl={huawei} date="Jun 12, 2024" text="EUREKAE, Nueva Pagina Web. Primeros Pasos, y metas inmediatas" />
            </div>
            </div>
        </div>
    </div>
  )
}

export default ModeloBlog
