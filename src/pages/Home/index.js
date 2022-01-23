/* eslint-disable no-unused-vars */
import React, { useState, useEffect, useContext } from 'react'
import { useNavigate, Link, useSearchParams, Navigate  } from 'react-router-dom'
import axios from 'axios'
import CardProduct from "../../components/CardProduct";
import HomeCarousel from "../../components/HomeCarousel";
import MainHome from "../../components/MainHome";
import Navbar from "../../components/Navbar";
import { productContext } from '../../Context/ProductContext';

const HomePage = () => {
  // const [products, setProducts] = useState([]);
  const navigate = useNavigate()
  const {products, setProducts} = useContext(productContext)


  return (
    <div className="">
      <Navbar />
      <MainHome>
        <section>
          <HomeCarousel />
        </section>
        <section>
          <h2>New</h2>
          <p className="text-black-50">You’ve never seen it before!</p>
          <div className="card-container d-flex flex-wrap flex-fill justify-content-center">
            {
              products.map((product) => {
                return <CardProduct key={product? product.id : `id`} 
                image={product? product.image1 : `Loading`} 
                name={product? product.name: `Loading`}
                price={product? product.price : `Loading`} 
                store_name={product? product.store_name : `Loading`} 
                onClick={() => navigate(`/detail-product/${product.id}`)} />
              })
            }
          </div>
        </section>
        <section>
          <h2>Popular</h2>
          <p className="text-black-50">
            Find clothes that are trending recently
          </p>
          <div className="card-container d-flex flex-wrap justify-content-around">
            <CardProduct />
          </div>
        </section>
      </MainHome>
    </div>
  );
};

export default HomePage;
