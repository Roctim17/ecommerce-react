import React from 'react';
import './Card.css'

const Card = ({ card }) => {
    let total = 0;
    let tax = 0;
    let shipping = 0

    for (const product of card) {
        total = total + product.price;
        shipping = shipping + product.shipping;

    };
    tax = total * .10
    const grantTotal = total + tax + shipping;

    return (
        <div className='card'>
            <h1>This is cards</h1>
            <h1>select item:{card.length} </h1>
            <h3>Total Price: $ {total} </h3>
            <h3>Tax: $ {tax}   </h3>
            <h3>Shipping: $ {shipping}</h3>
            <h3>Total: $ {grantTotal}</h3>
        </div>
    );
};

export default Card;