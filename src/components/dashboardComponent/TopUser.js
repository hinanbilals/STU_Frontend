import React, { useEffect } from 'react'
import { DataGrid, GridToolbarContainer, GridToolbarExport } from '@mui/x-data-grid';
import { useHistory } from 'react-router-dom'
import { useContext } from "react";
import { BaseUrlContext } from 'src/BaseUrlContext';
const columns = [
  { field: 'id', headerName: '#', flex: 1, headerClassName: 'UserListDataTable' },

  { field: 'name', headerName: 'User Name', flex: 3, headerClassName: 'UserListDataTable', },
  { field: 'thumbsup', headerName: 'Thumbs Up', flex: 3, headerClassName: 'UserListDataTable', },


];

// const rows = [
//     { id: 1, lastName: 'Snow', firstName: 'Jon', age: 35 },
//     { id: 2, lastName: 'Lannister', firstName: 'Cersei', age: 42 },
//     { id: 3, lastName: 'Lannister', firstName: 'Jaime', age: 45 },
//     { id: 4, lastName: 'Stark', firstName: 'Arya', age: 16 },
//     { id: 5, lastName: 'Targaryen', firstName: 'Daenerys', age: 34 },
//     { id: 6, lastName: 'Melisandre', firstName: 'Parker', age: 150 },
//     { id: 7, lastName: 'Clifford', firstName: 'Ferrara', age: 44 },
//     { id: 8, lastName: 'Frances', firstName: 'Rossini', age: 36 },
//     { id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
// ];

function CustomToolbar() {
  return (
    <GridToolbarContainer>
      <GridToolbarExport />
    </GridToolbarContainer>
  );
}



const TopUser = () => {

  const [rows, setRows] = React.useState('');
  // const [getAllData, setAllData] = React.useState('');
  const BaseUrl = useContext(BaseUrlContext)

  const history = useHistory();
  useEffect(() => {
    if (!localStorage.getItem('user-info')) {
      history.push("/login");
    }
  }, [history]);


  React.useEffect(() => {
          async function fetchMyAPI() {
                try
                {
                  let response = await fetch(BaseUrl + '/getAll')
                  response = await response.json()
                  response.sort((a, b) => b.Number_of_Thumbsup - a.Number_of_Thumbsup)
                  response = response.map((resp, id) => { const data = { id: id+1, ...resp,  }
                  return data
                  })
                  setRows(response)
                  // setAllData(response);
                }
                catch(error)
                {
                  console.log("Internet Connection Problem",error)
                }
          }

    fetchMyAPI()
  })


  return (
    <>
      <div>
        <h4>Top Users</h4>
      </div>
      <div style={{ height: 560, width: '100%' }}>
        <DataGrid style={{ backgroundColor: 'lightgray' }}
          rows={rows !== '' ? rows : ''}
          columns={columns}
          pageSize={7}
          rowsPerPageOptions={[7]}
          loading={rows !== '' ? false : true}

          components={{
            Toolbar: CustomToolbar,
          }}
        />

      </div>
    </>
  )
}

export default TopUser
