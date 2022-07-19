import React from "react";
import "../../css/Landing/Landing.css";
import { Link } from "react-router-dom";
import NavLanding from "./NavLanding";
import Footer from "../LandingFooter";
import "../../css/Landing/Landing.css";
import Typewriter from "typewriter-effect";
class Landing extends React.Component {
	state = {};
	logo_src = "https://upload.wikimedia.org/wikipedia/commons/4/42/Logo-unimore.png";

	render() {
		return (
			<div id="landing-main">
				<NavLanding></NavLanding>
				<div id="landing-no-nav segment">
					{/*<img
            src="https://unioneingegneri.com/wp-content/uploads/2017/12/4421-750x450.jpg"
            alt=""
            id="bg-dief-img"
		/> */}
					<div className="ui three column centered grid">
						<div className="row">
							<div id="landing-header">
								<Typewriter
									id="landing-header"
									options={{
										autoStart: true,
										loop: true,
										wrapperClassName: "typing-effect-header",
										cursorClassName: "typing-effect-cursor"
									}}
									onInit={(typewriter) => {
										let delete_speed = 40;
										let typing_speed = 70;
										typewriter
											.changeDelay(typing_speed)
											.deleteAll(delete_speed)
											.typeString("Sorting,")
											.pauseFor(1500)
											.typeString(" Visualized.")
											.pauseFor(1500)
											.deleteAll(delete_speed)
											.typeString("Learn.")
											.pauseFor(1000)
											.deleteAll(delete_speed)
											.typeString("Visualize.")
											.pauseFor(1000)
											.deleteAll(delete_speed)
											.start();
									}}
								/>{" "}
							</div>
						</div>
						<div className="row">
							<Link to="/menu">
								<div id="enter-button-landing" className="huge ui animated button" tabIndex="0">
									<div className="visible content">ENTER</div>
									<div className="hidden content">
										<i className="right arrow icon"></i>
									</div>
								</div>
							</Link>
						</div>

						<div className="row">
							<div id="unimore-logo">
								<img src={this.logo_src} alt="unimore_logo" width="70%" />
							</div>
						</div>
					</div>
				</div>
				<Footer></Footer>
			</div>
		);
	}
}

export default Landing;

/*
								<Typical
									steps={[
										'Sorting,',
										1750,
										'Sorting, Visualized.',
										500,
										'Learn.',
										200,
										'Visualize.',
										200,
										'Sorting,',
										1750,
										'Sorting, Visualized.'
									]}
									wrapper="h1"
								/>
								*/
