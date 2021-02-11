import { useDispatch, useSelector } from 'react-redux'
import { Dispatch } from "redux";
import { LOGIN, RepoDispatchTypes, SIGNUP, User, CollectionItemType, RepoXType } from "../actions/RepoActionTypes";
import React, { useState } from 'react'
import { RootStore } from '../Store';
import axios from 'axios';
import { Button, TextField } from '@material-ui/core';
// import { RepoDispatchTypes } from '../actions/RepoActionTypes';

const SignUp = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [github, setGithub] = useState("");

  const repoState = useSelector((state: RootStore) => state.repo);

  const dispatch = useDispatch();

  const Register = (e: any) => async (dispatch: Dispatch<RepoDispatchTypes>) => {
    e.preventDefault();

    let allUserList: any = []

    if (repoState.allUserList) {
      allUserList = repoState.allUserList;
    }

    let userAlreadyExist = false;
    let invalidGithub = false;

    allUserList.map((user: User) => {

      if (user.email === email || user.github === github) {

        userAlreadyExist = true;
      }
      return null;
    });
    // check github id here

    let res;
    let resUser;
    try {
      res = await axios.get(`https://api.github.com/users/${github}/repos`);
      resUser = await axios.get(`https://api.github.com/users/${github}`);

      console.log(res.data);
      console.log(typeof (res.data));

    } catch (e) {
      invalidGithub = true;
    }

    if (userAlreadyExist) {
      alert("User already Exist");
    }
    else if (invalidGithub) {
      alert("Invalid Github");
    }
    else {

      const emptyCollection: CollectionItemType[] = [];
      const allRepoList: RepoXType[] = []

      const dataSize: number = res?.data.length;

      for (let i: number = 0; i < dataSize; i++) {
        let commitsRes: any;
        try{
          // commitsRes = await axios.get(`https://api.github.com/users/${github}/repos`);
          let repoName: string = res?.data[i].name;
          commitsRes = await axios.get(`https://api.github.com/repos/${github}/${repoName}/commits`);
        }catch(err)
        {

        }
        allRepoList.push(
          {
            id: res?.data[i].id,
            name: res?.data[i].name,
            url: res?.data[i].url,
            used: false,
            commits: commitsRes.data,
          }
        );
      }

      const user: User = {
        id: Math.random().toString(36).substr(2, 9),
        name: name,
        email: email,
        password: password,
        github: github,
        allRepo: allRepoList,
        collectionList: emptyCollection,
        follower: resUser?.data.followers,
        following: resUser?.data.following,
        avatar: resUser?.data.avatar_url,

      }

      setName("");
      setEmail("");
      setPassword("");
      setGithub("");

      allUserList.push(user)

      dispatch({
        type: SIGNUP,
        payload: allUserList
      })

      dispatch({
        type: LOGIN,
        payload: user
      })
    }
  };

  const handleSignUp = (e: any) => dispatch(Register(e));


  return (
    <div className="login">
      <form className="login__form" onSubmit={(e) => handleSignUp(e)}>
        <h1>Sign Up</h1>
        <TextField
          value={name}
          onChange={(e) => setName(e.target.value)}
          id="outlined-basic-signup-name"
          label="Name"
          variant="outlined"
        />
        <br />
        <br />
        <TextField
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          id="outlined-basic-signup-email"
          label="Email"
          variant="outlined"
          type="email"
        />
        <br />
        <br />
        <TextField
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          id="outlined-basic-signup-password"
          label="Password"
          variant="outlined"
          type="password"
        />
        <br />
        <br />
        <TextField
          value={github}
          onChange={(e) => setGithub(e.target.value)}
          id="outlined-basic-signup-github"
          label="Github Username"
          variant="outlined"
        />
        <br />
        <br />
        <Button type="submit" variant="contained" color="inherit">Sign up</Button>
        <br />
        <br />


      </form>
    </div>
  )
}

export default SignUp;