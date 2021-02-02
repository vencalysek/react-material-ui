import React, {useEffect, useState} from "react";
import "./App.css";
import Header from "./components/Header";
import BottomNav from "./components/BottomNav";

import "fontsource-roboto";

import {Box, Grid, Paper} from "@material-ui/core";
import Content from "./components/Content";
import CardComponent from "./components/CardComponent";

function App() {

  return (
    <div className="App">
      <Header />
      <div style={{width: "100%"}}>
        <Box my={3}>
          <Grid container>
            <Grid item xs={1} lg={2}></Grid>
            <Grid container item xs={10} lg={8}>
              <Content />
            </Grid>
            <Grid item xs={1} lg={2}></Grid>
          </Grid>
        </Box>
      </div>
      {/* <BottomNav /> */}
    </div>
  );
}

export default App;
