import "./SearchSection.css";
import React from "react";
import { Button } from "reactstrap";
import { Spinner } from "reactstrap";

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
    setPictureProductState,
    searchPage,
    setSearchPage,
    searchResultsName,
    setSearchResultsName,
  } = props.props;

  const [loading, setLoading] = React.useState(false);

  const getUnsplashData = async () => {
    setLoading(true);
    setSearchResultsName(search);
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
          setSearchResultsName("");
        } else {
          result.response.results.map((result) => urls.push(result.urls.small));
          setSearchResults((prev) => [...prev, ...urls]);
          setSearchPage((prev) => prev + 1);
        }
      }
      setLoading(false);
    } catch (err) {
      console.log(err);
      setLoading(false);
    }
  };

  const handleSubmit = async (e) => {
    if (search === "") {
      alert("Please enter something");
      return;
    }
    e.preventDefault();

    setSearchPage(1);
    setSearchResults([]);
    getUnsplashData();
  };

  // scroll
  const scrollableRef = React.useRef(null);

  React.useEffect(() => {
    scrollToBottom();
  });

  const scrollToBottom = () => {
    if (scrollableRef.current) {
      const scrollableElement = scrollableRef.current;
      scrollableElement.scrollTop = scrollableElement.scrollHeight;
    }
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
          Search
        </Button>
      </div>

      {searchResults.length === 0 && (
        <h2 style={{ color: "#ac2432", fontStyle: "italic" }}>
          No search results. Maybe use a Scotty?
        </h2>
      )}

      <div className="searchImages" ref={scrollableRef}>
        {loading ? (
          <Spinner color="danger" />
        ) : searchResults.length === 0 ? (
          scotties.map((scotty, index) => (
            <Button
              id={index}
              key={index}
              onClick={() => {
                setCurrentChoose(scotty);
                setPictureProductState((prev) => ({
                  ...prev,
                  name: "Scotty",
                }));
              }}
            >
              <img src={scotty} alt="scotty" />
            </Button>
          ))
        ) : (
          searchResults.slice(0, 10 * searchPage).map((result, index) => (
            <Button
              id={index}
              key={index}
              onClick={() => {
                setCurrentChoose(result);
                setPictureProductState((prev) => ({
                  ...prev,
                  name: searchResultsName,
                }));
              }}
            >
              <img src={result} alt="scotty" />
            </Button>
          ))
        )}
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
