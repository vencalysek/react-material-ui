import React, {useState} from "react";
import logo from "./logo.svg";
import "./App.css";

import ButtonGroup from "@material-ui/core/ButtonGroup";
import Button from "@material-ui/core/Button";
import SaveIcon from "@material-ui/icons/Save";
import DeleteIcon from "@material-ui/icons/Delete";
import Checkbox from "@material-ui/core/Checkbox";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import TextField from "@material-ui/core/TextField";

import {makeStyles, ThemeProvider, createMuiTheme} from "@material-ui/core/styles";
import {green, orange} from "@material-ui/core/colors";

import "fontsource-roboto";

import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";

import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";

import AppBar from "@material-ui/core/AppBar";
import ToolBar from "@material-ui/core/ToolBar";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";

import SearchIcon from '@material-ui/icons/Search';
import MoreIcon from '@material-ui/icons/MoreVert';

const theme = createMuiTheme({
  typography: {
    h2: {
      fontSize: 32,
      marginBottom: 15,
    },
  },
  palette: {
    secondary: {
      main: orange[200],
    },
  },
});

function ButtonStyled() {
  const classes = useStyles();
  return <Button className={classes.root}>Test Styled Button</Button>;
}

const CheckboxExample = () => {
  const [checked, setChecked] = useState(true);

  return (
    <FormControlLabel
      control={
        <Checkbox
          icon={<DeleteIcon />}
          checkedIcon={<SaveIcon />}
          checked={checked}
          onChange={() => setChecked(!checked)}
          inputProps={{
            "aria-label": "secondary checkbox",
          }}
        />
      }
      label="Testing Checkbox"
    />
  );
};
 
const useStyles = makeStyles((theme) => ({
  root: {
    background: "linear-gradient(45deg, #fe6b4f, #f1277a)",
    border: 0,
    borderRadius: 15,
    marginBottom: 20,
    color: "white",
    padding: "15px 30px",
    // flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  toolbar: {
    minHeight: 128,
    alignItems: 'flex-start',
    paddingTop: theme.spacing(1),
    paddingBottom: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
    alignSelf: 'flex-end',
  },
}));

function ProminentAppBar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar>
        <ToolBar className={classes.toolBar}>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="open drawer"
          >
            <MenuIcon />
          </IconButton>
          <Typography className={classes.title} variant="h5" noWrap>
            Material-UI
          </Typography>
          <IconButton aria-label="search" color="inherit">
            <SearchIcon />
          </IconButton>
          <IconButton aria-label="display more actions" edge="end" color="inherit">
            <MoreIcon />
          </IconButton>
        </ToolBar>
      </AppBar>
    </div>
  );
}

function App() {
  const classes = useStyles();
  return (
    <ThemeProvider theme={theme}>
      <Container maxWidth="lg">
        <div className="App">
            <ProminentAppBar />
          <header className="App-header">
            <AppBar color="secondary">
              <ToolBar >
                <IconButton>
                  <MenuIcon />
                </IconButton>
                <Typography noWrap className={classes.title} variant="subtitle2">MUI Theming</Typography>
                <Button>LOGIN</Button>
              </ToolBar>
            </AppBar>

            <Typography variant="h2" component="div">
              Welcome to MUI
            </Typography>
            <Typography variant="subtitle2">Learn how to use Material-UI</Typography>
            <ButtonStyled></ButtonStyled>

            <Grid container spacing={4} justify="center">
              <Grid item xs={3} sm={6}>
                <Paper
                  style={{
                    height: 75,
                    width: "100%",
                  }}
                />
              </Grid>
              <Grid item xs={3} sm={6}>
                <Paper
                  style={{
                    height: 75,
                    width: "100%",
                  }}
                />
              </Grid>
              <Grid item xs={3} sm={6} lg={12}>
                <Paper
                  style={{
                    height: 75,
                    width: "100%",
                  }}
                />
              </Grid>
            </Grid>

            <TextField
              variant="filled"
              color="secondary"
              type="email"
              placeholder="test@test.com"
              label="the Time"
            />
            <CheckboxExample />
            <ButtonGroup variant="contained">
              <Button startIcon={<SaveIcon />} color="primary" size="large">
                Save
              </Button>

              <Button startIcon={<DeleteIcon />} color="secondary" size="large">
                Discard
              </Button>
            </ButtonGroup>

            <img src={logo} className="App-logo" alt="logo" />
          </header>
        </div>
      </Container>
    </ThemeProvider>
  );
}

export default App;
