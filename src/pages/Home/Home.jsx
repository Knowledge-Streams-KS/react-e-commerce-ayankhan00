/** @format */

import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
	return (
		<div>
			<h1 className='title'>Welcome</h1>
			<br />
			<br />
			<Link to='/category'>To Category</Link>
			<br />
			<Link to='/product'>To Product</Link>
		</div>
	);
};
export default Home;
