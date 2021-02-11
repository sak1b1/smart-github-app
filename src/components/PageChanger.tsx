import React, { useState } from 'react';


import { useDispatch, useSelector } from 'react-redux'
import { Dispatch } from "redux";
import { LOCATION_CHANGE, RepoDispatchTypes } from "../actions/RepoActionTypes";
import { RootStore } from '../Store';


const PageChanger = (props: any) => {

  const dispatch = useDispatch();
  const repoState = useSelector((state: RootStore) => state.repo);

  const ChangeLocation = (e: any) => async (dispatch: Dispatch<RepoDispatchTypes>) => {
    e.preventDefault();
    
    dispatch({
      type: LOCATION_CHANGE,
      payload: e.target.value.toString()
    })

  };

  const handleLocationClick = (e: any) => dispatch(ChangeLocation(e));
  return(
    <div>
      {/* Hello, testing the porps: { props.skinColour } */}
      <button value={props.location} onClick={(e) => handleLocationClick(e)}>{props.location}</button>
    </div>
  )
}

export default PageChanger;