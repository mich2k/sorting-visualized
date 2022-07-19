import React from "react";
import { Component } from "react";
import Navbar from "../BaseNavBar";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "../../css/About/About.scss";
import AppFooter from "../AppFooter/AppFooter";
class About extends Component {
	state = {};

	componentDidMount() {
		this.test();
	}

	test() {
		gsap.registerPlugin(ScrollTrigger);
		const boxes = gsap.utils.toArray(".box");
		const footer = gsap.utils.toArray("#about-footer");
		boxes.concat(footer).forEach((elem) => {
			let myDuration = 2.5;
			elem.id === "about-footer" ? (myDuration = 5.0) : (myDuration = 2.5);

			//console.log(myDuration);

			const anim = gsap.fromTo(
				elem,
				{ autoAlpha: 0, y: 50 },
				{ duration: myDuration, autoAlpha: 1, y: 0 }
			);

			ScrollTrigger.create({
				trigger: elem,
				animation: anim,
				toggleActions: "play none none none",
				once: true
			});
		});
	}

	render() {
		return (
			<div className="about-main">
				<Navbar></Navbar>

				<section>
					{" "}
					<h2>Scroll down</h2>
				</section>
				<section>
					<div className="box">Box</div>
				</section>
				<section>
					<div className="box">Box</div>
				</section>
				<section>
					<div className="box">Box</div>
				</section>
				<section>
					<div className="box">Box</div>
				</section>
				<div id="about-footer">
					<AppFooter></AppFooter>
				</div>
			</div>
		);
	}
}

export default About;
