import * as React from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import { useContext } from "react";
import { BaseUrlContext } from 'src/BaseUrlContext';



const Rewards = (props) => {

    const [detail, setDetail] = React.useState();
    const BaseUrl = useContext(BaseUrlContext)

    const id = "'" + props.match.params.id + "'";


    React.useEffect(() => {
        async function fetchMyAPI() {

            try {

                let response = await fetch(BaseUrl + '/RewardDetails/' + id)
                response = await response.json()
                console.log(response)
                setDetail(response)
            }
            catch (error) {
                console.log("Internet Connection Problem", error)
            }

        }
        fetchMyAPI()
    })



    return (
        <div className=''>
            <div style={{ textAlign: "center", marginTop: "10vh", marginBottom: "10vh" }}>
                <h3>Details</h3>
            </div>
            {detail ? (

                detail.map((detail, id) => (
                    <div style={{ paddingRight: "20vh", paddingLeft: "20vh" }} key={id}>
                        <Card sx={{ maxWidth: '100%' }} key={id}>
                            <div className='postDetailCard'>
                                <CardHeader
                                    avatar={
                                        <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
                                            {detail.senderName.toUpperCase().charAt(0)}

                                        </Avatar>
                                    }
                                    action={
                                        <IconButton aria-label="settings">

                                        </IconButton>
                                    }
                                    title={detail.senderName}
                                    subheader={detail.date}
                                />

                                <CardHeader
                                    avatar={
                                        <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
                                            {detail.mentionedName.toUpperCase().charAt(0)}

                                        </Avatar>
                                    }
                                    action={
                                        <IconButton aria-label="settings">

                                        </IconButton>
                                    }
                                    title={detail.mentionedName}
                                    subheader={detail.date}
                                />
                            </div>
                            <CardContent>
                                <p>Team: {detail.teamName}</p>
                                <Typography variant="body2" color="text.secondary">
                                    {detail.message}
                                </Typography>
                            </CardContent>

                        </Card>
                        <br />
                    </div>
                ))
            ) : ("Loading...")}
            <div style={{ paddingRight: "20vh", paddingLeft: "20vh" }}>



            </div>
            <br />
        </div>
    );
}

export default Rewards