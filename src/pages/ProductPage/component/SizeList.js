import React from "react";
import {
	Dropdown,
	DropdownToggle,
	DropdownMenu,
	DropdownItem,
} from "reactstrap";
import "./SizeList.css";
import { useContext } from "react";
import { ProductContext } from "../../../context/ProductContext";

const allSize = [
	"Size",
	"Women's XS",
	"Women's S",
	"Women's M",
	"Women's L",
	"Women's XL",
	"Women's 2XL",
	"Men's XS",
	"Men's S",
	"Men's M",
	"Men's L",
	"Men's XL",
	"Men's 2XL",
];

const SizeList = () => {
	const { productState, setProductState } = useContext(ProductContext);
	const toggleSize = () => {
		setProductState((prevState) => ({
			...prevState,
			openSize: !prevState.openSize,
		}));
	};

	const handleSizeItem = (num) => {
		if (parseInt(num) !== 0) {
			setProductState({
				...productState,
				selSize: allSize[num],
				canAddCart: true,
			});
		} else {
			setProductState({
				...productState,
				canAddCart: false,
			});
		}
	};

	const DropMenu = () => {
		return allSize.map((s, idx) => (
			<DropdownItem
				key={s}
				id={idx}
				onClick={(e) => handleSizeItem(e.target.id)}
				style={{
					maxWidth: "150px",
				}}
			>
				{s}
			</DropdownItem>
		));
	};

	return (
		<div className="customSizeDrop">
			Size:
			<Dropdown
				direction="up"
				isOpen={productState.openSize}
				toggle={toggleSize}
			>
				<DropdownToggle caret>{productState.selSize}</DropdownToggle>
				<DropdownMenu className="QuantityDrop">
					<DropMenu />
				</DropdownMenu>
			</Dropdown>
		</div>
	);
};

export default SizeList;
