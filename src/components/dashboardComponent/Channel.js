import React, { useEffect, useState, createRef } from 'react'
import { DataGrid } from '@mui/x-data-grid';

const columns = [
  { field: 'id', headerName: 'ID', flex:1, headerClassName:'UserListDataTable'},
  { field: 'firstName', headerName: 'First name',flex:3,headerClassName:'UserListDataTable'   },
  { field: 'lastName', headerName: 'Last name',flex:3,headerClassName:'UserListDataTable'  },
  { field: 'age', headerName: 'Teams', flex:3,headerClassName:'UserListDataTable'  },
  { field: 'age', headerName: 'Channels',flex:3,headerClassName:'UserListDataTable', },
  
];

const rows = [
  { id: 1, lastName: 'Snow', firstName: 'Jon', age: 35 },
  { id: 2, lastName: 'Lannister', firstName: 'Cersei', age: 42 },
  { id: 3, lastName: 'Lannister', firstName: 'Jaime', age: 45 },
  { id: 4, lastName: 'Stark', firstName: 'Arya', age: 16 },
  { id: 5, lastName: 'Targaryen', firstName: 'Daenerys', age: 34 },
  { id: 6, lastName: 'Melisandre', firstName: 'Parker', age: 150 },
  { id: 7, lastName: 'Clifford', firstName: 'Ferrara', age: 44 },
  { id: 8, lastName: 'Frances', firstName: 'Rossini', age: 36 },
  { id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
];



 
 
const Channel = () => {
  return (
    <>
    <div>
      <h4>Channels Details</h4>
    </div>
    <div style={{ height: 560, width: '100%' }}>
      <DataGrid style={{backgroundColor:'lightgray'}}
        rows={rows}
        columns={columns}
        pageSize={8}
        rowsPerPageOptions={[10]}
       
      />
      
    </div>
    </>
  )
}

export default Channel
