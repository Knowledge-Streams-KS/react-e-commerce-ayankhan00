/** @format */
import { useEffect, useState } from 'react';
import React from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const Category = () => {
	const [category, setCategory] = useState([]);

	useEffect(() => {
		axios
			.get('https://fakestoreapi.com/products/categories')
			.then((res) => {
				const d = res.data;
				setCategory(d);
			});
	}, []);
	return (
		<div>
			<h1 className='title'>Category</h1>
			<br />
			{category.map((p, index) => (
				<div key={index}>
					<Link to={`/product/${p}`} key={index}>
						{p}
					</Link>
				</div>
			))}
		</div>
	);
};

export default Category;
