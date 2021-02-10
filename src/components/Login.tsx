import { useDispatch, useSelector } from 'react-redux'
import { Dispatch } from "redux";
import { LOGIN, RepoDispatchTypes, User } from "../actions/RepoActionTypes";
import React, { useState } from 'react'
import { GitHub } from '@material-ui/icons';
import { RootStore } from '../Store';
import { Button, TextField } from '@material-ui/core';
// import { RepoDispatchTypes } from '../actions/RepoActionTypes';
import { useHistory } from 'react-router-dom';

const Login = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");


  const dispatch = useDispatch();

  const repoState = useSelector((state: RootStore) => state.repo);

  const GetRepo1 = (e: any) => async (dispatch: Dispatch<RepoDispatchTypes>) => {
    e.preventDefault();

    if (repoState.allUserList) {
      const allUserList: any = repoState.allUserList;

      allUserList.map((user: User) => {

        if (user.email === email && user.password === password) {

          const currentUser = {
            id: user.id,
            name: user.name,
            email: user.email,
            password: "",
            github: user.github,
            allRepo: user.allRepo,
            collectionList: user.collectionList,
          }

          dispatch({
            type: LOGIN,
            payload: currentUser
          })
        }
      });

      setEmail('');
      setPassword('');


    }

  };

  const handleSubmit1 = (e: any) => dispatch(GetRepo1(e));


  return (
    <div className="login">
      <form className="login__form" onSubmit={(e) => handleSubmit1(e)}>
        <h1>Login</h1>
        <TextField
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          id="outlined-basic"
          label="Email"
          variant="outlined"
          type="email"
        />
        <br />
        <br />
        <TextField
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          id="outlined-basic"
          label="Password"
          variant="outlined"
          type="password"
        />
        <br />
        <br />
        <Button type="submit" variant="contained" color="primary">Login</Button>
        <br />
        <br />
      </form>
    </div>
  )
}

export default Login;