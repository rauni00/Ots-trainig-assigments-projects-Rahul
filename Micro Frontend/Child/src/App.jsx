import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Loader from "./Components/Loader";

const App = () => (
	<div className="container">
		<Loader />
	</div>
);
ReactDOM.render(<App />, document.getElementById("app"));
