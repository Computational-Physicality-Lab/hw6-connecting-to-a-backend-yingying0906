import {
	Card,
	CardImg,
	CardBody,
	CardTitle,
	CardSubtitle,
	Button,
} from "reactstrap";

import { Link } from "react-router-dom";

import notFoundImg from "../../../assets/images/not-found.png";
import "./BuildCard.css";

const BuildCard = (props) => {
	return (
		<Card className="card">
			<Link to={`/product/${props.name}/${props.id}`}>
				{props.colors === undefined ? (
					<CardImg top width="100%" src={notFoundImg} alt="" />
				) : (
					<CardImg top width="100%" src={props.colors} alt="" />
				)}
			</Link>

			<CardBody>
				<CardTitle tag="h4">{props.name}</CardTitle>
				<CardSubtitle tag="h6" className="mb-2 text-muted">
					Available in {props.colorNum} colors
				</CardSubtitle>
				<div style={{ display: "flex", justifyContent: "center" }}>
					<Link to={`/product/${props.name}/${props.id}`}>
						<Button>See Page</Button>
					</Link>
				</div>
			</CardBody>
		</Card>
	);
};

export default BuildCard;
