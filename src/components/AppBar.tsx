import React from 'react';
import { useDispatch, useSelector } from "react-redux";
import { RootStore } from "../Store";
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import GitHubIcon from '@material-ui/icons/GitHub';
import Logout from './Logout'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
     // background: 'linear-gradient(45deg, #FE6B8B 0%, #FF8E53 90%)',
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
    },
  }),
);

export default function ButtonAppBar() {
  const classes = useStyles();

  const repoState = useSelector((state: RootStore) => state.repo);

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            {/* <MenuIcon /> */}
            <GitHubIcon />
          </IconButton>
          {repoState.user.name!="string" &&
            <div>
              <Logout/>
            </div>
            
          }
        </Toolbar>
      </AppBar>
    </div>
  );
}
