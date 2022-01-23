import React from 'react';
import styles from './cardproduct.module.css';


const CardProduct = ({onClick, image, name, price, store_name}) => {
    return (
        <div className={`${styles.cardproduct} card m-2`} onClick={onClick}>
            <img src={image ? image : `https://i.pinimg.com/originals/10/b2/f6/10b2f6d95195994fca386842dae53bb2.png`} 
            className="card-img-top" alt="..."/>
                <div className="card-body">
                    <h5 className="card-title">{name ? name : `Product Name`}</h5>
                    <div className="card-text text-primary fw-bold">$ {price ? price : `Product Price`}</div>
                    <div className="card-text text-black-50">{store_name ? store_name : `Store Name`}</div>
                    <div className="card-text">Rating</div>
                </div>
        </div>
    );
};

export default CardProduct;
