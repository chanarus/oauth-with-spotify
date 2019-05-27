import React from "react";
import PropTypes from "prop-types";

import "./Album.css";
import placeholderImg from "../../placeholder.jpg";

const Album = props => {
  const { name, artists, total_tracks, external_urls } = props.album;
  const imgSrc = props.album.images.length
    ? props.album.images[1].url
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
              <strong>Artist(s)</strong>:{" "}
              {artists.map(artist => (
                <span key={artist.id}>{artist.name}, </span>
              ))}
              <br />
              <strong>
                <i className="fas fa-compact-disc" />
                Tracks
              </strong>
              : {total_tracks}
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

Album.propTypes = {
  name: PropTypes.string,
  artists: PropTypes.array,
  total_tracks: PropTypes.number,
  external_urls: PropTypes.object
};

export default Album;
