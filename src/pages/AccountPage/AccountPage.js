import "./AccountPage.css";
import { Button } from "reactstrap";
import googleLogo from "../../assets/images/google-logo.png";

import { useState, useContext } from "react";
import { AuthUserContext } from "../../context/AuthUserContext";

import { auth, provider } from "../../firebase";
import { signInWithPopup } from "firebase/auth";

import { Spinner } from "reactstrap";

import { signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";

const handleSignIn = (setLoading, navigate) => {
  setLoading(true);
  signInWithPopup(auth, provider)
    .then((result) => {
      setLoading(false);
      //const credential = provider.credentialFromResult(result);
      //const token = credential.accessToken;
      const user = result.user;

      console.log(user);
      navigate("/");
    })
    .catch((error) => {
      setLoading(false);
      const errorMessage = error.message;
      console.log(errorMessage);
    });
};

const handleSignOut = (e) => {
  if (window.confirm("Are you sure you want to log out?")) {
    signOut(auth)
      .then(() => {
        console.log("signed out");
      })
      .catch((error) => {});
  }
};

const AccountPage = () => {
  const { authUser } = useContext(AuthUserContext);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  return (
    <div className="accountPage">
      {loading ? (
        <Spinner color="danger" />
      ) : (
        <>
          {authUser ? (
            <Button outline color="secondary" onClick={handleSignOut}>
              <span>Log out as {authUser.displayName}</span>
            </Button>
          ) : (
            <Button
              outline
              color="danger"
              onClick={() => handleSignIn(setLoading, navigate)}
            >
              <img
                src={googleLogo}
                style={{ width: "30px", marginRight: "5px" }}
                alt="Google Logo"
              />
              <span>Log In with Google</span>
            </Button>
          )}
        </>
      )}
    </div>
  );
};

export default AccountPage;
