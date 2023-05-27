import "./CreateFromPicturePage.css";
import { useState, useContext } from "react";
import { PictureProductContext } from "../../context/PictureProductContext";
import ProductSection from "./component/ProductSection/ProductSection";
import SearchSection from "./component/SearchSection/SearchSection";

const CreateFromPicturePage = () => {
  const [search, setSearch] = useState("");

  const {
    pictureProductState,
    setPictureProductState,
    searchResults,
    setSearchResults,
    currentChoose,
    setCurrentChoose,
    searchPage,
    setSearchPage,
  } = useContext(PictureProductContext);

  const propsSend = {
    searchResults,
    setSearchResults,
    currentChoose,
    setCurrentChoose,
    search,
    setSearch,
    pictureProductState,
    setPictureProductState,
    searchPage,
    setSearchPage,
  };
  return (
    <div className="CreateFromPicturePage">
      <ProductSection props={propsSend} />
      <SearchSection props={propsSend} />
    </div>
  );
};

export default CreateFromPicturePage;
