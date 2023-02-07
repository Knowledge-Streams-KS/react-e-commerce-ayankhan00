/** @format */

import React from 'react';
import './Card.css';

function Card({ title, price, image, category }) {
	return (
		<div className='card'>
			<img src={image} alt='product image' />
			<h4 className='product-name'>{title}</h4>
			<p className='product-category'>{category}</p>
			<p className='product-price'>{price}</p>
		</div>

		// <img className='image' src={image} />
		// <h1>{title}</h1>
		// <p>{price}</p>
		// </div>
	);
}

export default Card;
