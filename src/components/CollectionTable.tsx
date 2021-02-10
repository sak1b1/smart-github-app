import * as React from 'react';
import { DataGrid, ColDef, ValueGetterParams } from '@material-ui/data-grid';
import { useSelector } from 'react-redux';
import { RootStore } from '../Store';

const columns: ColDef[] = [
  // { field: 'id', headerName: 'ID', width: 200 },
  { field: 'name', headerName: 'Collection Name', width: 200 },
  { field: 'repoNames', headerName: 'Repo Names', width: 200 },
  { field: 'type', headerName: 'Collection Type', width: 200 },
  { field: 'created', headerName: 'Created', width: 200 },
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



let cnt: number= 1;
let rows: any[]= [
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





export default function CollectionTable() {

const repoState = useSelector((state: RootStore) => state.repo);
// const cnt: id=0;
{repoState.user && (
  
  repoState.user.collectionList.map(item => {
    console.log(item.name);
    let repoNamesTogether = "";
    item.repos.map(repo => {
      if(repoNamesTogether== "")
      repoNamesTogether = repo.name;
      else
      repoNamesTogether = repoNamesTogether + ",  " +repo.name;

    })
    rows.push({
      id: cnt,
      repoNames: repoNamesTogether,
      name: item.name,
      type: item.type,
      created: item.dateCreated
    });
    cnt++;

  })

)}
  return (
    <div style={{ 
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      //alignItems: 'center',
      paddingLeft: 20,
      height: 400,
      width: '50%',
      //alignContent: 'center' 
    }}>
      <h1>Collections of {repoState.user?.name}</h1>
      <DataGrid rows={rows} columns={columns} pageSize={5} checkboxSelection />
    </div>
  );
}
