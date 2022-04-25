import React, { useEffect } from 'react'
import { DataGrid } from '@mui/x-data-grid';
// import MenuItem from '@mui/material/MenuItem';
// import FormControl from '@mui/material/FormControl';
// import Select from '@mui/material/Select';
import { useHistory, Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEye } from '@fortawesome/free-solid-svg-icons'
import { useContext } from "react";
import { BaseUrlContext } from 'src/BaseUrlContext';
import {GridColumns, GridRowsProp, GridColDef } from '@mui/x-data-grid';

//const columns: GridColDef[] = [

  const columns: GridColumns = [ 
    { field: 'id', headerName: '#', flex: 1 },
    { field: 'senderName', headerName: 'Sender Name', flex: 3 },
    { field: 'mentionedName', headerName: 'Receiver name', flex: 3 },
    { field: 'teamName', headerName: 'Team', flex: 3 },
    { field: 'Number_of_Thumbsup', headerName: 'Thumbs Up', flex: 3},
    {
      title: "Details", headerName: 'Details', flex: 3, headerClassName: ' thumbsDetailAlign',
      renderCell: (params) => (
        <Link style={{ textAlign: 'center' }} to={'/thumbs-up/post-details/' + params.row.senderID + "/" + params.row.mentionedID + "/" + params.row.teamID} ><FontAwesomeIcon icon={faEye} /></Link>
        // <Link style={{textAlign:'center'}} to={'/thumbs-up/post-details/'+1+'/'+2} ><FontAwesomeIcon icon={faEye} /></Link>
  
      ),
    },
  
];


// const rows = [
//   { id: 1, mentionedName: 'Snow', senderName: 'Jon',teamName:'Drupal', Number_of_Thumbsup: 35, status: 1 },
//   { id: 2, mentionedName: 'Lannister', senderName: 'Cersei', teamName:'Snow',  Number_of_Thumbsup: 42, status: 0 },
//   { id: 3, mentionedName: 'Lannister', senderName: 'Jaime', teamName:'Php',  Number_of_Thumbsup: 45, status: 1 },
//   { id: 4, mentionedName: 'Stark', senderName: 'Arya', teamName:'Laravel',  Number_of_Thumbsup: 16, status: 0 },
//   { id: 5, mentionedName: 'Targaryen', senderName: 'Daenerys',teamName:'Wordpress',  Number_of_Thumbsup: 34, status: 1 },
//   { id: 6, mentionedName: 'Melisandre', senderName: 'Parker',teamName:'React',  Number_of_Thumbsup: 150, status: 0 },
//   { id: 7, mentionedName: 'Clifford', senderName: 'Ferrara',teamName:'Vue',  Number_of_Thumbsup: 44, status: 1 },
//   { id: 8, mentionedName: 'Frances', senderName: 'Rossini', teamName:'Ruby', Number_of_Thumbsup: 36, status: 0 },
//   { id: 9, mentionedName: 'Roxie', senderName: 'Harvey',teamName:'Html',  Number_of_Thumbsup: 65, status: 1 },
// ];







const ThumbsUp = () => {

  const BaseUrl = useContext(BaseUrlContext)
  const [rows, setRows] = React.useState('');
  React.useEffect(() => {
    async function fetchMyAPI() {
      try
      {
        let response = await fetch(BaseUrl + '/Dashboard')
        response = await response.json()
        response.sort((a, b) => b.Number_of_Thumbsup - a.Number_of_Thumbsup)
        response = response.map((resp, id) => {
          const data = {  id: id,   ...resp, }
          return data
        })
        setRows(response)
      }catch(error)
      {
        console.log("Internet Connection Problem",error)
      }
    }
    fetchMyAPI()
  })

  const history = useHistory();
  useEffect(() => {
    if (!localStorage.getItem('user-info')) {
      history.push("/login");
    }


  }, [history]);


  // for dropdown
  // var recivedThumbs = rows.filter((element, index) => {
  //   return element.status === 1
  // })
  // const [thumbs, setThumbs] = React.useState();
  // const [filter1, setFilter1] = React.useState('');
  // const [filter2, setFilter2] = React.useState('');


  // const ThumbsAnalytic = (event) => {

  //   console.log(event.target.value)
  //   if (event.target.value === 'given') {
  //     setFilter1(event.target.value);
  //     setThumbs(rows.filter((element, index) => {
  //       return element.status === 0
  //     }));

  //   }
  //   else {
  //     setFilter1('');
  //     setThumbs(recivedThumbs);


  //   }

  // };

  // end for dropdown
  return (

    <>

      <div className='thmbsupMain'>
        <h4>Thumbs Details</h4>
        <div>
          <div>
            {/* <FormControl sx={{ m: 1, minWidth: 120 }}>
              <Select
                sx={{ maxHeight: 35, backgroundColor: "#f3f2f1" }}
                value={filter1}
                onChange={ThumbsAnalytic}
                displayEmpty
                inputProps={{ 'aria-label': 'Without label' }}
              >
                <MenuItem value="">
                  <em>Thumbs Recived</em>
                </MenuItem>
                <MenuItem value={'given'}>Thumbs Given</MenuItem>
              </Select>

            </FormControl> */}


            {/* <FormControl sx={{ m: 1, minWidth: 120 }}>
              <Select
                sx={{ maxHeight: 35, backgroundColor: "#f3f2f1" }}
                value="filter2"
                onChange={ThumbsAnalytic}
                displayEmpty
                inputProps={{ 'aria-label': 'Without label' }}
              >
                <MenuItem value="">
                  <em>None</em>
                </MenuItem>
                <MenuItem value={10}>All - Time</MenuItem>
                <MenuItem value={20}>Today</MenuItem>
                <MenuItem value={30}>Yesterday</MenuItem>
                <MenuItem value={30}>This Month</MenuItem>
              </Select>

            </FormControl> */}

          </div>
        </div>
      </div>

      <div style={{ height: 550, width: '100%' }}>

        <DataGrid style={{ backgroundColor:'#e9eafc' }}
          rows={rows !== '' ? rows : ''}
          columns={columns}
          // getRowId={(rows) => rows.id}
          pageSize={8}
          rowsPerPageOptions={[8]}
          loading={rows !== '' ? false : true}
        />

      </div>

    </>
  )
}

export default ThumbsUp
