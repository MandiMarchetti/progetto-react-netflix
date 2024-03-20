import { Component } from "react";
import "../NavBarNetflix.css";

import HarryPotter from "../data/HarryPotter.json";
import Avengers from "../data/Avengers.json";
import StarWars from "../data/StarWars.json";

class TrendingNow extends Component {
  render() {
    return (
      <div className="container-fluid card_div">
        <div className="unique_card_div">
          <div className="tvshow_title_div">
            <h4 className="tvshow_title">Trending Now</h4>
          </div>
          <div className="row row-cols-1 row-cols-sm-2 row-cols-lg-4 row-cols-xl-6 mb-4 trending_div">
            {HarryPotter.slice(0, 6).map((movies) => {
              return (
                <div className="col mb-2 text-center movie_card">
                  <img className="img-fluid" src={movies.Poster} alt="movie_picture" />
                </div>
              );
            })}
          </div>
        </div>
        <div className="unique_card_div">
          <div className="tvshow_title_div">
            <h4 className="tvshow_title">Watch it Again</h4>
          </div>
          <div className="row row-cols-1 row-cols-sm-2 row-cols-lg-4 row-cols-xl-6 mb-4 trending_div">
            {Avengers.slice(0, 6).map((movies) => {
              return (
                <div className="col mb-2 text-center px-1 movie_card">
                  <img className="img-fluid" src={movies.Poster} alt="movie_picture" />
                </div>
              );
            })}
          </div>
        </div>
        <div className="unique_card_div">
          <div className="tvshow_title_div">
            <h4 className="tvshow_title">New Releases</h4>
          </div>
          <div className="row row-cols-1 row-cols-sm-2 row-cols-lg-4 row-cols-xl-6 mb-4 trending_div">
            {StarWars.slice(0, 6).map((movies) => {
              return (
                <div className="col mb-2 text-center px-1 movie_card">
                  <img className="img-fluid" src={movies.Poster} alt="movie_picture" />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    );
  }
}

export default TrendingNow;
