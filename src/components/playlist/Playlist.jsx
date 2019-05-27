import React from "react";
import PropTypes from "prop-types";

import "./Playlist.css";
import placeholderImg from "../../placeholder.jpg";

const Playlist = props => {
  const { name, tracks, external_urls } = props.playlist;
  const imgSrc = props.playlist.images.length
    ? props.playlist.images[0].url
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
                <i className="fas fa-compact-disc" />
                Tracks
              </strong>
              : {tracks.total}
            </p>
            <a
              href={external_urls.spotify}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-outline-success btn-sm"
            >
              <i className="fas fa-chevron-right" /> Play Now
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

Playlist.propTypes = {
  name: PropTypes.string,
  tracks: PropTypes.object,
  external_urls: PropTypes.object
};

export default Playlist;
