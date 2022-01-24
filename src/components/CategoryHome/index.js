/* eslint-disable no-unused-vars */
import React from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './category.module.css';

const CategoryHome = () => {
  const navigate = useNavigate()
  return (
    <div className="">
      <div className="category mt-5">
        <div className="nametitle"><h2>Category</h2></div>
        <div className="desc">What are you currently looking for</div>
      </div>

      <div className="imagecategory mt-3 d-flex justify-content-center">
        <div onClick={() => navigate(`/category`)} className={`${styles.mycard1} mx-3`}></div> 
        <div onClick={() => navigate(`/category`)} className={`${styles.mycard2} mx-3`}></div>
        <div onClick={() => navigate(`/category`)} className={`${styles.mycard3} mx-3`}></div>
        <div onClick={() => navigate(`/category`)} className={`${styles.mycard4} mx-3`}></div>
        <div onClick={() => navigate(`/category`)} className={`${styles.mycard5} mx-3`}></div>
      </div>
    </div>
    );
};

export default CategoryHome;
