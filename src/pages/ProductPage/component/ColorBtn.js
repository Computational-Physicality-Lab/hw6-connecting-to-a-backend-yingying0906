import React, { useContext } from "react";
import { Button } from "reactstrap";

import { ProductContext } from "../../../context/ProductContext";

import "./ColorBtn.css";

const ColorBtn = ({ target }) => {
	const { productState, setProductState } = useContext(ProductContext);

	const handleColorBtn = (color) => {
		setProductState({ ...productState, color });
	};

	const colorButtons = Object.keys(target.colors).map((clr) => (
		<Button
			key={clr}
			id={clr}
			className="colorBtn"
			style={{ backgroundColor: clr, color: "black" }}
			onClick={(e) => handleColorBtn(e.target.id)}
		>
			{clr}
		</Button>
	));

	return (
		<div>
			Color:
			{colorButtons}
		</div>
	);
};

export default ColorBtn;
