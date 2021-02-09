import React from "react";
import clsx from "clsx";
import {makeStyles, useTheme} from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import CssBaseline from "@material-ui/core/CssBaseline";
import List from "@material-ui/core/List";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import InboxIcon from "@material-ui/icons/MoveToInbox";
import MailIcon from "@material-ui/icons/Mail";

import {useMediaQuery} from "@material-ui/core";

import {Box, Grid, Paper} from "@material-ui/core";
import Content from "./Content";

const drawerWidth = 240;

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex",
  },
  appBar: {
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginRight: drawerWidth,
  },
  title: {
    flexGrow: 1,
  },
  hide: {
    display: "none",
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  drawerHeader: {
    display: "flex",
    alignItems: "center",
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: "flex-end",
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  contentShift: {
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginRight: 0,
  },
}));

export default function PersistentDrawerRight() {
  const classes = useStyles();
  const [state, setState] = React.useState(false);
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const usePermanent = useMediaQuery(theme.breakpoints.up("md"));
  const drawerVariant = usePermanent ? "permanent" : "temporary";

  return (
    <div className={classes.root}>
      <CssBaseline />
      {/* <AppBar
        position="fixed"
        className={clsx(classes.appBar, {
        })}>
        <Toolbar>
          <Typography variant="h6" noWrap className={classes.title}>
            Persistent drawer
          </Typography>
          
        </Toolbar>
      </AppBar> */}

      <Grid
        className={clsx(classes.content, {
          [classes.contentShift]: usePermanent,
        })}
        container>
        {/* <Content /> */}
      </Grid>

      <Drawer
        anchor="right"
        open={state}
        onClose={() => setState(false)}
        className={classes.drawer}
        variant={drawerVariant}
        anchor="right"
        open={state}
        onClick={() => setState(false)}
        onKeyDown={() => setState(false)}
        classes={{
          paper: classes.drawerPaper,
        }}>
        <List
          role="presentation"
          >
          <ListItem button>
            <ListItemIcon>
              <MailIcon />
            </ListItemIcon>
            <ListItemText>Email</ListItemText>
          </ListItem>

          <ListItem button>
            <ListItemIcon>
              <InboxIcon />
            </ListItemIcon>
            <ListItemText>Download</ListItemText>
          </ListItem>
        </List>

      </Drawer>

      <IconButton
        color="inherit"
        aria-label="open drawer"
        edge="end"
        style={{
          position: "fixed",
          bottom: "10px",
          right: "15px",
          transform: "translate(-50%, -50%)",
          background: "#1abc9c",
        }}
        size="medium"
        onClick={() => setState(true)}
        className={clsx(open && classes.hide)}>
        <MenuIcon />
      </IconButton>
    </div>
  );
}
