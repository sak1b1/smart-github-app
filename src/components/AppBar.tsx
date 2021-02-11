import React from 'react';
import { RootStore } from "../Store";
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import GitHubIcon from '@material-ui/icons/GitHub';
import Logout from './Logout'
import { useSelector } from 'react-redux';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
     // background: 'linear-gradient(45deg, #FE6B8B 0%, #FF8E53 90%)',
      flexGrow: 1,
    },
    menuButton: {
      // marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
    },
    header: {
      backgroundColor: "#28234a",
      color: "white",
      boxShadow: "0px 0px 0px 0px"
    }
  }),
);

export default function ButtonAppBar() {
  const classes = useStyles();

  const repoState = useSelector((state: RootStore) => state.repo);

  return (
    <div className={classes.root}>
      <AppBar position="static" className={classes.header}>
        <Toolbar>
          <IconButton style={{flex: '1'}} edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            {/* <MenuIcon /> */}
            <GitHubIcon />
          </IconButton>
          {repoState.user.name!=="" &&
            <div>
              <Logout/>
            </div>
            
          }
        </Toolbar>
      </AppBar>
    </div>
  );
}
