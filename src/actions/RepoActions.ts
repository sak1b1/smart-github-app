import {Dispatch} from "redux";
import {REPO_FAIL, REPO_LOADING, REPO_SUCCESS, RepoDispatchTypes} from "./RepoActionTypes";
import axios from "axios";

export const GetRepo = (userName: string) => async (dispatch: Dispatch<RepoDispatchTypes>) => {
 // console.log(userName);
  try {
    dispatch({
      type: REPO_LOADING
    })

    const res = await axios.get(`https://api.github.com/users/${userName}/repos`);
    console.log(res);
    
    dispatch({
      type: REPO_SUCCESS,
      payload: res.data
    })

  } catch(e) {
    dispatch({
      type: REPO_FAIL
    })
  }
};