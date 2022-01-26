import React from 'react';
import CardProduct from '../CardProduct';

const PopularProduct = () => {
    return (
        <div className="">
            <h2>Popular</h2>
            <p className='text-black-50'>Find clothes that are trending recently</p>
            <div className="card-container d-flex flex-wrap justify-content-around">
                <CardProduct />
            </div>
        </div>
    );
};

export default PopularProduct;
