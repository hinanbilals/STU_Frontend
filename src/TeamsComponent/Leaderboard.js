import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
// import Profile from './Profile';
import LinearProgress from '@mui/material/LinearProgress';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableRow from '@mui/material/TableRow';
import { useContext } from "react";
import { BaseUrlContext } from 'src/BaseUrlContext';
import { red } from '@mui/material/colors';
import CardHeader from '@mui/material/CardHeader';
import Avatar from '@mui/material/Avatar';

// import { useHistory } from 'react-router-dom';

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(0),
  textAlign: 'left',
  color: theme.palette.text.secondary,

}));

function Leaderboard() {
  const BaseUrl = useContext(BaseUrlContext)

  // dropdown state
  const [filter1, setFilter1] = React.useState('');
  const [filter2, setFilter2] = React.useState('');
  const [thumbs, setThumbs] = React.useState('');
  const [getAllData, setAllData] = React.useState('');


  // const history=useHistory();
  //   React.useEffect(()=>{
  //     if(!localStorage.getItem('user-info'))
  //     {
  //       history.push("/signinteam");
  //     } 


  //     },[history]);
  React.useEffect(() => {
    async function fetchMyAPI() {
      try{
      let response = await fetch('https://2c3d-119-152-148-245.ngrok.io/getAll')
        response = await response.json()
        response.sort((a, b) => b.thumbsup - a.thumbsup)
        setAllData(response);
        setThumbs(response)
      }
    catch(error)
    {
      console.log("Internet Connection Problem",error)
    }

    }
    fetchMyAPI()
  }, [])







  const RecivedFilter = (event) => {
    setFilter1(event.target.value);
    async function recivdThumbs() {
      setThumbs('')
      if (event.target.value === "recived_today") {
    
    try{
      let response = await fetch(BaseUrl + '/receivedThumbsToday')
      response = await response.json()
      response.sort((a, b) => b.thumbsup - a.thumbsup)
      setThumbs(response)
        }
      catch(error)
      {
        console.log("Internet Connection Problem",error)
      }
      

      }
      else if (event.target.value === "recived_last_week") {
        try{
          let response = await fetch(BaseUrl + '/receivedThumbsinlastweek')
          response = await response.json()
          response.sort((a, b) => b.thumbsup - a.thumbsup)
          setThumbs(response)
        }
      catch(error)
      {
        console.log("Internet Connection Problem",error)
      }
  

      }
      else if (event.target.value === "recived_last_month") {
             try{
              let response = await fetch(BaseUrl + '/receivedThumbsinlastMonth')
              response = await response.json()
              response.sort((a, b) => b.thumbsup - a.thumbsup)
        }
      catch(error)
      {
        console.log("Internet Connection Problem",error)
      }
       

      } else {

        setThumbs(getAllData)
      }
    }

    recivdThumbs();


  };



  const GivenFilter = (event) => {
    setFilter2(event.target.value)
    console.log("filter given")
    console.log(event.target.value);

  };



  //end drupdown state

  return (
    <>
      <Box sx={{ flexGrow: 1 }} className='LeaderBoardMain'>
        <Grid container spacing={1}  >
          <Grid item={true} xs={12} md={12} lg={12} style={{ height: "650px" }} >
            <Item className="forBoxShade">

              <Box sx={{ flexGrow: 1 }}   >
                <AppBar position="static" className="forBoxShade" style={{ backgroundColor: "transparent" }}>
                  <Toolbar>
                    <Typography
                      component="div"
                      color="black"
                      sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
                    >

                    </Typography>

                    {/* dropdowns */}
                    <FormControl sx={{ m: 1, minWidth: 120 }}>
                      <Select
                        sx={{ maxHeight: 35, backgroundColor: "white" }}


                        value={filter1}
                        placeholder="Select some "
                        onChange={RecivedFilter}

                        displayEmpty
                        inputProps={{ 'aria-label': 'Without label' }}
                      >

                        <MenuItem value=''>
                          <em>All Recived</em>
                        </MenuItem>
                        <MenuItem value={"recived_today"} >Today</MenuItem>
                        <MenuItem value={"recived_last_week"}>Last Week</MenuItem>
                        <MenuItem value={"recived_last_month"}>Last Month</MenuItem>


                      </Select>
                    </FormControl>




                    <FormControl sx={{ m: 1, minWidth: 120 }}>
                      <Select
                        sx={{ maxHeight: 35, backgroundColor: "white" }}
                        value={filter2}
                        onChange={GivenFilter}
                        displayEmpty
                        inputProps={{ 'aria-label': 'Without label' }}
                      >
                        <MenuItem value="">
                          <em>All Given</em>
                        </MenuItem>
                        <MenuItem value={"given_today"} >Today</MenuItem>
                        <MenuItem value={"given_last_week"}>Last Week</MenuItem>
                        <MenuItem value={"given_last_month"}>Last Month</MenuItem>
                      </Select>
                    </FormControl>

                    {/* end dropdowns */}

                  </Toolbar>
                </AppBar>
              </Box>
            </Item>




            <TableContainer component={Paper} sx={{ height: 550 }}>
              {thumbs !== '' ? (
                <>
                  <Table sx={{ height: 400 }} aria-label="simple table">
                    
                    <TableBody>
                      <TableRow >
                        <TableCell align="left" >Rank</TableCell>
                        <TableCell align="left">Person</TableCell>
                        <TableCell align="right">Thumbs</TableCell>

                      </TableRow>
                      {thumbs.map((thumbs, id) => (
                        <TableRow style={{backgroundColor:'#e9eafc'}} key={id}  sx={{ '&:last-child td, &:last-child th': { border: 0 } }} >

                          <TableCell  align="center"   >{id + 1}</TableCell>
                          <TableCell align="left" className='rowSetting img-fluid' >
                          <CardHeader
                            avatar={
                              <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
                                {thumbs.name.toUpperCase().charAt(0)}
                              </Avatar>
                            }
                            
                          />
                            <span>{thumbs.name}</span>
                          </TableCell>
                          <TableCell align="right" >{thumbs.thumbsup + " 👍"}</TableCell>
                            
                        </TableRow>
                      ))}
                    </TableBody>

                  </Table></>) : (<><LinearProgress /><div className='notFound'>Loading. . .</div></>)}
            </TableContainer>

            {/* end here */}

          </Grid>



          {/* <Grid maxHeight={'50%'} item xs={12} md={3} lg={3} backgroundColor="#f5f5f5" borderRadius={'10px'}>

            <div className='ProfileBlock'>
              <Profile />
              <h1>test all</h1>
            </div>
          </Grid> */}

        </Grid>
      </Box>
    </>
  );
}


export default Leaderboard;






