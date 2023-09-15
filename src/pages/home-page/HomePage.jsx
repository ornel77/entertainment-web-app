import React from "react";
import SearchBar from "../../components/searchbar/SearchBar";
import Trending from "./Trending";
import Recommended from "./Recommended";

const HomePage = () => {
  return (
    <>
      <SearchBar />
      <Trending />
      <Recommended />
    </>
  );
};

export default HomePage;
