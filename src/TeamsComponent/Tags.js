
import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import LinearProgress from '@mui/material/LinearProgress';
// import Typography from '@mui/material/Typography';
// import MenuItem from '@mui/material/MenuItem';
// import FormControl from '@mui/material/FormControl';
// import Select from '@mui/material/Select';
import Profile from './Profile';
import { useContext } from "react";
import { BaseUrlContext } from 'src/BaseUrlContext';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';



const Item = styled(Paper)(({ theme }) => ({
    ...theme.typography.body2,
    padding: theme.spacing(0),
    // textAlign: 'center',
    color: theme.palette.text.secondary,
}));


function Tags() {
    const BaseUrl = useContext(BaseUrlContext)

    // const [dropdownValue, setDropDownValue] = React.useState('');
    // const [apiData, setApiData] = React.useState('');
    const [tagslisting, setTags] = React.useState('');

    React.useEffect(() => {
        async function fetchMyAPI() {

            try {
                let response = await fetch(BaseUrl + '/hashtags')
                response = await response.json()
                response.sort((a, b) => b.Total_hash_used - a.Total_hash_used)
                setTags(response)
            }
            catch (error) {
                console.log("Internet Connection Problem", error)
            }


        }
        fetchMyAPI()
    })


    // const TagsChanged = (event) => {
    //     if (event.target.value === 'today') {

    //         setDropDownValue(event.target.value);
    //         setTags([
    //             { id: 1, name: 'Today Lannister' },
    //             { id: 2, name: 'Today Melisandre' },
    //             { id: 3, name: 'Today Melisandre' },
    //             { id: 4, name: 'Today Targaryen' },
    //             { id: 5, name: 'Today Lannister' },
    //             { id: 6, name: 'Today Targaryen' },
    //             { id: 7, name: 'Today Lannister' },
    //             { id: 8, name: 'Today Targaryen' },
    //             { id: 9, name: 'Today Lannister' },
    //             { id: 1, name: 'Today Lannister' },
    //             { id: 2, name: 'Today Melisandre' },
    //             { id: 3, name: 'Today Melisandre' },
    //             { id: 4, name: 'Today Targaryen' },
    //             { id: 5, name: 'Today Lannister' },
    //             { id: 6, name: 'Today Targaryen' },
    //             { id: 7, name: 'Today Lannister' },
    //             { id: 8, name: 'Today Targaryen' },
    //             { id: 9, name: 'Today Lannister' },
    //             { id: 1, name: 'Today Lannister' },
    //             { id: 2, name: 'Today Melisandre' },
    //             { id: 3, name: 'Today Melisandre' },
    //             { id: 4, name: 'Today Targaryen' },
    //             { id: 5, name: 'Today Lannister' },
    //             { id: 6, name: 'Today Targaryen' },
    //             { id: 7, name: 'Today Lannister' },
    //             { id: 8, name: 'Today Targaryen' },
    //             { id: 9, name: 'Today Lannister' },
    //             { id: 4, name: 'Today Targaryen' },
    //             { id: 5, name: 'Today Lannister' },
    //             { id: 6, name: 'Today Targaryen' },
    //             { id: 7, name: 'Today Lannister' },
    //             { id: 8, name: 'Today Targaryen' },
    //             { id: 9, name: 'Today Lannister' },
    //             { id: 1, name: 'Today Lannister' },
    //             { id: 2, name: 'Today Melisandre' },
    //             { id: 3, name: 'Today Melisandre' },
    //             { id: 4, name: 'Today Targaryen' },
    //             { id: 5, name: 'Today Lannister' },
    //             { id: 6, name: 'Today Targaryen' },
    //             { id: 7, name: 'Today Lannister' },
    //             { id: 8, name: 'Today Targaryen' },
    //             { id: 9, name: 'Today Lannister' },

    //         ]);
    //     }

    //     else if (event.target.value === 'yesterday') {

    //         setDropDownValue(event.target.value);
    //         setTags([
    //             { id: 1, name: 'yersterday Lannister' },
    //             { id: 2, name: 'yersterday Melisandre' },
    //             { id: 3, name: 'yersterday Melisandre' },
    //             { id: 4, name: 'yersterday Targaryen' },
    //             { id: 5, name: 'yersterday Lannister' },
    //             { id: 6, name: 'yersterday Targaryen' },
    //             { id: 7, name: 'yersterday Lannister' },
    //             { id: 8, name: 'yersterday Targaryen' },
    //             { id: 9, name: 'yersterday Lannister' },
    //         ]);
    //     }
    //     else if (event.target.value === 'thismonth') {
    //         setDropDownValue(event.target.value);
    //         setTags([
    //             { id: 1, name: 'thismonth Lannister' },
    //             { id: 2, name: 'thismonth Melisandre' },
    //             { id: 3, name: 'thismonth Melisandre' },
    //             { id: 4, name: 'thismonth Targaryen' },
    //             { id: 5, name: 'thismonth Lannister' },
    //             { id: 6, name: 'thismonth Targaryen' },
    //             { id: 7, name: 'thismonth Lannister' },
    //             { id: 8, name: 'thismonth Targaryen' },
    //             { id: 9, name: 'thismonth Lannister' },
    //         ]);

    //     } 
    //     else {
    //         setDropDownValue('');
    //         setTags(apiData);
    //     }

    // };

    // const TagsChanged=(event)=>{
    //  console.log(event.target.value)
    // }



    return (
        <div>
            <Box sx={{ flexGrow: 1 }} >
                <Grid container spacing={2} >
                    <Grid item xs={12} md={12} lg={12}>
                        <Item className='forBoxShade'>

                            <Box sx={{ flexGrow: 1 }}   >
                                <AppBar position="static" className="forBoxShade" style={{ backgroundColor: "transparent" }}>
                                    <Toolbar>
                                        {/* <Typography

                                            noWrap
                                            component="div"
                                            color="black"
                                            sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
                                        >
                                            Trending Tags
                                        </Typography> */}

                                        {/* dropdowns */}
                                        {/* <FormControl sx={{ m: 1, minWidth: 120 }}>
                                            <Select
                                                sx={{ maxHeight: 35, backgroundColor: "white" }}


                                                value={dropdownValue}
                                                onChange={TagsChanged}
                                                displayEmpty
                                                inputProps={{ 'aria-label': 'Without label' }}
                                            >

                                                <MenuItem value="" >
                                                    <em>All - Time</em>
                                                </MenuItem>

                                                <MenuItem value={'today'}>Today</MenuItem>
                                                <MenuItem value={'yesterday'}>Yesterday</MenuItem>
                                                <MenuItem value={'thismonth'}>This Month</MenuItem>


                                            </Select>
                                        </FormControl> */}



                                        {/* end dropdowns */}

                                    </Toolbar>
                                </AppBar>
                            </Box>

                        </Item>
                        {/* data list */}
                        <br />


                        <TableContainer component={Paper} sx={{ height: 550 }}>
                        {tagslisting !== '' ? 
                            <Table sx={{ height: 400 }} aria-label="simple table">
                                <TableHead>
                                    <TableRow>
                                        <TableCell align="center" >Count</TableCell>
                                        <TableCell align="center" className='rowSetting'>HashTags</TableCell>


                                    </TableRow>
                                </TableHead>

                                <TableBody>

                                    {tagslisting.map((tags, id) => (

                                        <TableRow key={id} sx={{ '&:last-child td, &:last-child th': { border: 0 } }} >
                                            <TableCell align="center" >{tags.Total_hash_used}</TableCell>
                                            <TableCell align="center" >{tags.hashtag}</TableCell>
                                        </TableRow>
                                    ))}
                                    
                                </TableBody>

                            </Table>
                            :(<><LinearProgress /><div className='notFound'>Loading. . .</div></>)}
                        </TableContainer>
                        {/* end table */}
                        {/* end data list */}
                    </Grid>



                    {/* <Grid maxHeight={'100%'} xs={12} md={3} lg={3} backgroundColor="#f5f5f5" borderRadius={'10px'}>
                        <div>
                            <div className='ProfileBlock'>
                                <Profile />
                            </div>
                        </div>
                    </Grid> */}

                </Grid>
            </Box>

        </div>
    );
}

export default Tags;