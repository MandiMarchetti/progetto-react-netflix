import Avengers from "../data/Avengers.json";
import React, { useState } from "react";

const WatchItAgainFunction = () => {
  const [isSelected3, setIsSelected3] = useState(false);

  const handleDivClick3 = () => {
    setIsSelected3(!isSelected3);
  };

  return (
    <div className={`container-fluid card_div ${isSelected3 ? "selected" : ""}`} onClick={handleDivClick3}>
      <div className="unique_card_div">
        <div className="tvshow_title_div">
          <h4 className="tvshow_title">Watch it Again</h4>
        </div>
        <div className="row row-cols-1 row-cols-sm-2 row-cols-lg-4 row-cols-xl-6 mb-4 trending_div">
          {Avengers.slice(0, 6).map((movies) => {
            return (
              <div className="col mb-2 text-center px-1 movie_card" key={movies.id}>
                <img className="img-fluid" src={movies.Poster} alt="movie_picture" />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default WatchItAgainFunction;
