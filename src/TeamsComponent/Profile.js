import * as React from 'react';
import Button from '@mui/material/Button';
import CircularProgress from '@mui/material/CircularProgress';
import { useContext } from "react";
import { BaseUrlContext } from 'src/BaseUrlContext';
import { Link } from 'react-router-dom'
import { Avatar } from '@mui/material';
import { CAvatar } from '@coreui/react'

function Profile(props) {
  const [profile, setProfile] = React.useState();
  const [imageUrl, setimageUrl] = React.useState();
  const [avatar, setAvatar] = React.useState();
  const BaseUrl = useContext(BaseUrlContext)

  // console.log("GraphPhoto",props.photo);

  const id = '"'+props.graphData.id+'"'

  
  React.useEffect(() => {
    async function fetchMyAPI() {
      let response = await fetch(BaseUrl + '/receivedThumbsup/'+id)
      response = await response.json()
      setProfile(response[0])
      const fullName = props.graphData.displayName.split(' ');
      const initials = fullName.shift().charAt(0) + fullName.pop().charAt(0);
      props.photo === 'avatar' ? setAvatar(initials.toUpperCase()) : setimageUrl("data:image/jpeg;base64, " + props.photo)
    }
    fetchMyAPI()
  },[])
  return (
 


    <div className="ProfileMain">

      {profile !== "" ? (<>
        <div className="ProfileImage">
          <br /><br /><br /><br />
          {imageUrl && <img src={imageUrl} className="img-fluid" alt="..." />}
          {avatar && <CAvatar size='xl' color="secondary" >{avatar}</CAvatar>} 
          {/* {imageUrl && <Avatar alt='my-user-avatar' src={imageUrl} />} */}
        </div>

        <br />
        <div className='ProfileName'>{props.graphData.displayName}</div>
        <div>Total Thumbs</div>
        <h4>{profile?profile.Received:''} 👍</h4>
        <br />

        <Link style={{ textAlign: 'center' }} to={'/rewards/' + props.graphData.id} >
          <Button variant="outlined" color='primary'>Details</Button>
        </Link>

      </>) : (<div className='loadProfile'>  <CircularProgress /></div>)

      }
 
    </div>
  );
}

export default Profile;