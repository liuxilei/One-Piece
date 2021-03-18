import { PureComponent } from "react";
// import ReactBodymovin from "react-bodymovin";
// import animation from "./animation.json";
const json = require("./demo.json");

const bodymovinOptions = {
	loop: true,
	autoplay: true,
	prerender: true,
	animationData: animation,
};
class SvgAnimation extends PureComponent {
	render() {
		console.log(json);
		return (
			<div>111</div>
			// <ReactBodymovin options={bodymovinOptions} />
		);
	}
}

export default SvgAnimation;
