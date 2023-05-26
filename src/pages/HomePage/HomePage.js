import banner from "../../assets/images/banner.png";

import "./HomePage.css";

const Description = () => {
	return (
		<div id="desc">
			<div>
				<h4>We don't ship. We're not real.</h4>
				<p>
					We sell shirts. We are passionate about selling shirts. But
					keep in mind we have no infrastructure, supply chain, or
					mechanism to actually produce these shirts or fulfill the
					orders. But the shirts will always be real in your
					imagination.
				</p>
			</div>
			<div>
				<h4>Design your own shirt! But help us do that...</h4>
				<p>
					Not only do we not sell shirts, but we let you design your
					own! Eventually. We actually kinda need your help
					implementing that. If you could build an actual paint-style
					interface that you can make designs in that would be great
					:)
				</p>
			</div>
		</div>
	);
};
const HomePage = () => {
	return (
		<div>
			<img src={banner} alt="" id="banner" />
			<Description />
		</div>
	);
};

export default HomePage;
