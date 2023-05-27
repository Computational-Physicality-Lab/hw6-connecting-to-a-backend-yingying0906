import { Link } from "react-router-dom";

import QuantityDrop from "./QuantityDrop";
import RemoveItemBtn from "./RemoveItemBtn";
import shirtArr from "../../../../shared/shirts";
import notFoundImg from "../../../../assets/images/not-found.png";

import "./CartItem.css";

const CartItem = (props) => {
  const { types } = props;
  if (types === "product") {
    const { name, color, size, qty, price, id, firestoreId } = props.data;
    const imgSrc = shirtArr[id].colors[color].front;
    return (
      <div className="CartItem-Container">
        <h2>{name}</h2>
        <div className="Cart-RightDiv">
          <Link to={`/product/${shirtArr[id].name}/${id}`}>
            {imgSrc === undefined ? (
              <img src={notFoundImg} alt="" />
            ) : (
              <img src={imgSrc} alt="" />
            )}
          </Link>

          <div>
            <div>
              <span>Quantity: </span>
              <QuantityDrop q={qty} firestoreId={firestoreId} />
            </div>
            <div>
              <span>Color: </span>
              <span>{color}</span>
            </div>
            <div>
              <span>Size: </span>
              <span>{size}</span>
            </div>
            <div>
              <span>Price(each): </span>
              <span>{price}</span>
            </div>

            <RemoveItemBtn firestoreId={firestoreId} />
          </div>
        </div>
      </div>
    );
  } else {
    const { name, size, qty, price, firestoreId, img } = props.data;

    return (
      <div className="CartItem-Container">
        <h2>{name}</h2>
        <div className="Cart-RightDiv">
          <Link
            style={{ backgroundColor: "rgb(238, 238, 238)" }}
            to="/create-from-picture"
          >
            {img === undefined ? (
              <img src={notFoundImg} alt="" style={{ width: "235px" }} />
            ) : (
              <img src={img} alt="" />
            )}
          </Link>

          <div>
            <div>
              <span>Quantity: </span>
              <QuantityDrop q={qty} firestoreId={firestoreId} />
            </div>
            <div>
              <span>Size: </span>
              <span>{size}</span>
            </div>
            <div>
              <span>Price(each): </span>
              <span>{price}</span>
            </div>

            <RemoveItemBtn firestoreId={firestoreId} />
          </div>
        </div>
      </div>
    );
  }
};

export default CartItem;
