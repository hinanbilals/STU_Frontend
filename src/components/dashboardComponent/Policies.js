import React, { useState, useEffect, useContext } from 'react'
import { useHistory } from 'react-router-dom'
import { BaseUrlContext } from 'src/BaseUrlContext'
import Typography from '@mui/material/Typography'
import { Button } from '@mui/material'
import Box from '@mui/material/Box'
import TextField from '@mui/material/TextField'
import axios from 'axios'
import CircularProgress from '@mui/material/CircularProgress'

const Policies = () => {
  const BaseUrl = useContext(BaseUrlContext)
  const [userThumbsup, setUserThumbsup] = useState(0)
  const [thumbsup, setThumbsup] = useState(0)
  const [time, setTime] = useState(0)
  const [userTime, setUserTime] = useState(0)
  const [changeGeneralPolicy, setChangeGeneralPolicy] = useState(false)
  const [changeUserPolicy, setChangeUserPolicy] = useState(false)
  const [loading, setLoading] = useState(false)
  const [userLoading, setUserLoading] = useState(false)

  const history = useHistory()
  useEffect(() => {
    if (!localStorage.getItem('user-info')) {
      history.push('/login')
    }
  }, [history])

  useEffect(() => {
    axios
      .get(BaseUrl + '/get_policy')
      .then((r) => {
        let data = r.data[0]
        setThumbsup(data.policy_thumbsup_given)
        setTime(data.thumbsup_given_days)
        setUserThumbsup(data.policy_mentioned_given)
        setUserTime(data.policy_mentioned_days)
      })
      .catch((e) => console.log('Error getting details'))
  }, [])

  return (
    <div>
      <Typography variant="h4">Policies</Typography>

      {/* For General Policy */}
      <Box
        sx={{
          '& .MuiTextField-root': { mr: 2, mt: 2, mb: 2 },
          borderRadius: 2,
        }}
        p={2}
        mb={2}
        mt={2}
        noValidate
        autoComplete="off"
        bgcolor="white"
      >
        <Typography variant="h6">ThumbsUp user can send in given time</Typography>
        <div>
          <TextField
            id="filled-number"
            label="ThumbsUp"
            type="number"
            
            value={thumbsup}
            onChange={(e) => {
              setThumbsup(e.target.value)
              setChangeGeneralPolicy(true)
            }}
            InputLabelProps={{
              shrink: true,
            }}
            variant="filled"
          />
          <TextField
            id="filled-number"
            label="Day"
            type="number"
            value={time}
            onChange={(e) => {
              setTime(e.target.value)
              setChangeGeneralPolicy(true)
            }}
            InputLabelProps={{
              shrink: true,
            }}
            variant="filled"
          />
        </div>
        {loading ? (
          <CircularProgress />
        ) : changeGeneralPolicy ? (
          <Button
            variant="contained"
            onClick={() => {
              console.log(`Chaning User Policy. Thumbsup = ${thumbsup}. Days = ${time}`)
              setLoading(true)
              console.log('Data', { count: thumbsup, days: time })
              axios
                .put(BaseUrl + '/thumbsup_given_policy', { count: thumbsup, days: time })
                .then((r) => {
                  console.log('Response: ', r)
                  setLoading(false)
                })
              setChangeGeneralPolicy(false)
            }}
          >
            Change Policy
          </Button>
        ) : (
          <Button variant="contained" disabled>
            Change Policy
          </Button>
        )}
      </Box>

      {/* For user policy */}
      <Box
        sx={{
          '& .MuiTextField-root': { mr: 2, mt: 2, mb: 2 },
          borderRadius: 2,
        }}
        p={2}
        noValidate
        autoComplete="off"
        bgcolor="white"
      >
        <Typography variant="h6">
          ThumbsUp user can send to a particular user in given time
        </Typography>
        <div>
          <TextField
            id="filled-number"
            label="ThumbsUp"
            type="number"
            value={userThumbsup}
            onChange={(e) => {
              setUserThumbsup(e.target.value)
              setChangeUserPolicy(true)
            }}
            InputLabelProps={{
              shrink: true,
            }}
            variant="filled"
          />
          <TextField
            id="filled-number"
            label="Day"
            type="number"
            value={userTime}
            onChange={(e) => {
              setUserTime(e.target.value)
              setChangeUserPolicy(true)
            }}
            InputLabelProps={{
              shrink: true,
            }}
            variant="filled"
          />
        </div>
        {userLoading ? (
          <CircularProgress />
        ) : changeUserPolicy ? (
          <Button
            variant="contained"
            onClick={() => {
              console.log(`Chaning User Policy. Thumbsup = ${userThumbsup}. Days = ${userTime}`)
              setUserLoading(true)
              console.log('Data', { count: userThumbsup, days: userTime })
              axios
                .put(BaseUrl + '/policy_mentioned', { count: userThumbsup, days: userTime })
                .then((r) => {
                  console.log('Response: ', r)
                  setUserLoading(false)
                })
              setChangeUserPolicy(false)
            }}
          >
            Change Policy
          </Button>
        ) : (
          <Button variant="contained" disabled>
            Change Policy
          </Button>
        )}
      </Box>
    </div>
  )
}

export default Policies
