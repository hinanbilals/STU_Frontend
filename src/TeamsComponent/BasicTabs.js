import * as React from 'react';
import Box from '@mui/material/Box';
import Profile from './Profile';
import Leaderboard from './Leaderboard';
import Tags from './Tags';

 
 
 

export default function BasicTabs() {
 

  return (
    <Box sx={{ width: '100%'}} className="workingFine">
    

     
     <Leaderboard />
     <Tags />
    <Profile />
     
    </Box>
  );
}
