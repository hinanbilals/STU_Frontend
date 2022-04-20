 
  import React from "react";
  import { useMsal } from "@azure/msal-react";
 import { loginRequest } from "../authConfig";
  import Button from '@mui/material/Button';
  import LoginIcon from '@mui/icons-material/Login';
  import * as microsoftTeams from "@microsoft/teams-js";
  
  function handleLogin(instance) {
    instance.loginPopup(loginRequest).catch(e => {
        console.error(e);
    });
  }
 
  
  /**
   * Renders a button which, when selected, will open a popup for login
   */
   const SignInTeam = () => {
      const { instance } = useMsal();
  
      return (
        <div className="signTeam">
          <div>
            <p>Please sign in with your Microsoft account to access ThumbsUp.</p>
          <Button variant="contained" className="ml-auto" onClick={() => handleLogin(instance)}> SignIn to ThumbsUp <LoginIcon  style={{marginLeft:"7px"}}/> </Button>

          </div>

        </div>
      );
  }
  export default SignInTeam