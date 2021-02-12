import React, { Component } from 'react';
import { Grid } from "react-bootstrap";
import DisplayNpc from "./DisplayNpc";

import "./styles/index.less";

export default class App extends Component {
  render() {
    return (
      <Grid>
        <DisplayNpc />
      </Grid>
    );
  }
}

