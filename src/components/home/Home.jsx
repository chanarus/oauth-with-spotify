import React, { Fragment } from "react";
import Tracks from "../tracks/Tracks";
import Search from "../search/Search";

const Home = () => {
  return (
    <Fragment>
      <Search />
      <Tracks />
    </Fragment>
  );
};

export default Home;
