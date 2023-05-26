import React from "react";
import {
	Dropdown,
	DropdownToggle,
	DropdownMenu,
	DropdownItem,
} from "reactstrap";

import { useContext } from "react";
import { ProductContext } from "../../../context/ProductContext";

import "./QuantityList.css";

const QuantityList = () => {
	const { productState, setProductState } = useContext(ProductContext);

	const toggleQuan = () => {
		setProductState((prevState) => ({
			...prevState,
			openQty: !prevState.openQty,
		}));
	};
	const handleQuanItem = (num) => {
		setProductState({ ...productState, selQty: parseInt(num) });
	};

	const DropMenu = () => {
		const num = [];
		for (let i = 1; i <= 20; i++) {
			num.push(
				<DropdownItem
					key={i}
					id={i}
					onClick={(e) => handleQuanItem(e.target.id)}
					style={{
						maxWidth: "150px",
					}}
				>
					{i}
				</DropdownItem>
			);
		}

		return num;
	};

	return (
		<div className="customQuanDrop">
			Quantity:
			<Dropdown
				direction="up"
				isOpen={productState.openQty}
				toggle={toggleQuan}
			>
				<DropdownToggle caret>{productState.selQty}</DropdownToggle>
				<DropdownMenu className="QuantityDrop">
					<DropMenu />
				</DropdownMenu>
			</Dropdown>
		</div>
	);
};

export default QuantityList;
