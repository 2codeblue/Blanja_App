/* eslint-disable no-unused-vars */
import axios from 'axios';
import React, {useEffect, useState} from 'react';
import CardProduct from '../CardProduct';

const CategoryContent = () => {
  const [category, setCategory] = useState({
    id : '',
    name : ''
  })
  useEffect (() => {
    axios.get(`${process.env.REACT_APP_API_URL}products/category`)
    .then((res) => {
      const result = res.data.data
      console.log(result)
    })
    .catch((err) => {

    })
  },[])
  return (
      <div className="m-5">
          <div className="title-page m-5">
            <div className="cateogry-nav text-black-50">{`Home > categoty > category : T-Shirt`}</div>
            <div className="categiry-title mt-5"><h2>Category : T-Shirt</h2></div>
          </div>
          <div className="card-container d-flex flex-wrap justify-content-around">
              <CardProduct/>
          </div>
      </div>
    );
};

export default CategoryContent;
