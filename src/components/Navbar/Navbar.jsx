/** @format */

import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import './Navbar.css';

const Navbar = (props) => {
	return (
		<div>
			<nav className='nav'>
				<Link to='/home' className='site-title'>
					E-Commerce Site
				</Link>
				<ul>
					<Link to='/product'>All Products</Link>
					<Link to='/Category'>Category</Link>
				</ul>
			</nav>
			<Outlet />
		</div>
	);
};

export default Navbar;
