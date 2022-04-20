import * as React from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';


 

const PostDetailCard=(props)=> {
 
  const message=props.message;
 

  return (
      <div>

    <Card sx={{ maxWidth: '100%' }}>
      <div className='postDetailCard'>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
             {message.senderName.toUpperCase().charAt(0)}
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
           
          </IconButton>
        }
        title={message.senderName}
        subheader={message.date}
      />

<CardHeader
        avatar={
          <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
          {message.mentionedName.toUpperCase().charAt(0)}
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
         
          </IconButton>
        }
        title={message.mentionedName}
        subheader={message.date}
      />
    </div>
      <CardContent>
     <p>Team: {message.teamName}</p>
        <Typography variant="body2" color="text.secondary">
          {message.message}
        </Typography>
      </CardContent>
     
    </Card>
    <br />
    </div>
  );
}

export default  PostDetailCard