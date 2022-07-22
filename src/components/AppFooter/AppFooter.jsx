import React from "react";
import "../../css/AppFooter.css";
import unimoreLogo from "../../res/unimore.png";

function Footer() {
	return (
		<div className="app-footer">
			<div id="footer-style">
				<div className="ui vertical inverted footer segment">
					<div className="ui container filling">
						<div className="ui stackable divided equal height stackable grid">
							<div className="three wide column">
								<h3 className="ui header">Powered By</h3>
								<img src={unimoreLogo} alt="unimore-logo" id="unimore-banner" />
							</div>
							<div className="three wide column">
								<h3 className="ui header"></h3>
								<span> Designed and Managed by Michele Giarletta and Nicola Bicocchi</span>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Footer;
