import { Link } from "react-router-dom";
import { Nav, NavItem } from "reactstrap";

import "./Footer.css";

const Footer = () => {
	return (
		<div>
			<Nav className="foot">
				<NavItem>
					<Link to="/not-found">Contact Us</Link>
				</NavItem>
				<NavItem>
					<Link to="/not-found">Site Map</Link>
				</NavItem>
				<NavItem>
					<Link to="/not-found">Privacy Policy</Link>
				</NavItem>
				<NavItem>
					<Link to="/not-found">Careers</Link>
				</NavItem>
				<NavItem>
					<Link to="/not-found">Reviews</Link>
				</NavItem>

				<span>Designed by Po Ying Law</span>
			</Nav>
		</div>
	);
};

export default Footer;
