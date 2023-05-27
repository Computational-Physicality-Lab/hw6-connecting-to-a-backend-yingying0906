import "./SearchSection.css";
import React from "react";
import { Button } from "reactstrap";

import scotty_1 from "../../../../assets/images/scotty.png";
import scotty_2 from "../../../../assets/images/scotty-2.png";
import scotty_3 from "../../../../assets/images/scotty-3.png";
import scotty_4 from "../../../../assets/images/scotty-4.png";
import scotty_5 from "../../../../assets/images/scotty-5.png";
import { createApi } from "unsplash-js";

const scotties = [scotty_1, scotty_2, scotty_3, scotty_4, scotty_5];

const SearchSection = (props) => {
  const {
    searchResults,
    setSearchResults,
    setCurrentChoose,
    search,
    setSearch,
    pictureProductState,
    setPictureProductState,
    searchPage,
    setSearchPage,
  } = props.props;

  const getUnsplashData = async () => {
    const unsplash = createApi({
      accessKey: "WV2ZaL8ZzAhu2KnraViJqprlM1EEDqQBxafXNI43Wv8",
    });

    try {
      const result = await unsplash.search.getPhotos({
        query: search,
        page: searchPage,
        perPage: 10,
        orientation: "portrait",
      });

      console.log(result);
      if (result.type === "success") {
        const urls = [];

        if (result.response.results.length === 0) {
          setPictureProductState({
            ...pictureProductState,
            name: "Scotty",
          });
        } else {
          result.response.results.map((result) => urls.push(result.urls.small));
          setSearchResults((prev) => [...prev, ...urls]);
          setPictureProductState({
            ...pictureProductState,
            name: search,
          });
          setSearchPage((prev) => prev + 1);
        }
      }
    } catch (err) {
      console.log(err);
    }
  };

  const handleSubmit = async (e) => {
    if (search === "") {
      alert("Please enter something");
      setPictureProductState({
        ...pictureProductState,
        name: "Scotty",
      });
      return;
    }
    e.preventDefault();

    setSearchPage(1);
    setSearchResults([]);
    getUnsplashData();
  };

  return (
    <div className="searchSection">
      <div className="searchForm">
        <input
          type="text"
          name="searchPictures"
          id="searchPictures"
          placeholder="Search for pictures"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="form-control"
        />
        <Button type="submit" onClick={handleSubmit} color="secondary">
          Submit
        </Button>
      </div>

      {searchResults.length === 0 && (
        <h2 style={{ color: "#ac2432", fontStyle: "italic" }}>
          No search results. Maybe use a Scotty?
        </h2>
      )}

      <div className="searchImages">
        {searchResults.length === 0
          ? scotties.map((scotty, index) => (
              <Button
                id={index}
                key={index}
                onClick={() => setCurrentChoose(scotty)}
              >
                <img src={scotty} alt="scotty" />
              </Button>
            ))
          : searchResults.slice(0, 10 * searchPage).map((result, index) => (
              <Button
                id={index}
                key={index}
                onClick={() => setCurrentChoose(result)}
              >
                <img src={result} alt="scotty" />
              </Button>
            ))}
      </div>

      {searchResults.length !== 0 && (
        <Button
          style={{ margin: "5px" }}
          onClick={() => {
            getUnsplashData();
          }}
        >
          Display More
        </Button>
      )}
    </div>
  );
};

export default SearchSection;
