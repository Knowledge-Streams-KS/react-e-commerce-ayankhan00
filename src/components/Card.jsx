/** @format */

import React from 'react';
import './Card.css';

function Card({ title, price, image }) {
	return (
		<div className='card'>
			<img className='image' src={image} />
			<h1>{title}</h1>
			<p>{price}</p>
		</div>
	);
}

export default Card;
