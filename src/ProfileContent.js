import React from "react";
import { useMsal } from "@azure/msal-react";
import { loginRequest } from './authConfig'
import Profile from './TeamsComponent/Profile'
import { apigraph } from './graph'
import { useIsAuthenticated } from "@azure/msal-react";
import SignInTeam from "./TeamsComponent/SignInTeam";


 function ProfileContent() {


    const { instance, accounts } = useMsal();
    const [graphData, setGraphData] = React.useState(null);
    const [photo, setPhoto] = React.useState(null);
    const isAuthenticated = useIsAuthenticated();
    const [count,setCount] = React.useState(0);
 
    React.useEffect(() => {
        const request = {
            ...loginRequest,
            account: accounts[0]
        };
    
        // Silently acquires an access token which is then attached to a request for Microsoft Graph data
        if(isAuthenticated && count == 0){
            instance.acquireTokenSilent(request).then((response) => {
                apigraph(response.accessToken).then(response => {setGraphData(response[0]);
                    setPhoto(response[1]);});
            }).catch((e) => {
                instance.acquireTokenPopup(request).then((response) => {
                    apigraph(response.accessToken).then(response => {setGraphData(response[0]);setPhoto(response[1]);});
                });
            });
            setCount(1);
        }
    })
    
    // function loginClick(){
    // }

    // function RequestProfileData() {
    //     const request = {
    //         ...loginRequest,
    //         account: accounts[0]
    //     };

    //     // Silently acquires an access token which is then attached to a request for Microsoft Graph data
    //     instance.acquireTokenSilent(request).then((response) => {
    //         apigraph(response.accessToken).then(response => setGraphData(response));
    //     }).catch((e) => {
    //         instance.acquireTokenPopup(request).then((response) => {
    //             apigraph(response.accessToken).then(response => setGraphData(response));
    //         });
    //     });
    // }
 
    return (
        isAuthenticated
        ? 
        (graphData && photo ? <Profile graphData={graphData} photo={photo}/>: "Loading ...")
        :
        (<SignInTeam/>)
    )

};

export default ProfileContent