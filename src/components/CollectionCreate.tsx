import { useDispatch, useSelector } from 'react-redux'
// import { Dispatch } from "redux";
import {
  RepoDispatchTypes,
  COLLECTION_CREATE,
  RepoXType,
  CollectionItemType,
  User,
  UPDATE_USER_ALL_REPO,
  UPDATE_ALL_USER,

} from "../actions/RepoActionTypes";

import { RootStore } from '../Store';
import { Autocomplete } from '@material-ui/lab';
import { Button, TextField } from '@material-ui/core';

import React, { Dispatch, useState } from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';



const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      // display: 'flex',
      // flexDirection: 'column',
      // justifyContent: 'center',
      // alignItems: 'center',
      width: '50%',
      // '& > * + *': {
      //   marginTop: theme.spacing(3),
      // },
    },
  }),
);

const CollectionCreate = () => {

  const initialRepos: RepoXType[] = [];

  const [name, setName] = useState("");
  const [type, setType] = useState("");
  const [blank, setBlank] = useState<RepoXType[]>(initialRepos);
  const [repoListForCollection, setRepoListForCollection] = useState(initialRepos);

  const repoState = useSelector((state: RootStore) => state.repo);

  const classes = useStyles();

  let repoList: RepoXType[] = [];


  if (repoState.user?.allRepo) {
    // repoList = repoState.user.allRepo;
    repoState.user.allRepo.map((repo: RepoXType) =>{
      if(repo.used === false)
      {
        repoList.push(repo);
      }
      return null;
    })
  }
  const dispatch = useDispatch();

  const CreateCollection = (e: any) => async (dispatch: Dispatch<RepoDispatchTypes>) => {
    e.preventDefault();

    let collectionList: any = []

    const collectionItem: CollectionItemType = {
      id: Math.random().toString(36).substr(2, 9),
      name: name,
      type: type,
      repos: repoListForCollection,
      dateCreated: new Date(Date.now()).toISOString()
    }



    collectionList.push(collectionItem);

    dispatch({
      type: COLLECTION_CREATE,
      payload: collectionItem
    })



    let usedIds: string[] = [];
    repoListForCollection.forEach(function (item: RepoXType) {
      usedIds.push(item.id);
    });

    let updatedAllRepo: any = repoState.user.allRepo;

    updatedAllRepo.forEach(function (item: RepoXType) {
      if (usedIds.includes(item.id)) {
        console.log(item.name);
        item.used = true;
      }
    });

    dispatch({
      type: UPDATE_USER_ALL_REPO,
      payload: updatedAllRepo
    })




    if (repoState.allUserList) {

      const updatedUser: User = repoState.user;
      let allUserList: [User] = repoState.allUserList;


      allUserList.map(user => {
        if (user.id === updatedUser.id) {
          user.collectionList = updatedUser.collectionList;
        }
        return null;
      })

      dispatch({
        type: UPDATE_ALL_USER,
        payload: allUserList
      })
    }

    // setId("");
    setName("");
    setType("");
    setRepoListForCollection(initialRepos);
    setBlank(initialRepos);
    // setDate("");


  };

  const CreateCollectionSubmit = (e: any) => dispatch(CreateCollection(e));


  return (
    <div className="create-collection">
      <form className="login__form" onSubmit={(e) => CreateCollectionSubmit(e)}>
        <h1>Create New Collection</h1>
        <TextField
          value={name}
          onChange={(e) => setName(e.target.value)}
          id="outlined-basic-name"
          label="Collection Name"
          variant="outlined"
        />
        <br />
        <br />
        <TextField
          value={type}
          onChange={(e) => setType(e.target.value)}
          id="outlined-basic-type"
          label="Collection Type"
          variant="outlined"
        />
        <br />
        <br />

        <div>
          <div className={classes.root}>
            <Autocomplete
              multiple
              id="tags-standard"
              options={repoList}
              getOptionLabel={(option: RepoXType) => option.name}
              // onChange={handleChange(e,values)}
              defaultValue={blank}
              //onChange={(e,v) => handleChange(v)}
              onChange={(_, optionValue) => {
                if (optionValue) {

                  let optionSize: number = optionValue.length;
                  let repoListForCollection: RepoXType[] = [];

                  for (let i: number = 0; i < optionSize; i++) {
                    repoListForCollection.push(
                      {
                        id: optionValue[i].id,
                        name: optionValue[i].name,
                        url: optionValue[i].url,
                        used: true,
                      }
                    );
                  }
                  setRepoListForCollection(repoListForCollection);
                }
              }}
              renderInput={(params) => (
                <TextField
                  {...params}
                  variant="standard"
                  label="Repositories"
                  placeholder=""
                />
              )}
            />
          </div>
        </div>
        <br />
        <br />

        <Button type="submit" variant="contained" color="primary">Create</Button>

        <br />
        <br />
      </form>
    </div>
  )
}

export default CollectionCreate;