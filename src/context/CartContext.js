import { createContext, useState, useEffect, useContext } from "react";
import { AuthUserContext } from "./AuthUserContext";

import { firestore } from "../firebase";
import {
  doc,
  addDoc,
  collection,
  updateDoc,
  deleteDoc,
  getDocs,
  onSnapshot,
  serverTimestamp,
} from "firebase/firestore";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartState, setCartState] = useState([]);
  const [totalQuantity, setTotalQuantity] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);
  const { authUser } = useContext(AuthUserContext);

  const addToCart = async (uid, productState, type) => {
    if (type === "picture") {
      const { name, id, selSize, selQty, price, img, type } = productState;
      const cartItem = {
        type: type,
        name: name,
        id: id,
        size: selSize,
        qty: selQty,
        price: price,
        img: img,
        timestamp: serverTimestamp(),
      };

      try {
        const userCartCollection = collection(firestore, "users", uid, "cart");
        await addDoc(userCartCollection, cartItem);
        console.log("add cart");
      } catch (error) {
        console.error("Error adding cart item: ", error);
      }
    } else if (type === "product") {
      const { name, id, color, selSize, selQty, price, type } = productState;
      const cartItem = {
        type: type,
        name: name,
        id: id,
        color: color,
        size: selSize,
        qty: selQty,
        price: price,
        timestamp: serverTimestamp(),
      };

      try {
        const userCartCollection = collection(firestore, "users", uid, "cart");
        await addDoc(userCartCollection, cartItem);
        console.log("add cart");
      } catch (error) {
        console.error("Error adding cart item: ", error);
      }
    }
  };

  const changeCartQuan = async (num, uid, firestoreId) => {
    try {
      const userCartCollection = doc(
        firestore,
        "users",
        uid,
        "cart",
        firestoreId
      );
      await updateDoc(userCartCollection, { qty: num });
      console.log("cart item updated");
    } catch (error) {
      console.error("Error changing qty: ", error);
    }
  };

  const removeFromCart = async (uid, firestoreId) => {
    try {
      const userCartCollection = doc(
        firestore,
        "users",
        uid,
        "cart",
        firestoreId
      );
      await deleteDoc(userCartCollection);
      console.log("cart item removed");
    } catch (error) {
      console.error("Error removing item: ", error);
    }
  };

  const removeAll = async (uid) => {
    try {
      const userCartCollection = collection(firestore, "users", uid, "cart");
      const querySnapshot = await getDocs(userCartCollection);
      querySnapshot.forEach(async (doc) => {
        await deleteDoc(doc.ref);
      });
      console.log("all cart items removed");
    } catch (error) {
      console.error("Error removing all items: ", error);
    }
  };

  useEffect(() => {
    console.log(authUser);
    if (authUser) {
      const cartCollection = collection(
        firestore,
        "users",
        authUser.uid,
        "cart"
      );

      const listenToCart = onSnapshot(cartCollection, (querySnapshot) => {
        const cartData = [];
        var totalQty = 0;
        var totalPrice = 0.0;
        querySnapshot.forEach((doc) => {
          const documentData = doc.data();
          const documentWithKey = { firestoreId: doc.id, ...documentData };
          cartData.push(documentWithKey);

          totalQty += parseInt(documentData.qty);
          totalPrice +=
            parseFloat(documentData.price.replace("$", "")) *
            parseFloat(documentData.qty);
        });

        // Use the cartData array as needed
        setCartState(cartData);
        setTotalQuantity(totalQty);
        setTotalPrice(totalPrice);
      });

      return () => listenToCart();
    } else {
      // User is not logged in, clear the cart state
      setCartState([]);
      setTotalQuantity(0);
      setTotalPrice(0);
    }
  }, [authUser, setCartState, setTotalQuantity, setTotalPrice]);

  const contextValue = {
    cartState,
    setCartState,
    totalQuantity,
    setTotalQuantity,
    totalPrice,
    setTotalPrice,
    addToCart,
    changeCartQuan,
    removeFromCart,
    removeAll,
  };

  return (
    <CartContext.Provider value={contextValue}>{children}</CartContext.Provider>
  );
};
