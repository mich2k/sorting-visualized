import React from "react";
import "../css/LandingFooter.css";
function Footer() {
	return (
		<div>
			<div id="footer-style">
				<div className="ui inverted vertical footer segment">
					<div className="ui container filling">
						<div className="ui stackable inverted divided equal height stackable grid">
							<div className="three wide column">
								<h3 className="ui inverted header">Useful Links</h3>
								<div className="ui inverted link list">
									<a href="www.google.it" className="item">
										University of Modena and Reggio Emilia
									</a>
									<a href="www.google.it" className="item">
										Lorem
									</a>
									<a href="www.google.it" className="item">
										Lorem
									</a>
								</div>
							</div>
							<div className="three wide column">
								<h3 className="ui inverted header">Ref.</h3>
								<div className="ui inverted link list">
									<a href="www.google.it" className="item">
										Prof. Bicocchi Nicola
									</a>
									<a href="https://www.gmichele.it" className="item">
										Stud. Giarletta Michele
									</a>
									<span className="item">&copy;{new Date().getFullYear()}</span>
								</div>
							</div>
							<div className="seven wide column">
								<h3 className="ui inverted header">
									<p>
										<b>
											<br></br>
											<br></br>
											<span id="footer-1">Made </span>
											<span id="footer-2">with </span>
											<span style={{ color: "#e25555" }}>&hearts;</span>
											<span id="footer-3"> in Italy.</span>
										</b>
									</p>
								</h3>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Footer;
