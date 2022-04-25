import React, { useEffect } from 'react'
import { DataGrid } from '@mui/x-data-grid';
// import { Link } from '@material-ui/core';    
import { useHistory } from 'react-router-dom'
import { withRouter } from 'react-router-dom/cjs/react-router-dom.min';
import { useContext } from "react";
import { BaseUrlContext } from 'src/BaseUrlContext';
import {GridColumns, GridRowsProp, GridColDef } from '@mui/x-data-grid';

//const columns: GridColDef[] = [
  const columns: GridColumns = [ 
{ field: 'id', headerName: 'ID#', flex:1, headerClassName: 'super-app-theme--header' },
  { field: 'name', headerName: 'User Name', flex:3 },
  { field: 'thumbsup', headerName: 'Thumbs Up', flex:3 },

];


// const rows = [
//     { id: 1, name: 'Snow', firstName: 'Jon', thumbsup: 35,image:"https://st.depositphotos.com/1637787/2927/i/950/depositphotos_29270411-stock-photo-happy-man-working-with-laptop.jpg" },
//     { id: 2, name: 'Lannister', firstName: 'Cersei', thumbsup: 42,image:"https://st.depositphotos.com/1637787/2927/i/950/depositphotos_29270411-stock-photo-happy-man-working-with-laptop.jpg"  },
//     { id: 3, name: 'Lannister', firstName: 'Jaime', thumbsup: 45,image:"https://st.depositphotos.com/1637787/2927/i/950/depositphotos_29270411-stock-photo-happy-man-working-with-laptop.jpg"  },
//     { id: 4, name: 'Stark', firstName: 'Arya', thumbsup: 16,image:"https://st.depositphotos.com/1637787/2927/i/950/depositphotos_29270411-stock-photo-happy-man-working-with-laptop.jpg"  },
//     { id: 5, name: 'Targaryen', firstName: 'Daenerys', thumbsup: 34,image:"https://st.depositphotos.com/1637787/2927/i/950/depositphotos_29270411-stock-photo-happy-man-working-with-laptop.jpg"  },
//     { id: 6, name: 'Melisandre', firstName: 'Parker', thumbsup: 150 ,image:"https://st.depositphotos.com/1637787/2927/i/950/depositphotos_29270411-stock-photo-happy-man-working-with-laptop.jpg" },
//     { id: 7, name: 'Clifford', firstName: 'Ferrara', thumbsup: 44,image:"https://st.depositphotos.com/1637787/2927/i/950/depositphotos_29270411-stock-photo-happy-man-working-with-laptop.jpg"  },
//     { id: 8, name: 'Frances', firstName: 'Rossini', thumbsup: 36,image:"https://st.depositphotos.com/1637787/2927/i/950/depositphotos_29270411-stock-photo-happy-man-working-with-laptop.jpg"  },
//     { id: 9, name: 'Roxie', firstName: 'Harvey', thumbsup: 65,image:"https://st.depositphotos.com/1637787/2927/i/950/depositphotos_29270411-stock-photo-happy-man-working-with-laptop.jpg"  },
// ];



const User = (props) => {

  const [rows, setRows] = React.useState();
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
          response = response.map((resp, id) => {
          const data = {
          id: id + 1,
          ...resp,
          }
          return data
          })
          setRows(response)
      }
      catch (error) 
      {
        console.log("Internet Connection Problem",error)
         
      }
  }
    fetchMyAPI()
  },[])
  return (
    <>
      <div>
        <h4>Users Details</h4>
      </div>
      <div  style={{ height: 560, width: '100%' }}>

        <DataGrid style={{ backgroundColor:'#e9eafc' }} 
          rows={rows !== '' ? rows : ''}
          columns={columns}
          pageSize={10}
          rowsPerPageOptions={[10]}
          loading={rows ? false : true}

        />

      </div>


    </>
  )
}

export default withRouter(User)
