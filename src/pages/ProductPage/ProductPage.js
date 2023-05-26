import "./ProductPage.css";
import { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";

/* components */
import shirtArr from "../../shared/shirts";
import SizeList from "./component/SizeList";
import QuantityList from "./component/QuantityList";
import SideBtn from "./component/SideBtn";
import ColorBtn from "./component/ColorBtn";
import AddCartBtn from "./component/AddCartBtn";
import notFoundImg from "../../assets/images/not-found.png";

import { ProductContext } from "../../context/ProductContext";

const ProductPage = () => {
	const { name, id } = useParams();
	const target = shirtArr[id];
	var firstClr;
	var firstSide;

	for (let i = 0; i < Object.keys(target.colors).length; i++) {
		firstClr = Object.keys(target.colors)[i];
		firstSide = Object.keys(target.colors[firstClr])[0];
		if (firstSide !== undefined) {
			break;
		}
	}

	const { productState, setProductState } = useContext(ProductContext);

	useEffect(() => {
		setProductState((prevState) => ({
			...prevState,
			side: firstSide,
			color: firstClr,
			name: name,
			selQty: 1,
			selSize: "Size",
			canAddCart: false,
			price: target.price,
			id: id,
		}));

		return () => {
			setProductState((prevState) => ({
				...prevState,
				side: null,
				color: null,
				name: null,
				selQty: null,
				selSize: null,
				canAddCart: null,
				price: null,
				id: null,
			}));
		};
	}, [firstClr, firstSide, name, setProductState, target.price, id]);

	return (
		<div className="ProductPage">
			{productState.color !== null &&
			productState.side !== null &&
			productState.name !== null &&
			productState.selQty !== null &&
			productState.selSize !== null ? (
				<div>
					<h1>{target.name}</h1>
					<div className="ProductPage-Container">
						{target.colors[productState.color][
							productState.side
						] === undefined ? (
							<img src={notFoundImg} alt="" />
						) : (
							<img
								src={
									target.colors[productState.color][
										productState.side
									]
								}
								alt=""
							/>
						)}
						<div className="ProductPage-rightDiv">
							{target.price === "" ||
							target.price === null ||
							target.price === undefined ? (
								<h2>Sold Out</h2>
							) : (
								<h2>{target.price}</h2>
							)}

							<p>{target.description}</p>

							<SideBtn />
							<ColorBtn target={target} />
							<QuantityList />
							<SizeList />
							<AddCartBtn />
						</div>
					</div>
				</div>
			) : (
				<div>Loading</div>
			)}
		</div>
	);
};

export default ProductPage;
