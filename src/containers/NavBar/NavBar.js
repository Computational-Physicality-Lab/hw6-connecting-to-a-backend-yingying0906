import { Link } from "react-router-dom";
import { Nav } from "reactstrap";

import "./NavBar.css";

import { useContext } from "react";
import { AuthUserContext } from "../../context/AuthUserContext";

const NavBar = (props) => {
  const { authUser } = useContext(AuthUserContext);

  return (
    <div>
      <Nav className="nava">
        <Link to="/t-shirts">T-SHIRTS</Link>
        <Link to="/not-found">HOODIES</Link>
        <Link to="/not-found">CREATE YOUR OWN</Link>
        <Link to="/not-found">ABOUT US</Link>

        <Link to="/account">
          {authUser ? (
            <>
              <img
                className="userProfileImage"
                src={authUser.photoURL}
                alt="User Profile"
                referrerPolicy="no-referrer"
              />
              <span style={{ margin: "0px 5px", padding: 0, border: 0 }}>
                {authUser.displayName}
              </span>
            </>
          ) : (
            "Log in"
          )}
        </Link>
      </Nav>
    </div>
  );
};

export default NavBar;
