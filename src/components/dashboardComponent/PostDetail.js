import React, { useEffect } from 'react';
import { withRouter } from 'react-router-dom';
import PostDetailCard from './PostDetailCard';
import { useHistory } from 'react-router-dom';
import CircularProgress from '@mui/material/CircularProgress';
import { useContext } from "react";
import { BaseUrlContext } from 'src/BaseUrlContext';





const PostDetail = (props) => {
  const BaseUrl = useContext(BaseUrlContext)
  const history = useHistory();
  useEffect(() => {
    if (!localStorage.getItem('user-info')) {
      history.push("/login");
    }
  }, [history]);

  const senderId = "'" + props.match.params.senderId + "'";
  const mentionedID = "'" + props.match.params.mentionedID + "'";
  const teamID = "'" + props.match.params.teamID + "'";
  const [messages, setMessages] = React.useState('');
  React.useEffect(() => {

    async function fetchMyAPI() {
      let response = await fetch(BaseUrl + '/DashboardDetails/' + senderId + '/' + mentionedID + '/' + teamID)
      response = await response.json()
      setMessages(response)

    }
    fetchMyAPI()
  })

  return (
    <>
      <div>

        {messages !== '' ? messages.map((message, id) => (
          <PostDetailCard key={id} message={message} />
        )) : (<div className='loadPostDetail'>  <CircularProgress /></div>)}


      </div>
    </>
  )
}

export default withRouter(PostDetail)
