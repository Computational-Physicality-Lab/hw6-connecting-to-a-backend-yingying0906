import { Link } from "react-router-dom";
import { Nav } from "reactstrap";

import Logo from "../../assets/images/logo.png";
import CartBtn from "./component/CartBtn";

import "./HeadBar.css";

const HeadBar = () => {
	return (
		<Nav className="header">
			<Link to="/">
				<img src={Logo} alt="logo" height="100px" />
			</Link>
			<h1>Scotty Shirts U Illustrate (SSUI)</h1>
			<CartBtn />
		</Nav>
	);
};

export default HeadBar;
