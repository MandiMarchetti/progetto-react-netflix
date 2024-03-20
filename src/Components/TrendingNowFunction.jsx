import HarryPotter from "../data/HarryPotter.json";
import React, { useState } from "react";

const TrendingNowFunction = () => {
  const [isSelected, setIsSelected] = useState(false);

  const handleDivClick = () => {
    setIsSelected(!isSelected);
  };

  return (
    <div className={`container-fluid card_div ${isSelected ? "selected" : ""}`} onClick={handleDivClick}>
      <div className="unique_card_div">
        <div className="tvshow_title_div">
          <h4 className="tvshow_title">Trending Now</h4>
        </div>
        <div className="row row-cols-1 row-cols-sm-2 row-cols-lg-4 row-cols-xl-6 mb-4 trending_div">
          {HarryPotter.slice(0, 6).map((movies) => {
            return (
              <div className="col mb-2 text-center movie_card" key={movies.id}>
                <img className="img-fluid" src={movies.Poster} alt="movie_picture" />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default TrendingNowFunction;
