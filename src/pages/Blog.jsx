import React from 'react'
import styles from "../style";
import { Footer, Navbar } from "../components";
import { blogData } from '../constants/blogData';
import Article from '../components/Article';


const Blog = () => {
  return (
    <div className="bg-primary w-full overflow-hidden">
    <div className={`${styles.paddingX} ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>
        <Navbar />
      </div>
    </div>

    <div className="bg-primary rounded-[20px] m-3 flex flex-col px-4" id="blog">
      <div className="w-full flex justify-center items-center mb-10">
          <h1 className="border p-4 rounded-[20px] text-gradient font-poppins font-extrabold text-[46px] leading-[52px] md:text-[62px] md:leading-[75px]">
            Nuestro Blog
          </h1>
        </div>
      <div className="bg-primary rounded-[50px] flex flex-col lg:flex-row">
        <div className="rounded-[20px] flex-1 grid grid-cols-1 gap-4 lg:grid-cols-3 sm:grid-cols-2">
          {blogData.map((article) => (
            <Article key={article.id} id={article.id} imgUrl={article.imgUrl} date={article.date} title={article.title} resume={article.resume} link={article.link}/>
          ))}
        </div>
      </div>
    </div>
    
    <div className={`bg-primary ${styles.paddingX} ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>
        <Footer />
      </div>
    </div>
  </div>
  )
}

export default Blog
