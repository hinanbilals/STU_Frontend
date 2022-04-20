import { graphConfig } from "./authConfig";
import * as React from 'react';
import axios from 'axios';
/**
 * Attaches a given access token to a Microsoft Graph API call. Returns information about the user
 */

export async function apigraph(accessToken) {
    const headers = new Headers();

    const bearer = `Bearer ${accessToken}`;
 
    headers.append("Authorization", bearer);

    var options = {
        method: "GET",
        headers: headers
    };

    var user_info = []

    user_info[0] = await fetch(graphConfig.graphMeEndpoint, options)
        .then(response => response.json())
        .catch(error => console.log(error));


    options = {
        headers: headers,
        responseType: "arraybuffer"
    };

    try{
        const fetchResponse = await axios("https://graph.microsoft.com/v1.0/me/photo/$value", {
            headers: { Authorization: `Bearer ${accessToken}` },
            responseType: "arraybuffer"
          });
        user_info[1] = Buffer.from(fetchResponse.data, "binary").toString("base64");
    }
    catch {
        user_info[1] = "avatar"
    }
    

    console.log("UserInfo", user_info[1])
    return user_info
}

// export async function getUserImages(accessToken) {
//     const headers = new Headers();

//     const bearer = `Bearer ${accessToken}`;
 
//     headers.append("Authorization", bearer);

//     options = {
//         headers: headers,
//         responseType: "arraybuffer"
//     };

//     try{
//         const fetchResponse = await axios("https://graph.microsoft.com/v1.0/me/photo/$value", {
//             headers: { Authorization: `Bearer ${accessToken}` },
//             responseType: "arraybuffer"
//           });
//         user_info[1] = Buffer.from(fetchResponse.data, "binary").toString("base64");
//     }
//     catch {
//         user_info[1] = "avatar"
//     }
// }