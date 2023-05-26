import { useState, useContext } from "react";
import {
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from "reactstrap";

import { CartContext } from "../../../../context/CartContext";
import { AuthUserContext } from "../../../../context/AuthUserContext";

import "./QuantityDrop.css";

const QuantityDrop = ({ firestoreId, q }) => {
  const { changeCartQuan } = useContext(CartContext);

  const { authUser } = useContext(AuthUserContext);

  /* render quantity choices*/
  const num = [];
  for (let i = 1; i <= 20; i++) {
    num.push(
      <DropdownItem
        key={i}
        id={i}
        style={{ maxWidth: "150px" }}
        onClick={(e) => changeCartQuan(e.target.id, authUser.uid, firestoreId)}
      >
        {i}
      </DropdownItem>
    );
  }

  /* dropdown */
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const toggle = () => setDropdownOpen((prevState) => !prevState);

  return (
    <span>
      <Dropdown
        direction="up"
        isOpen={dropdownOpen}
        toggle={toggle}
        className="customQuanDrop"
      >
        <DropdownToggle caret>{q}</DropdownToggle>
        <DropdownMenu className="QuantityDrop">{num}</DropdownMenu>
      </Dropdown>
    </span>
  );
};

export default QuantityDrop;
