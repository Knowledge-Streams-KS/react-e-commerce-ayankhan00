/** @format */

import React from 'react';
import axios from 'axios';
import { useEffect, useState } from 'react';
import Card from '../../components/Card/Card';
import './Products.css';
import { useParams } from 'react-router-dom';

function Product() {
	let { category } = useParams();
	const [product, setProduct] = useState([]);
	const [input, setInput] = useState([]);
	const [data, setData] = useState([]);

	useEffect(() => {
		console.log(category);
		if (category) {
			axios
				.get(`https://fakestoreapi.com/products/category/${category}`)
				.then((res) => {
					const prod = res.data;
					setProduct(prod);
					setData(prod);
					console.log(category);
				});
		} else {
			axios.get('https://fakestoreapi.com/products').then((res) => {
				const prod = res.data;
				setProduct(prod);
				setData(prod);
			});
		}
	}, []);

	const handleChange = (e) => {
		setInput(e.target.value);
		const s = product.filter((prod) => {
			return prod.title
				.toLowerCase()
				.includes(e.target.value.toLowerCase());
		});
		setData(s);
		console.log(s);
	};
	const handleSort = () => {
		const sortedData = [...product].sort((a, b) => {
			if (a.title < b.title) {
				return -1;
			}
			if (a.title > b.title) {
				return 1;
			}
			return 0;
		});
		console.log(sortedData);
		setData(sortedData);
		setProduct(sortedData);
	};
	return (
		<>
			<h1 className='title'>Product List</h1>
			<div className='center'>
				<div id='add-task' className='add-task'>
					<input
						type='text'
						placeholder='Search...'
						value={input}
						onChange={handleChange}
					/>
					<button onClick={handleSort}>Sort by name</button>
				</div>
				<div className='property-card'>
					{data.map((p, index) => (
						<Card
							key={index}
							id={p.id}
							title={p.title}
							price={p.price}
							image={p.image}
							category={p.category}
						/>
					))}
				</div>
			</div>
		</>
	);
}

export default Product;
