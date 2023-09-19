import React from "react";
import IconTV from "../../assets/icon-category-tv.svg";
import IconMovie from "../../assets/icon-category-movie.svg";
import Dot from "../../assets/dot.svg";

import "./TrendingCard.scss";

const TrendingCard = ({ trending }) => {
  return (
    <article className="trend-card-container">
      <img
        src={trending.thumbnail?.trending?.large}
        alt=""
        className="thumbnail"
      />
      <div className="bookmark-icon">
        <svg width="12" height="14" xmlns="http://www.w3.org/2000/svg">
          <path
            d="m10.518.75.399 12.214-5.084-4.24-4.535 4.426L.75 1.036l9.768-.285Z"
            stroke="#FFF"
            stroke-width="1.5"
            fill="none"
          />
        </svg>
      </div>
      <div className="details">
        <div className="row-details">
          <span className="year"> {trending.year} </span>
          <img src={Dot} alt="" />{" "}
          <div className="category">
            <img
              src={trending.category === "Movie" ? IconMovie : IconTV}
              alt=""
            />
            <span> {trending.category === "Movie" ? "Movie" : "TV Series"} </span>
          </div>
          <img src={Dot} alt="" />
          <span className="rating"> {trending.rating}</span>
        </div>
        <h2 className="title"> {trending.title} </h2>
      </div>
    </article>
  );
};

export default TrendingCard;
