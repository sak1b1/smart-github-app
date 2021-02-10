import { useDispatch, useSelector } from 'react-redux'
import { Dispatch } from "redux";
import { LOGIN, RepoDispatchTypes, LOGOUT } from "../actions/RepoActionTypes";
import React, { useState } from 'react'
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import { SignalCellularNullSharp } from '@material-ui/icons';
import { RootStore } from '../Store';
// import { RepoDispatchTypes } from '../actions/RepoActionTypes';

const Login = () => {
  const dispatch = useDispatch();
  const repoState = useSelector((state: RootStore) => state.repo);

  const ResetAll = () => async (dispatch: Dispatch<RepoDispatchTypes>) => {
    
    console.log("in logout")
    dispatch({
      type: LOGOUT,
      // payload: null
    })

  };

  const logout = () => dispatch(ResetAll());


  return (
    <div className="login">

      {repoState.user.id != '' &&
        <div className="div">
        Hi, {repoState.user.github} | <Button onClick={logout} color="inherit">Logout</Button>
        </div>
      }
      
      
    </div>
  )
}

export default Login;