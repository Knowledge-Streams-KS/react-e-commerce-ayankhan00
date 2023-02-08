/** @format */
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';
import './ProductDetail.css';

const ProductDetail = () => {
	const { id } = useParams();
	const [product, setProduct] = useState([]);
	useEffect(() => {
		console.log(id);
		if (id) {
			axios
				.get(`https://fakestoreapi.com/products/${id}`)
				.then((response) => {
					const res = response.data;
					setProduct(res);
				});
		}
	});
	return (
		<div>
			<div class='product-detail-card'>
				<img src={product.image} alt='Product Image'></img>
				<h3 class='product-detail-title'>{product.title}</h3>
				<p class='product-detail-category'>{product.category}</p>
				<p class='product-detail-price'>${product.price}</p>
			</div>
		</div>
	);
};
export default ProductDetail;
