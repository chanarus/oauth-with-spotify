import React, { Component, Fragment } from "react";
import { Consumer } from "../../context";
import Track from "../track/Track";
import Album from "../album/Album";
import Artist from "../artist/Arrist";
import Playlist from "../playlist/Playlist";
import Spinner from "../Spinner";

class Tracks extends Component {
  render() {
    return (
      <Consumer>
        {value => {
          const { trackList, heading, searchType, noResult } = value;
          if (noResult) {
            return <h3>No result found</h3>;
          } else if (trackList === undefined || trackList.length === 0) {
            return <Spinner />;
          } else {
            return (
              <Fragment>
                <h3 className="text-center mb-4">{heading}</h3>
                <div className="row">
                  {trackList.map(item => {
                    if (searchType === "track") {
                      return <Track key={item.id} track={item} />;
                    } else if (searchType === "artist") {
                      return <Artist key={item.id} artist={item} />;
                    } else if (searchType === "album") {
                      return <Album key={item.id} album={item} />;
                    } else if (searchType === "playlist") {
                      return <Playlist key={item.id} playlist={item} />;
                    }
                  })}
                </div>
              </Fragment>
            );
          }
        }}
      </Consumer>
    );
  }
}

export default Tracks;
