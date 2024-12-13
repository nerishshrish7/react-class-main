import React from "react";
import { useState, useEffect } from "react";

const UseUseEffect = () => {
	const [count, setCount] = useState(0);
	const [random, setRandom] = useState(0);
	const [date, setDate] = useState(new Date());
	const handleClick = () => {
		setCount(count + 1);
	};

	const handleRandom = () => {
		const random = Math.floor(Math.random() * 100);
		setRandom(random);
	};

	const newDate = new Date();

	useEffect(() => {
		setInterval(() => {
			setDate(newDate);
			console.log(date);
		}, 1000);
	}, []);

	return (
		<>
			<h1>{count}</h1>
			<button onClick={handleClick}>Increase</button>

			<h1>{random}</h1>
			<button onClick={handleRandom}>Generate Number</button>
		</>
	);
};

export default UseUseEffect;
