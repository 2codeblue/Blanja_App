import React from 'react';
import CardProduct from '../CardProduct';

const NewProduct = () => {
    return (
        <div>
            <h2>New</h2>
            <p className='text-black-50'>You’ve never seen it before!</p>
            <div className="card-container d-flex flex-wrap justify-content-around">
                <CardProduct />
            </div>
        </div>
    );
};

export default NewProduct;
