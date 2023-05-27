import { useState, createContext } from "react";

export const PictureProductContext = createContext();

export const PictureProductProvider = ({ children }) => {
  const [pictureProductState, setPictureProductState] = useState({
    type: "picture",
    openQty: false,
    selQty: 1,
    openSize: false,
    selSize: "Size",
    canAddCart: false,
    name: "Scotty",
    price: "$20.00",
    id: null,
    img: null,
  });

  // search result
  const [searchResults, setSearchResults] = useState([]);
  const [searchResultsName, setSearchResultsName] = useState("");
  const [currentChoose, setCurrentChoose] = useState(null);
  const [searchPage, setSearchPage] = useState(1);

  return (
    <PictureProductContext.Provider
      value={{
        pictureProductState,
        setPictureProductState,
        searchResults,
        setSearchResults,
        currentChoose,
        setCurrentChoose,
        searchPage,
        setSearchPage,
        searchResultsName,
        setSearchResultsName,
      }}
    >
      {children}
    </PictureProductContext.Provider>
  );
};

export default PictureProductProvider;
