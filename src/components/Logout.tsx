import { useDispatch, useSelector } from 'react-redux'
import { Dispatch } from "redux";
import { RepoDispatchTypes, LOGOUT } from "../actions/RepoActionTypes";
import React from 'react'
import Button from '@material-ui/core/Button';
import { RootStore } from '../Store';
// import { RepoDispatchTypes } from '../actions/RepoActionTypes';

const Login = () => {
  const dispatch = useDispatch();
  const repoState = useSelector((state: RootStore) => state.repo);

  const ResetAll = () => async (dispatch: Dispatch<RepoDispatchTypes>) => {
    
    dispatch({
      type: LOGOUT,
      // payload: null
    })

  };

  const logout = () => dispatch(ResetAll());


  return (
    <div className="logout">

      {repoState.user.id !== '' &&
        <div className="div">
          <Button onClick={logout} color="inherit">Logout</Button>
        </div>
      }
      
      
    </div>
  )
}

export default Login;