//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";
import NavBar from "./component/NavBar";
import Jumbotron from "./component/Jumbotron";
import Card1 from "./component/Card1";

//include bootstrap npm library into the bundle
import "bootstrap";

//include your index.scss file into the bundle
import "../styles/index.scss";

//import your own components
import Home from "./component/home.jsx";

//render your react application
ReactDOM.render(
	<>
		<NavBar /> <Jumbotron /> <Card1 />
	</>,
	document.querySelector("#app")
);
