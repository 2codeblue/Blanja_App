import React from 'react';
import CategoryContent from '../../components/CategoryContent';
import MainHome from '../../components/MainHome';
import Navbar from '../../components/Navbar';

const CategoryPage = () => {
  return (
     <div className="">
         <Navbar/>
         <MainHome>
            <section>
            <CategoryContent/>
            </section>
         </MainHome>
     </div>
    );
};

export default CategoryPage;
