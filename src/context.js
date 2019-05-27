import React, { Component } from "react";
import axios from "axios";

const Context = React.createContext();

/**
 * Reducer for the search
 * Update the globle state after api returns the data
 * @param state
 * @param action
 */
const reducer = (state, action) => {
  switch (action.type) {
    case "SEARCH":
      return {
        ...state,
        trackList: action.payload,
        heading: action.heading,
        searchType: action.searchType,
        noResult: action.noResult
      };
    default:
      return state;
  }
};

/**
 * Obtains parameters from the hash of the URL
 * @return Object
 */
export const getHashParams = () => {
  let hashParams = {};
  let e,
    r = /([^&;=]+)=?([^&;]*)/g,
    q = window.location.hash.substring(1);
  while ((e = r.exec(q))) {
    hashParams[e[1]] = decodeURIComponent(e[2]);
  }
  return hashParams;
};

export class Provider extends Component {
  constructor() {
    super();
    const params = getHashParams();
    this.state = {
      trackList: [],
      heading: "Top 10 Tracks",
      searchType: "track",
      noResult: false,
      loggedIn: params.access_token ? true : false,
      dispatch: action => this.setState(state => reducer(state, action))
    };
  }

  /**
   * Initial request for the api to load data.
   */
  componentDidMount() {
    axios
      .get(
        "https://api.spotify.com/v1/search?q=linkin%20park&type=track&market=US&limit=20&offset=0",
        {
          headers: {
            Authorization: `Bearer ${getHashParams().access_token}`
          }
        }
      )
      .then(res => {
        this.setState({
          trackList: res.data.tracks.items
        });
      })
      .catch(err => console.log(err));
  }

  render() {
    return (
      <Context.Provider value={this.state}>
        {this.props.children}
      </Context.Provider>
    );
  }
}

export const Consumer = Context.Consumer;
