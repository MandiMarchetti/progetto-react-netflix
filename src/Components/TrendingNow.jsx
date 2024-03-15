import { Component } from "react";
import "../NavBarNetflix.css";
import { faFacebook, faInstagram, faTwitter, faYoutube } from "@fortawesome/free-solid-svg-icons";

import capivara1 from "../asses/1.png";
import capivara2 from "../asses/2.png";
import capivara3 from "../asses/3.png";
import capivara4 from "../asses/4.png";
import capivara5 from "../asses/5.png";
import capivara6 from "../asses/6.png";
import capivara7 from "../asses/7.png";
import capivara8 from "../asses/8.png";
import capivara9 from "../asses/9.png";
import capivara10 from "../asses/10.png";
import capivara11 from "../asses/11.png";
import capivara12 from "../asses/12.png";
import capivara13 from "../asses/13.png";
import capivara14 from "../asses/14.png";
import capivara15 from "../asses/15.png";
import capivara16 from "../asses/16.png";
import capivara17 from "../asses/17.png";
import capivara18 from "../asses/18.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

class TrendingNow extends Component {
  render() {
    return (
      <div className="container-fluid px-4 trending_div">
        <h4 className="tvshow_title">Trending Now</h4>
        <div className="row row-cols-1 row-cols-sm-2 row-cols-lg-4 row-cols-xl-6 mb-4">
          <div className="col mb-2 text-center px-1">
            <img className="img-fluid" src={capivara1} alt="movie picture" />
          </div>
          <div className="col mb-2 text-center px-1">
            <img className="img-fluid" src={capivara2} alt="movie picture" />
          </div>
          <div className="col mb-2 text-center px-1">
            <img className="img-fluid" src={capivara3} alt="movie picture" />
          </div>
          <div className="col mb-2 text-center px-1">
            <img className="img-fluid" src={capivara4} alt="movie picture" />
          </div>
          <div className="col mb-2 text-center px-1">
            <img className="img-fluid" src={capivara5} alt="movie picture" />
          </div>
          <div className="col mb-2 text-center px-1">
            <img className="img-fluid" src={capivara6} alt="movie picture" />
          </div>
        </div>
        <h4 className="tvshow_title">Watch it Again</h4>
        <div className="row row-cols-1 row-cols-sm-2 row-cols-lg-4 row-cols-xl-6 mb-4">
          <div className="col mb-2 text-center px-1">
            <img className="img-fluid" src={capivara7} alt="movie picture" />
          </div>
          <div className="col mb-2 text-center px-1">
            <img className="img-fluid" src={capivara8} alt="movie picture" />
          </div>
          <div className="col mb-2 text-center px-1">
            <img className="img-fluid" src={capivara9} alt="movie picture" />
          </div>
          <div className="col mb-2 text-center px-1">
            <img className="img-fluid" src={capivara10} alt="movie picture" />
          </div>
          <div className="col mb-2 text-center px-1">
            <img className="img-fluid" src={capivara11} alt="movie picture" />
          </div>
          <div className="col mb-2 text-center px-1">
            <img className="img-fluid" src={capivara12} alt="movie picture" />
          </div>
        </div>
        <h4 className="tvshow_title">New Releases</h4>
        <div className="row row-cols-1 row-cols-sm-2 row-cols-lg-4 row-cols-xl-6 mb-4">
          <div className="col mb-2 text-center px-1">
            <img className="img-fluid" src={capivara13} alt="movie picture" />
          </div>
          <div className="col mb-2 text-center px-1">
            <img className="img-fluid" src={capivara14} alt="movie picture" />
          </div>
          <div className="col mb-2 text-center px-1">
            <img className="img-fluid" src={capivara15} alt="movie picture" />
          </div>
          <div className="col mb-2 text-center px-1">
            <img className="img-fluid" src={capivara16} alt="movie picture" />
          </div>
          <div className="col mb-2 text-center px-1">
            <img className="img-fluid" src={capivara17} alt="movie picture" />
          </div>
          <div className="col mb-2 text-center px-1">
            <img className="img-fluid" src={capivara18} alt="movie picture" />
          </div>
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
