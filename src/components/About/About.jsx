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
		this.gsap_anim();
	}

	gsap_anim() {
		gsap.registerPlugin(ScrollTrigger);
		const boxes = gsap.utils.toArray(".item");
		const footer = gsap.utils.toArray("#about-footer");
		boxes.concat(footer).forEach((elem) => {
			let myDuration = 2.5;
			elem.id === "about-footer" ? (myDuration = 3.0) : (myDuration = 2.5);

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
		const repo_url = "https://github.com/mich2k/SV";
		return (
			<div className="about-main">
				<Navbar></Navbar>

				<section>
					<div className="item float-text-left">
						<h1>Sorting, Visualized.</h1>
						<span style={{ fontSize: "1.7rem", marginLeft: "40px" }}>
							born as a university project, in &quot;University of Modena e Reggio Emilia&quot;
						</span>
						<br></br>
					</div>
					<i
						style={{ textAlign: "center", marginTop: "25px", marginLeft: "50px" }}
						className="item huge angle double down icon"></i>
				</section>
				<section>
					<div className="item float-text-left">
						<h1>Techologies used</h1>
						<div className="tech-wrapper">
							<a href="https://www.react.com" target="_blank" rel="noopener noreferrer">
								<img
									src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9Ii0xMS41IC0xMC4yMzE3NCAyMyAyMC40NjM0OCI+CiAgPHRpdGxlPlJlYWN0IExvZ288L3RpdGxlPgogIDxjaXJjbGUgY3g9IjAiIGN5PSIwIiByPSIyLjA1IiBmaWxsPSIjNjFkYWZiIi8+CiAgPGcgc3Ryb2tlPSIjNjFkYWZiIiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9Im5vbmUiPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0iNC4yIi8+CiAgICA8ZWxsaXBzZSByeD0iMTEiIHJ5PSI0LjIiIHRyYW5zZm9ybT0icm90YXRlKDYwKSIvPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0iNC4yIiB0cmFuc2Zvcm09InJvdGF0ZSgxMjApIi8+CiAgPC9nPgo8L3N2Zz4K"
									alt="react logo"
									height="100"
								/>{" "}
							</a>
							<a href="https://www.sass-lang.com" target="_blank" rel="noopener noreferrer">
								<img
									alt="Sass Logo Color.svg"
									src="//upload.wikimedia.org/wikipedia/commons/thumb/9/96/Sass_Logo_Color.svg/121px-Sass_Logo_Color.svg.png"
									decoding="async"
									width="121"
									height="91"
									srcSet="//upload.wikimedia.org/wikipedia/commons/thumb/9/96/Sass_Logo_Color.svg/182px-Sass_Logo_Color.svg.png 1.5x, //upload.wikimedia.org/wikipedia/commons/thumb/9/96/Sass_Logo_Color.svg/242px-Sass_Logo_Color.svg.png 2x"
									data-file-width="512"
									data-file-height="384"
								/>
							</a>
							<a href="https://www.eslint.org" target="_blank" rel="noopener noreferrer">
								<img src="https://eslint.org/icon-512.png" alt="eslint logo" height="100" />{" "}
							</a>
							<a
								href="https://www.w3.org/Style/CSS/Overview.en.html"
								target="_blank"
								rel="noopener noreferrer">
								<img
									src="https://seeklogo.com/images/C/css-3-logo-023C1A7171-seeklogo.com.png"
									alt="css3 logo"
									height="100"
								/>{" "}
							</a>
							<a href="https://yarnpkg.com/" target="_blank" rel="noopener noreferrer">
								<img
									src="https://iconape.com/wp-content/files/ub/352181/png/yarn-logo.png
								"
									alt="yarn logo"
									height="100"
								/>{" "}
							</a>
							<a href="https://greensock.com/gsap/" target="_blank" rel="noopener noreferrer">
								<img
									src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/16327/logo-man.svg
								"
									alt="gsap logo"
									height="100"
								/>{" "}
							</a>
						</div>
					</div>
				</section>
				<section>
					<div className="item">
						<h1>FOSS software, on</h1>
						<a href={repo_url} target="_blank" rel="noopener noreferrer">
							<img
								src="https://logos-world.net/wp-content/uploads/2020/11/GitHub-Emblem.png"
								alt="github banner"
								width="300px"
							/>{" "}
						</a>
					</div>
				</section>
				<div id="about-footer">
					<AppFooter></AppFooter>
				</div>
			</div>
		);
	}
}

export default About;
