import React from "react";
import "./App.css";
import Header from "./components/Header";
import BottomNav from "./components/BottomNav";
import Sidebar from "./components/Sidebar";

import "fontsource-roboto";


import {Button} from "@material-ui/core";
import {makeStyles} from "@material-ui/styles";

const colorForButtons = ["red", "green", "blue", "orange", "brown", "yellow"];

const useStyles = makeStyles({
  root: {
    background: props => props.color,
    color: props => {switch (props.color) {
      case 'yellow':
        return '#222'
      case 'orange':
        return '#222'
      case 'red':
        return '#222'
      default:
        return '#999'
    }},
    margin: '5px',
  },
});

const ColoredButton = props => {
  const {color, ...other} = props;
  console.log(color);
  const classes = useStyles(props);
  return <Button className={classes.root} {...other} />;
};

function App() {
  return (
    <div className="App">
      {/* <Header /> */}
      <Sidebar />
    </div>
  );
}

export default App;
