/** @format */

import './App.css';
import Product from './pages/Products/Products';
import Category from './pages/Category/Category';
import Home from './pages/Home/Home';
import { Route, Routes, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import ProductDetail from './pages/ProductDetail/ProductDetail';
import ErrorPage from './pages/ErrorPage/ErrorPage';

function App() {
	return (
		<div className='App'>
			<Navbar />
			<Routes>
				<Route path='/home' element={<Home />} />
				<Route path='/product/:category?' element={<Product />} />
				<Route path='/category' element={<Category />} />
				<Route
					path='/product-detail/:id?'
					element={<ProductDetail />}
				/>
				<Route path='/page-not-found' element={<ErrorPage />} />

				<Route path='/' element={<Navigate to='/home' />} />
				<Route path='/*' element={<Navigate to='/page-not-found' />} />
			</Routes>
		</div>
	);
}

export default App;
