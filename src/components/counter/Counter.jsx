/** @format */

import React from 'react';

function Counter({ count, handleIncrement, handleDecrement }) {
	return (
		<>
			<h3>ITem Count: {count}</h3>
			<div>
				<button onClick={() => handleIncrement()}>Add Item</button>
				<button onClick={() => handleDecrement()}>Remove Item</button>
			</div>
		</>
	);
}
export default Counter;
