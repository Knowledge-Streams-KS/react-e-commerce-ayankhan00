/** @format */

import React from 'react';
import axios from 'axios';
import { useEffect, useState } from 'react';
import Card from '../components/Card';

function Product() {
	const [product, setProduct] = useState([]);
	const [input, setInput] = useState([]);
	const [data, setData] = useState([]);

	useEffect(() => {
		axios.get('https://fakestoreapi.com/products').then((res) => {
			const prod = res.data;
			setProduct(prod);
			setData(prod);
		});
		console.log(product);
	}, []);

	const handleChange = (e) => {
		// const inp = e.target.value;
		setInput(e.target.value);
		// console.log(input);
		const s = product.filter((prod) => {
			return prod.title.toLowerCase().includes(input.toLowerCase());
		});
		setData(s);
		console.log(s);
	};
	return (
		<>
			{console.log(product)}

			<div className='center'>
				<div id='add-task' className='add-task'>
					<input
						type='text'
						placeholder='Task to be done...'
						value={input}
						onChange={handleChange}
					/>
					<button id='push'>Add</button>
				</div>
				<div className='property-card'>
					{data.map((p, index) => (
						<Card
							key={index}
							id={p.id}
							title={p.title}
							price={p.price}
							image={p.image}
						/>
					))}
				</div>
			</div>
		</>
	);
}

export default Product;
