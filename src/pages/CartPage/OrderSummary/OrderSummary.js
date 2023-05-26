import { useContext } from "react";
import { CartContext } from "../../../context/CartContext";
import { AuthUserContext } from "../../../context/AuthUserContext";
import { Button } from "reactstrap";
import { Link } from "react-router-dom";

import "./OrderSummary.css";

const OrderSummary = () => {
  const { cartState, totalPrice } = useContext(CartContext);
  const { authUser } = useContext(AuthUserContext);

  const SubTotal = () => {
    return (
      <div className="orderSumSeperate">
        <h6>Subtotal:</h6>
        <h6>${totalPrice.toFixed(2)}</h6>
      </div>
    );
  };

  const EstShipping = () => {
    return (
      <div className="orderSumSeperate">
        <h6>Est.Shipping</h6>
        <h6>{cartState.length ? "$6.95" : "$0.00"}</h6>
      </div>
    );
  };

  const Total = (props) => {
    var shipping = props.state.length ? 6.95 : 0;
    return (
      <div className="orderSumSeperate">
        <h6
          style={{
            fontSize: "1.3em",
            borderTop: "solid 2px transparent",
          }}
        >
          Total:{" "}
        </h6>

        <h6
          style={{
            fontSize: "1.3em",
            borderTop: "solid 2px #ac2432",
          }}
        >
          ${(props.total + shipping).toFixed(2)}
        </h6>
      </div>
    );
  };

  const SignNcheck = () => {
    return (
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
        }}
        className="redButton"
      >
        <Link to="/account">
          <Button>Sign in and Checkout</Button>
        </Link>
      </div>
    );
  };

  const ContinueShop = () => {
    return (
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
        }}
        className="redButton"
      >
        <Link to="/t-shirts">
          <Button>Continue Shopping</Button>
        </Link>
      </div>
    );
  };

  return (
    <div>
      <div className="Order-Container">
        <h4>Order Summary</h4>
        <div>
          <SubTotal total={totalPrice} />
          <EstShipping state={cartState} />
          <Total state={cartState} total={totalPrice} />
          {!authUser && <SignNcheck />}
        </div>
      </div>
      <ContinueShop />
    </div>
  );
};
export default OrderSummary;
