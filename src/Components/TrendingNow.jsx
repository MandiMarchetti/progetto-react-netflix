import { Component } from "react";
import "../NavBarNetflix.css";
// import { faFacebook, faInstagram, faTwitter, faYoutube } from "@fortawesome/fontawesome-svg-core";
import { faFacebook, faInstagram, faTwitter, faYoutube } from "@fortawesome/free-solid-svg-icons";
// import { faFacebook, faInstagram, faTwitter, faYoutube } from "@fortawesome/react-fontawesome";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import HarryPotter from "../data/HarryPotter.json";
import Avengers from "../data/Avengers.json";
import StarWars from "../data/StarWars.json";

class TrendingNow extends Component {
  render() {
    return (
      <div className="container-fluid px-4 trending_div">
        <h4 className="tvshow_title">Trending Now</h4>
        <div className="row row-cols-1 row-cols-sm-2 row-cols-lg-4 row-cols-xl-6 mb-4">
          {HarryPotter.slice(0, 6).map((movies) => {
            return (
              <div className="col mb-2 text-center px-1 movie_card">
                <img className="img-fluid" src={movies.Poster} alt="movie picture" />
              </div>
            );
          })}
        </div>
        <h4 className="tvshow_title">Watch it Again</h4>
        <div className="row row-cols-1 row-cols-sm-2 row-cols-lg-4 row-cols-xl-6 mb-4">
          {Avengers.slice(0, 6).map((movies) => {
            return (
              <div className="col mb-2 text-center px-1">
                <img className="img-fluid" src={movies.Poster} alt="movie picture" />
              </div>
            );
          })}
        </div>

        <h4 className="tvshow_title">New Releases</h4>
        <div className="row row-cols-1 row-cols-sm-2 row-cols-lg-4 row-cols-xl-6 mb-4">
          {StarWars.slice(0, 6).map((movies) => {
            return (
              <div className="col mb-2 text-center px-1">
                <img className="img-fluid" src={movies.Poster} alt="movie picture" />
              </div>
            );
          })}
        </div>

        <footer>
          <div className="row justify-content-center mt-5">
            <div className="col col-6">
              <div className="row">
                <div className="col mb-2">
                  {/* <i className="bi bi-facebook footer-icon me-2"></i> */}
                  <FontAwesomeIcon icon={faFacebook} />
                  {/* <i className="bi bi-instagram footer-icon me-2"></i> */}
                  <FontAwesomeIcon icon={faInstagram} />
                  {/* <i className="bi bi-twitter-x footer-icon me-2"></i> */}
                  <FontAwesomeIcon icon={faTwitter} />
                  {/* <i className="bi bi-youtube footer-icon"></i> */}
                  <FontAwesomeIcon icon={faYoutube} />
                </div>
              </div>
              <div className="row row-cols-1 row-cols-sm-2 row-cols-md-4 row-cols-lg 4">
                <div className="col">
                  <div className="row">
                    <div className="col footer-links">
                      <p>
                        <a href="#" alt="footer link">
                          Audio and Subtitles
                        </a>
                      </p>
                      <p>
                        <a href="#" alt="footer link">
                          Media Center
                        </a>
                      </p>
                      <p>
                        <a href="#" alt="footer link">
                          Privacy
                        </a>
                      </p>
                      <p>
                        <a href="#" alt="footer link">
                          Contact us
                        </a>
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col">
                  <div className="row">
                    <div className="col footer-links">
                      <p>
                        <a href="#" alt="footer link">
                          Audio Description
                        </a>
                      </p>
                      <p>
                        <a href="#" alt="footer link">
                          Investor Relations
                        </a>
                      </p>
                      <p>
                        <a href="#" alt="footer link">
                          Legal Notices
                        </a>
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col">
                  <div className="row">
                    <div className="col footer-links">
                      <p>
                        <a href="#" alt="footer link">
                          Help Center
                        </a>
                      </p>
                      <p>
                        <a href="#" alt="footer link">
                          Jobs
                        </a>
                      </p>
                      <p>
                        <a href="#" alt="footer link">
                          Cookie Preferences
                        </a>
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col">
                  <div className="row">
                    <div className="col footer-links">
                      <p>
                        <a href="#" alt="footer link">
                          Gift Cards
                        </a>
                      </p>
                      <p>
                        <a href="#" alt="footer link">
                          Terms of Use
                        </a>
                      </p>
                      <p>
                        <a href="#" alt="footer link">
                          Corporate Information
                        </a>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col mb-2">
                  <button type="button" className="btn btn-sm footer-button rounded-0 mt-3">
                    Service Code
                  </button>
                </div>
              </div>
              <div className="row">
                <div className="col mb-2 mt-2 copyright">© 1997-2023 Netflix, Inc.</div>
              </div>
            </div>
          </div>
        </footer>
      </div>
    );
  }
}

export default TrendingNow;
