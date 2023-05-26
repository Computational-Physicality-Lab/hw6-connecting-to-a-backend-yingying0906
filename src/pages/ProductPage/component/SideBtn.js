import React from "react";
import { Button } from "reactstrap";
import { useContext } from "react";

import { ProductContext } from "../../../context/ProductContext";

import "./SideBtn.css";

const SideBtn = () => {
	const { productState, setProductState } = useContext(ProductContext);
	const handleSideBtn = (side) => {
		setProductState({ ...productState, side: side });
	};

	return (
		<div className="redButton">
			Side:
			<Button
				id="front"
				style={{ margin: "3px 5px" }}
				onClick={(e) => handleSideBtn(e.target.id)}
			>
				Front
			</Button>
			<Button
				id="back"
				style={{ margin: "3px 5px" }}
				onClick={(e) => handleSideBtn(e.target.id)}
			>
				Back
			</Button>
		</div>
	);
};

export default SideBtn;
