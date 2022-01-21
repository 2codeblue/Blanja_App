import React from 'react';
import CardProduct from '../../components/CardProduct';
import HomeCarousel from '../../components/HomeCarousel';
import MainHome from '../../components/MainHome';
import Navbar from '../../components/Navbar';

const HomePage = () => {
  return (
      <div className="">
          <Navbar/>
          <MainHome>
              <section>
                <HomeCarousel/>  
              </section>
              <section>
                  <h2>New</h2>
                  <p className='text-black-50'>You’ve never seen it before!</p>
                  <div className="card-container d-flex flex-wrap flex-fill justify-content-center">
                    <CardProduct/>
                    <CardProduct/>
                    <CardProduct/>
                    <CardProduct/>
                    <CardProduct/>
                    <CardProduct/>
                    <CardProduct/>
                  </div>
              </section>
              <section>
                  <h2>Popular</h2>
                  <p className='text-black-50'>Find clothes that are trending recently</p>
                  <div className="card-container d-flex flex-wrap justify-content-around">
                    <CardProduct/>
                  </div>
              </section>
          </MainHome>
      </div>
  );
};

export default HomePage;
