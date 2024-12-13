import "./App.css";
import LiftingStateUp from "./Component/LiftingStateUp";
import Props from "./Component/Props";
import PropsDestructure from "./Component/PropsDestructre";
import { useState } from "react";
import UseState from "./Component/UseState";
import UseState2 from "./Component/UseState2";
import UseUseEffect from "./Component/UseUseEffect";

const App = () => {
	// const [data, setData] = useState("I am parent, and default");

	// const myClick = (data) => {
	// 	setData(data);
	// };
	return (
		<>
			{/* <h1>Hello</h1> */}

			{/* <PropsDestructure title="hellfdsjkao" name="prateek" number="5485" /> */}

			{/* <Props title="hello" name="prateek" number="69" /> */}
			{/* <h1>{data}</h1> */}

			{/* <LiftingStateUp myClick={myClick} /> */}

			{/* <UseState /> */}
			{/* <UseState2 /> */}
			<UseUseEffect />
		</>
	);
};

export default App;
