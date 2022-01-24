/* eslint-disable no-unused-vars */
import React, {useContext, useEffect, useState} from 'react';
import { useNavigate } from 'react-router-dom';
import { productContext } from '../../Context/ProductContext';
import CardProduct from '../CardProduct';

const CategoryContent = () => {
  const {products, setProducts} = useContext(productContext)
  const navigate = useNavigate()
  return (
      <div className="m-5">
          <div className="title-page m-5">
            <div className="cateogry-nav text-black-50">{`Home > categoty > category : T-Shirt`}</div>
            <div className="categiry-title mt-5"><h2>Category</h2></div>
          </div>
          <div className="card-container d-flex flex-wrap justify-content-around">
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
      </div>
    );
};

export default CategoryContent;
