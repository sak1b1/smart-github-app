import * as React from 'react';
import { DataGrid, ColDef, ValueGetterParams } from '@material-ui/data-grid';
import { useSelector } from 'react-redux';
import { RootStore } from '../Store';
import { RepoXType } from '../actions/RepoActionTypes';

const columns: ColDef[] = [
  // { field: 'id', headerName: 'ID', width: 200 },
  { field: 'firstName', headerName: 'Repo Name', width: 200 },
  { field: 'lastName', headerName: 'Last name', width: 200 },
  { field: 'occupied', headerName: 'Occupied', width: 200 },
  // {
  //   field: 'age',
  //   headerName: 'Age',
  //   type: 'number',
  //   width: 200,
  // },
  {
    field: 'fullName',
    headerName: 'Full name',
    description: 'This column has a value getter and is not sortable.',
    sortable: false,
    width: 200,
    valueGetter: (params: ValueGetterParams) =>
      `${params.getValue('firstName') || ''} ${params.getValue('lastName') || ''}`,
  },
];




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





const DataTable = (props: any) =>{

const repoState = useSelector((state: RootStore) => state.repo);
// const cnt: id=0;
if(repoState.user){
  if(rows.length !== 0)
  {
    rows = [];
  }
  repoState.user.allRepo.map((item: RepoXType) => {
    
    rows.push({
      id: parseInt(item.id),
      firstName: item.name,
      lastName: item.url,
      occupied: item.used,
    });
    return null;
  })

}
  return (
    <div style={{  height: 400, width: '100%', alignContent: 'center' }}>
      <h1>Repositories of {repoState.user?.name}</h1>
      <DataGrid rows={rows} columns={columns} pageSize={5} checkboxSelection />
    </div>
  );
}

export default DataTable;