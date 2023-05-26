import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { AuthUserContext } from "../../context/AuthUserContext";

import MyCart from "./MyCart/MyCart";
import OrderSummary from "./OrderSummary/OrderSummary";

import { Button } from "reactstrap";
import "./CartPage.css";

const CartPage = () => {
  const { totalQuantity, removeAll } = useContext(CartContext);
  const { authUser } = useContext(AuthUserContext);

  return (
    <div className="Cart-Page">
      <div className="redButton">
        <h1 className="Cart-title">
          My Cart ({totalQuantity})
          <Button
            className="remove-all"
            onClick={() => {
              removeAll(authUser.uid);
            }}
            disabled={totalQuantity === 0}
          >
            Remove All
          </Button>
        </h1>
      </div>
      <div className="Cart-Content">
        <MyCart />
        <OrderSummary />
      </div>
    </div>
  );
};

export default CartPage;
