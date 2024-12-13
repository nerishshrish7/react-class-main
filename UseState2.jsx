import React, { useState } from "react";

const UseState2 = () => {
	const [data, setData] = useState(false);
	const handleButton = () => {
		if (data === true) setData(false);
		else setData(true);
	};
	return (
		<>
			<button onMouseOver={handleButton}>Show/Hide</button>
			{data ? <h1>Its Pratik!</h1> : ""}
		</>
	);
};

export default UseState2;
