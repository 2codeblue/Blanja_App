import React, { useState, useEffect, useContext } from 'react'
import { useNavigate, Link, useSearchParams, Navigate  } from 'react-router-dom'
import axios from 'axios'
import CardProduct from "../../components/CardProduct";
import HomeCarousel from "../../components/HomeCarousel";
import MainHome from "../../components/MainHome";
import Navbar from "../../components/Navbar";

const HomePage = () => {
  const [products, setProducts] = useState([]);
  const navigate = useNavigate()
  useEffect(() => {
    axios({
      baseURL : `https://blanja-app-2codeblue.herokuapp.com/`,
      method : 'GET',
      url : `/products`
    })
    .then((res) => {
      const result = res.data.data
      setProducts(result)
    })
    .catch((err) => {
      console.log(err.message)
    })
  }, []);

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
                return <CardProduct key={product.id} image={product.image1} name={product.name}
                price={product.price} store_name={product.store_name} onClick={() => navigate(`/detail-product/${product.id}`)} />
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
