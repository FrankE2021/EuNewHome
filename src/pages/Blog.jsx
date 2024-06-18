import React from 'react'
import styles from "../style";
import { Footer, Navbar } from "../components";
import Blog1 from '../components/blog/Blog1';
import { blogData } from '../components/blog/blogData';


const Blog = () => {
  return (
    <div className="bg-primary w-full overflow-hidden">
    <div className={`${styles.paddingX} ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>
        <Navbar />
      </div>
    </div>

    <div>
      <Blog1/>
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
