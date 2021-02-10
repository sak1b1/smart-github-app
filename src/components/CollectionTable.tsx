import * as React from 'react';
import { DataGrid, ColDef } from '@material-ui/data-grid';
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
];





export default function CollectionTable() {

const repoState = useSelector((state: RootStore) => state.repo);
// const cnt: id=0;
if(repoState.user.id!==''){
  
  repoState.user.collectionList.map(item => {
    console.log(item.name);
    let repoNamesTogether: string = "";
    item.repos.map(repo => {
      if(repoNamesTogether=== "")
      repoNamesTogether = repo.name;
      else
      repoNamesTogether = repoNamesTogether + ",  " +repo.name;
      return null;
    })
    rows.push({
      id: cnt,
      repoNames: repoNamesTogether,
      name: item.name,
      type: item.type,
      created: item.dateCreated
    });
    cnt++;
    return null;
  })

}
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
