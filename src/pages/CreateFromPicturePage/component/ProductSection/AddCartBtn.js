import { useContext } from "react";
import { Button } from "reactstrap";
import { Link } from "react-router-dom";
import { CartContext } from "../../../../context/CartContext";
import { PictureProductContext } from "../../../../context/PictureProductContext";

import { AuthUserContext } from "../../../../context/AuthUserContext";

const AddCartBtn = () => {
  const { pictureProductState, currentChoose } = useContext(
    PictureProductContext
  );
  const { addToCart } = useContext(CartContext);
  const { authUser } = useContext(AuthUserContext);

  return (
    <div className="redButton">
      <Button
        disabled={
          !pictureProductState.canAddCart ||
          pictureProductState.price === "" ||
          pictureProductState.price === null ||
          authUser === null ||
          currentChoose === null
        }
        onClick={(e) => {
          addToCart(authUser.uid, pictureProductState, "picture");
        }}
      >
        <Link
          className="addToCartLink"
          style={{ textDecoration: "none", color: "white" }}
          to="/cart"
        >
          Add To Cart
        </Link>
      </Button>
    </div>
  );
};

export default AddCartBtn;
