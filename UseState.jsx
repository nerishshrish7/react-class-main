import React, { useState } from "react";

const UseState = () => {
	const [data, setData] = useState(0);
	const [data2, setData2] = useState(5);
	const [count, setCount] = useState(1);

	const handleButton = () => {
		const random = Math.floor(Math.random() * 100);
		setData(random);
	};

	const table = () => {
		setData2(data2 + 5);
		setCount(count + 1);
	};
	return (
		<div>
			{/* <h1>{data}</h1>
			<button onClick={handleButton}>Change</button> */}

			<h1>
				5 x {count} = {data2}
			</h1>
			<button onClick={table}>Table of 5</button>
		</div>
	);
};

export default UseState;
