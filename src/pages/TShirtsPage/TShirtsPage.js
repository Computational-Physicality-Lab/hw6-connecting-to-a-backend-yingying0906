import React from "react";
import BuildCard from "./component/BuildCard";

import shirtArr from "../../shared/shirts";

import "./TShirtsPage.css";

const getColorLink = (obj) => {
	let colorName;
	let colorlink;

	for (let i = 0; i < Object.keys(obj.colors).length; i++) {
		colorName = Object.keys(obj.colors)[i];
		colorlink = obj.colors[colorName].front;

		if (colorlink !== undefined) {
			break;
		}
	}
	return colorlink;
};
const getColorNum = (obj) => {
	return Object.keys(obj.colors).length;
};

const tShirtsPage = () => {
	return (
		<div className="TPage">
			<h2>Our T-Shirts</h2>
			<div className="Tflex">
				{shirtArr.map((shirt, index) => (
					<BuildCard
						key={index}
						id={index}
						name={shirt.name}
						desc={shirt.description}
						price={shirt.price}
						colors={getColorLink(shirt)}
						colorNum={getColorNum(shirt)}
					/>
				))}
			</div>
		</div>
	);
};

export default tShirtsPage;
