/** @format */

import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = (props) => {
	return (
		<nav className='nav'>
			<Link to='/home' className='site-title'>
				E-Commerce Site
			</Link>
			<ul>
				<Link to='/product'>All Products</Link>
				<Link to='/Category'>Category</Link>
			</ul>
		</nav>
	);
};

export default Navbar;
