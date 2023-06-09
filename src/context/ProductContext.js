import { useState, createContext } from "react";

export const ProductContext = createContext();

export const ProductProvider = ({ children }) => {
  const [productState, setProductState] = useState({
    type: "product",
    side: null,
    color: null,
    openQty: false,
    selQty: null,
    openSize: false,
    selSize: null,
    canAddCart: false,
    name: null,
    price: null,
    id: null,
    img: null,
  });

  return (
    <ProductContext.Provider value={{ productState, setProductState }}>
      {children}
    </ProductContext.Provider>
  );
};
