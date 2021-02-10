/* eslint-disable no-use-before-define */
import React, { Dispatch, useState } from 'react';
import Chip from '@material-ui/core/Chip';
import Autocomplete from '@material-ui/lab/Autocomplete';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import { useSelector } from 'react-redux';
import { RootStore } from '../Store';
import { RepoDispatchTypes, RepoXType } from '../actions/RepoActionTypes';

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

let selectedRepos = [];

export default function Tags() {

  const classes = useStyles();

  const repoState = useSelector((state: RootStore) => state.repo);
  let repoList: RepoXType[] = [];


  if (repoState.user?.allRepo) {
    // repoList = repoState.user.allRepo;
    repoState.user.allRepo.map((repo: RepoXType) =>{
      if(repo.used === false)
      {
        repoList.push(repo);
      }
    })
  }
  const [input, setInput] = React.useState<RepoXType | null>()
  const Register = (v: any) => async (dispatch: Dispatch<RepoDispatchTypes>) => {

    setInput(v);
    console.log(v);

  };

  const [selectValue, setSelectValue] = useState();

  return (
    <div className={classes.root}>
      <Autocomplete
        multiple
        id="tags-standard"
        options={repoList}
        getOptionLabel={(option: RepoXType) => option.name}
        // onChange={handleChange(e,values)}
        //defaultValue={[top100Films[13]]}
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

            console.log(repoListForCollection);
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
  );
}


function dispatch(arg0: (dispatch: Dispatch<RepoDispatchTypes>) => Promise<void>) {
  throw new Error('Function not implemented.');
}
// Top 100 films as rated by IMDb users. http://www.imdb.com/chart/top
// const top100Films = [
//   { title: 'The Shawshank Redemption', year: 1994 },
//   { title: 'The Godfather', year: 1972 },
//   { title: 'Monty Python and the Holy Grail', year: 1975 },
// ];

//==================================
