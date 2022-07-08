import React, { useEffect, useState } from 'react';
import Card from '../Card/Card';
import Product from '../Product/Product';
import './Shop.css'

const Shop = () => {
    const [products, SetProducts] = useState([]);
    const [card, setCard] = useState([]);

    useEffect(() => {
        fetch('products.json')
            .then(res => res.json())
            .then(data => SetProducts(data))
    }, []);

    const handelAddToCard = (product) => {
        console.log(product);
        const newCard = [...card, product];
        setCard(newCard);
    }
    return (
        <div className='shop'>
            <div className="Product-container">
                {
                    products.map(product =>
                        <Product key={product.id}
                            product={product}
                            handelAddToCard={handelAddToCard}
                        ></Product>)
                }


            </div>
            <div className="card-container">
                <h1>Order Summary</h1>
                <h3>Selected item : {card.length}</h3>
                <Card card={card}></Card>
            </div>
        </div>
    );
};

export default Shop;