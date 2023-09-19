import Trending from "./Trending";
import Recommended from "./Recommended";

import './HomePage.scss'

import { useSelector } from "react-redux";

const HomePage = () => {
  const result = useSelector((state) => state.inputResult)
  return (
    <div className="homepage">
      <p> {result} </p>
      <Trending />
      <Recommended />
    </div>
  );
};

export default HomePage;
