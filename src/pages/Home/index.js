import React from 'react';
import MainHome from '../../components/MainHome';
import Navbar from '../../components/Navbar';
import NewProduct from '../../components/NewProduct';
import PopularProduct from '../../components/PopularProduct';
import TopCarousel from '../../components/TopCarousel';

const HomePage = () => {
  return (
      <div className="">
          <Navbar/>
          <MainHome>
              <section>
                <TopCarousel/>
              </section>
              <section>
                  <NewProduct/>
              </section>
              <section>
                  <PopularProduct/>
              </section>
          </MainHome>
      </div>
  );
};

export default HomePage;
