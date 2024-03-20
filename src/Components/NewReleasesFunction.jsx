import StarWars from "../data/StarWars.json";
import React, { useState } from "react";

const NewReleasesFunction = () => {
  const [isSelected2, setIsSelected2] = useState(false);

  const handleDivClick2 = () => {
    setIsSelected2(!isSelected2);
  };

  return (
    <div className={`container-fluid card_div ${isSelected2 ? "selected" : ""}`} onClick={handleDivClick2}>
      <div className="unique_card_div">
        <div className="tvshow_title_div">
          <h4 className="tvshow_title">New Releases</h4>
        </div>
        <div className="row row-cols-1 row-cols-sm-2 row-cols-lg-4 row-cols-xl-6 mb-4 trending_div">
          {StarWars.slice(0, 6).map((movies) => {
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

export default NewReleasesFunction;
