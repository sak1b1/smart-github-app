import * as React from 'react';
import { DataGrid, ColDef } from '@material-ui/data-grid';
import { useSelector } from 'react-redux';
import { RootStore } from '../Store';
import { RepoXType } from '../actions/RepoActionTypes';
import { useState } from 'react';

const columns: ColDef[] = [
  // { field: 'id', headerName: 'ID', width: 200 },
  { field: 'name', headerName: 'Repo Name', width: 400 },
  { field: 'url', headerName: 'Last name', width: 400 },
  { field: 'occupied', headerName: 'Occupied', width: 400 },
  // { field: 'repo', headerName: 'repo', width: 0 },
  // {
  //   field: 'age',
  //   headerName: 'Age',
  //   type: 'number',
  //   width: 200,
  // },
  // {
  //   field: 'fullName',
  //   headerName: 'Full name',
  //   description: 'This column has a value getter and is not sortable.',
  //   sortable: false,
  //   width: 200,
  //   valueGetter: (params: ValueGetterParams) =>
  //     `${params.getValue('firstName') || ''} ${params.getValue('lastName') || ''}`,
  // },
];




let rows: any[] = [
  // { id: 0, lastName: 'Snow', firstName: 'Jon', age: 35 },
  // { id: 2, lastName: 'Lannister', firstName: 'Cersei', age: 42 },
  // { id: 3, lastName: 'Lannister', firstName: 'Jaime', age: 45 },
  // { id: 4, lastName: 'Stark', firstName: 'Arya', age: 16 },
  // { id: 5, lastName: 'Targaryen', firstName: 'Daenerys', age: null },
  // { id: 6, lastName: 'Melisandre', firstName: null, age: 150 },
  // { id: 7, lastName: 'Clifford', firstName: 'Ferrara', age: 44 },
  // { id: 8, lastName: 'Frances', firstName: 'Rossini', age: 36 },
  // { id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
];





const DataTable = (props: any) => {

  const [selectedRepo, setSelectedRepo] = useState("");
  // const [commits, setCommits] = useState<object[]>([]);
  const [commits, setCommits] = useState("");

  const handleRowSelection = (e: any) => {
    if (e.data.name) {
      setSelectedRepo(e.data.name);
      // setCommits(e.data.commits);

      // commits.forEach(function (item: any) {
      //   console.log(item.sha);
      // });
      if (e.data.commits) {
        // console.log(e.data.commits);
        let arr: object[] = [];
        let allCommits: string = "";
        e.data.commits.forEach(function (item: any) {
          // console.log(item.commit.message);
          arr.push(
            {
              message: item.commit.message,
              commiter: item.commit.committer.name,
              date: item.commit.committer.date
            }
          )
          allCommits += "message: " + item.commit.message +
            " |  commiter: " + item.commit.committer.name +
            "  |  date: " + item.commit.committer.date + "\n";
        });
        console.log(arr);
        setCommits(allCommits);
      }


      // console.log(e.data.commits);

      // let temp: any[] = [];
      // commits.map((item: any) => {
      //   temp.push(item.commit.message);
      // })
      // console.log('---------------')
      // console.log(temp);
    }


  };


  const repoState = useSelector((state: RootStore) => state.repo);
  // const cnt: id=0;
  if (repoState.user) {
    if (rows.length !== 0) {
      rows = [];
    }
    repoState.user.allRepo.map((item: RepoXType) => {

      rows.push({
        id: parseInt(item.id),
        name: item.name,
        url: item.url,
        occupied: item.used,
        commits: item.commits,
      });
      return null;
    })

  }
  return (
    <div style={{ height: 400, width: '100%', alignContent: 'center' }}>
      <h1>Repositories of {repoState.user?.name}</h1>
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={5}
        onRowSelected={handleRowSelection}
      />

      {selectedRepo &&
        <div>
          <h1>Commits of: {selectedRepo} </h1>

        </div>
      }


      {commits && <h4 style={{ whiteSpace: 'pre-wrap' }}>{commits}</h4>}
      <br />
      <br />


    </div>
  );
}

export default DataTable;