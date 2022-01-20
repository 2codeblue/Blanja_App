import React from 'react';
import styles from './cardproduct.module.css'

const CardProduct = () => {
  return (
<div className={`${styles.cardproduct} card m-2`}>
            <img src='https://images.unsplash.com/photo-1497339100210-9e87df79c218?ixlib=rb-1.2.1&q=60&fm=jpg&crop=faces%2Cedges&cs=tinysrgb&w=1200&fit=crop&auto=format&h=630&mark-w=64&mark-align=top%2Cleft&mark-pad=50&blend-mode=normal&blend-alpha=10&blend-w=1&mark=https%3A%2F%2Fimages.unsplash.com%2Fopengraph%2Flogo.png&blend=000000' className="card-img-top" alt="..."/>
                <div className="card-body">
                    <h5 className="card-title">Men's formal suit - Black & White</h5>
                    <div className="card-text text-primary fw-bold">$ 40.0</div>
                    <div className="card-text text-black-50">Zalora Cloth</div>
                    <div className="card-text">Rating</div>
                </div>
        </div>  );
};

export default CardProduct;
