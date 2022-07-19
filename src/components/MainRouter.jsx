import React from "react";

import Landing from "./Landing/Landing";
import Home from "./Home/Home";
import { Routes, Route } from "react-router-dom";
import About from "./About/About";
import Explainer from "./Explainer/Explainer";

const MainRouter = () => {
	return (
		<div className="Main">
			<Routes>
				{" "}
				<Route exact path="/" element={<Landing></Landing>}></Route>
				<Route exact path="landing" element={<Landing></Landing>}></Route>
				<Route exact path="menu" element={<Home></Home>}></Route>
				<Route exact path="about" element={<About></About>}></Route>
				<Route exact path="explainer" element={<Explainer></Explainer>}></Route>
			</Routes>
		</div>
	);
};

export default MainRouter;
