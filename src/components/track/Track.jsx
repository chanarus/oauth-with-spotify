import React from "react";
import PropTypes from "prop-types";

import "./Track.css";
import placeholderImg from "../../placeholder.jpg";

const Track = props => {
  const { album, name, popularity, artists, external_urls } = props.track;
  const imgSrc = props.track.album.images.length
    ? props.track.album.images[1].url
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
                Album
              </strong>
              : {album.name}
              <br />
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
              <i className="fas fa-chevron-right" /> Play Now
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

Track.propTypes = {
  name: PropTypes.string,
  popularity: PropTypes.number,
  external_urls: PropTypes.object,
  artists: PropTypes.array,
  album: PropTypes.object
};

export default Track;
