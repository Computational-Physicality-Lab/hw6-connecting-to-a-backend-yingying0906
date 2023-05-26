import { Link } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../../../context/CartContext";

import CartLogo from "../../../assets/images/cart.png";
import "./CartBtn.css";
const CartBtn = () => {
	const { totalQuantity } = useContext(CartContext);
	return (
		<Link to="/cart" id="cart">
			<img src={CartLogo} alt="cartlogo" height={"50px"} />
			<span> {totalQuantity} </span>
		</Link>
	);
};

export default CartBtn;
