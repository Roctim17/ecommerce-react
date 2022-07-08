
import React from 'react';
import './Product.css'

const Product = (props) => {
    const { product, handelAddToCard } = props;
    const { name, img, seller, price, ratings, stock, } = product;
    return (
        <div className='single-product'>
            <img src={img} alt="" />
            <h5>{name}</h5>
            <h6>{seller}</h6>
            <h3>Price : ${price}</h3>
            <h3>Rating : {ratings} out of 5</h3>
            <h3>stock:{stock}</h3>
            <button onClick={() => handelAddToCard(product)} className='btn-card'>Add to Card

            </button>
        </div>
    );
};

export default Product;