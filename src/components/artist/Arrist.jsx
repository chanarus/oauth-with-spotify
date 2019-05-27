import React from "react";
import PropTypes from "prop-types";

import "./Artist.css";
import placeholderImg from "../../placeholder.jpg";

const Artist = props => {
  const { name, external_urls, popularity } = props.artist;
  const imgSrc = props.artist.images.length
    ? props.artist.images[1].url
    : placeholderImg;
  return (
    <div className="col-md-4 col-lg-3 track">
      <div className="track-content">
        <div className="album-art">
          <img src={imgSrc} alt="album-art" />
        </div>
        <div className="track-info">
          <div className="card-body">
            <h5>{name}</h5>
            <p className="card-text">
              <strong>
                <i className="fas fa-star-half-alt" />
                Popularity
              </strong>
              : {popularity}
            </p>
            <a
              href={external_urls.spotify}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-outline-success btn-sm"
            >
              <i className="fas fa-chevron-right" /> More Detail
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

Artist.propTypes = {
  name: PropTypes.string,
  popularity: PropTypes.number,
  external_urls: PropTypes.object
};

export default Artist;
