import { useContext } from "react";
import { CartContext } from "../../../context/CartContext";

import CartItem from "./component/CartItem";

import "./MyCart.css";

const CartRender = (prop) => {
  const { cartState } = useContext(CartContext);

  const sortedCart = cartState
    .slice(0)
    .sort((a, b) => b.timestamp - a.timestamp);

  const CartArr = sortedCart.map((item, index) => {
    return <CartItem key={index} data={item} types={item.type} />;
  });

  return CartArr;
};
const MyCart = (props) => {
  const { totalQuantity } = useContext(CartContext);
  return (
    <div className="Cart-Container">
      {totalQuantity ? <CartRender /> : <h3>Your Cart is Empty</h3>}
    </div>
  );
};

export default MyCart;
