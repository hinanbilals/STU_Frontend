import React, { useEffect, useState } from 'react'
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import ChannelDetail from './ChannelDetail';

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

const rows = [
  {
    id: 1, team: 'Snow', channel:
      [
        { id: 1, channal_name: 'Open Sourece  ' },
        { id: 2, channal_name: 'Limited ' },
        { id: 3, channal_name: 'FeedBack' },
      ], age: 35
  },


  {
    id: 2, team: 'Rain', channel: [
      { id: 4, channal_name: 'Front Foot' },
      { id: 5, channal_name: 'Protection Group' },
      { id: 6, channal_name: 'Development' },
    ], age: 35
  },

  {
    id: 3, team: 'Clouds', channel:
      [
        { id: 7, channal_name: 'Java Script' },
        { id: 8, channal_name: 'Php' },
        { id: 9, channal_name: 'Laravel' },
      ], age: 35
  },

  {
    id: 4, team: 'Water', channel:
      [
        { id: 10, channal_name: 'Drupal' },
        { id: 11, channal_name: 'Mayonity' },
        { id: 12, channal_name: 'Comuinty' },
      ], age: 35
  },
];


const channel = [
  {
    id: 1,
    channelName: "OpenSource"
  },
  {
    id: 2,
    channelName: "Limited"
  },
  {
    id: 3,
    channelName: "FeedBack"
  },
  {
    id: 4,
    channelName: "Front Foot"
  },
  {
    id: 5,
    channelName: "Protection Group"
  },
  {
    id: 6,
    channelName: "Development"
  },
  {
    id: 7,
    channelName: "JavaScript"
  },
  {
    id: 8,
    channelName: "PhP"
  },
  {
    id: 9,
    channelName: "Laravel"
  },
  {
    id: 10,
    channelName: "Drupal"
  },
  {
    id: 11,
    channelName: "Mayonity"
  },
  {
    id: 12,
    channelName: "Comunity"
  },
]




function UserDetail(props) {

  useEffect(() => {
    setApiData([
      {
        id: 1,
        channelName: "SnowFalling"
      }
    ])
  }, []);

  const [apiData, setApiData] = useState([{}]);

  // const [expandAccordian, setexpandAccordian] = useState(false);

  function ApiCall(event) {
    let id = event.target.value;

    const channelInfo = channel.filter(itemInArray => itemInArray.id === id);
    setApiData(channelInfo);
  }


  return (
    <div>

      <div>
        <Box>
          <Grid>
            <Grid item xs={12}>

              <Item className='mainHeadingInfo'>
                <div>
                  <h5>Name: Rizwan</h5>
                </div>
                <div>
                  <h5>Thumbs:{props.match.params.id}  👍</h5>
                </div>


              </Item>

            </Grid>
          </Grid>
        </Box>

      </div>
      <br />
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={1} >



          <Grid item xs={12} sm={12} md={3}  >


            <Item><div className='accordianWidth'>
              {rows.map((row, index) =>
               (
                <>
              
                <Accordion key={index} className='shadowHide' defaultExpanded={index===0?true: false} >
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls={row.id}
                    id={row.id}
                  >
                    <Typography>{row.team}</Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <ul className='listStyleSet'>
                      {row.channel.map((ch,i) => (
                        <li onClick={ApiCall} key={i} value={ch.id}  >{ch.channal_name}</li>
                      ))} </ul>


                  </AccordionDetails>
            
                </Accordion>
                </>
              ))

              }

            </div></Item>
          </Grid>


          <Grid item xs={12} sm={12} md={9}>
            <Item>
              {apiData[0].id ? <ChannelDetail data={apiData} /> : <p>Loading Please Wait . . .</p>}

            </Item>
          </Grid>



        </Grid>
      </Box>




    </div>



  );
}

export default UserDetail
