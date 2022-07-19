import React from "react";
import "../../css/Landing/NavLanding.css";
import { Link } from "react-router-dom";
class NavLanding extends React.Component {
	state = {};
	render() {
		return (
			<div id="nav-landing-main">
				<div className="massive ui menu">
					<Link to="/">
						{" "}
						<div className="header item">Sorting, Visualized.</div>
					</Link>
					<a
						href="https://www.ingmo.unimore.it/site/home/didattica/lauree/ingegneria-informatica.html"
						className="header item">
						{" "}
						Computer Science Engineering
					</a>
					<a href="https://www.ingmo.unimore.it/site/home.html" className="header item">
						{" "}
						University of Modena and Reggio Emilia
					</a>
				</div>
			</div>
		);
	}
}

export default NavLanding;
