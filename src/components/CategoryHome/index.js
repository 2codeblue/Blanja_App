/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
// import axios from 'axios';
// import { useNavigate } from 'react-router-dom';

const CategoryHome = () => {
  // const navigate = useNavigate()
  // axios.get(`${process.env.REACT_APP_API_URL}products/category`)
  // .then((res) => {
  //   const result = res.data.data
  // })
  // .catch((err) => {
  //   console.log(err.message);
  // })
  return (
      <div className="mt-5"><h2>Category</h2>
        <h3>Shoes</h3>
        <h3>Pants</h3>
      </div>
  );
};

export default CategoryHome;
