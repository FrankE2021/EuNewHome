import React from 'react'
import styles from "../style";
import { Footer, Navbar } from "../components";
import { blogData } from '../components/blog/blogData';
import ArticleBlog from '../components/ArticleBlog';
import { art1 } from '../pages/importsPortafolio';

const Blog = () => {
  return (
    <div className="bg-primary w-full overflow-hidden">
    <div className={`${styles.paddingX} ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>
        <Navbar />
      </div>
    </div>

    <div className='m-10'>  
      <div className="rounded-[20px] flex-1 grid grid-cols-1 gap-8 md:grid-cols-1 lg:grid-cols-1">
        <ArticleBlog imgUrl={art1} date="Jun 18, 2024" title={blogData[0]?.title} text={blogData[0]?.description} />
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
