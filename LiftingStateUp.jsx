import React from "react";

const LiftingStateUp = (props) => {
	const handleClick = (e) => {
		e.preventDefault();
		props.myClick("This is coming from child component");
	};
	return (
		<>
			<button onClick={handleClick}>Click Me</button>
		</>
	);
};

export default LiftingStateUp;
