import { Button } from "reactstrap";
import { useContext } from "react";
import { CartContext } from "../../../../context/CartContext";
import { AuthUserContext } from "../../../../context/AuthUserContext";

import "./RemoveItemBtn.css";

const RemoveItemBtn = (props) => {
  const { removeFromCart } = useContext(CartContext);
  const { authUser } = useContext(AuthUserContext);
  return (
    <div className="redButton">
      <Button
        onClick={() => {
          removeFromCart(authUser.uid, props.firestoreId);
        }}
      >
        Remove
      </Button>
    </div>
  );
};

export default RemoveItemBtn;
