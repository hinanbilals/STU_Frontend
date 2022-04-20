import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
// import { useIsAuthenticated } from "@azure/msal-react";
import './scss/style.scss'
import './App.css';
import ProfileContent from './ProfileContent';


const loading = (
  <div className="pt-3 text-center">
    <div className="sk-spinner sk-spinner-pulse"></div>
  </div>
)

// Containers
const DefaultLayout = React.lazy(() => import('./layout/DefaultLayout'))

// Pages
const Login = React.lazy(() => import('./views/pages/login/Login'))
const Register = React.lazy(() => import('./views/pages/register/Register'))
const Page404 = React.lazy(() => import('./TeamsComponent/PageNotFound'))
const Page500 = React.lazy(() => import('./views/pages/page500/Page500'))
const Leaderboard = React.lazy(() => import('./TeamsComponent/Leaderboard'))
const Tags = React.lazy(() => import('./TeamsComponent/Tags'))
const SignInTeam = React.lazy(() => import('./TeamsComponent/SignInTeam'))
const Rewards = React.lazy(() => import('./TeamsComponent/Rewards'))



const App = () => {



  return (
    <BrowserRouter>
      <React.Suspense fallback={loading}>

        {/* Changing Things */}
        {/* {isAuthenticated ?
          <Switch>

            <Route exact path="/leaderboard" name="Leaderboard" render={(props) => <Leaderboard {...props} />} />
            <Route exact path="/tags" name="Tags" render={(props) => <Tags {...props} />} />
            <Route exact path="/profile" name="Profile" render={(props) => <ProfileContent {...props} />} />

          </Switch>
          : (
            <Switch>
              <Route exact path="/signinteam" name="SignInTeam" render={(props) => <SignInTeam {...props} />} />
              <Route exact path="/login" name="Login Page" render={(props) => <Login {...props} />} />
              <Route exact path="/register" name="Register Page" render={(props) => <Register {...props} />} />
              <Route exact path="/500" name="Page 500" render={(props) => <Page500 {...props} />} />
              <Route path="/" name="Home" render={(props) => <DefaultLayout {...props} />} />
              <Route exact path="/*" name="Page404" render={(props) => <Page404 {...props} />} />
            </Switch>

 


          )} */}


        <Switch>

          <Route exact path="/leaderboard" name="Leaderboard" render={(props) => <Leaderboard {...props} />} />
          <Route exact path="/tags" name="Tags" render={(props) => <Tags {...props} />} />
          <Route exact path="/profile" name="Profile" render={(props) => <ProfileContent {...props} />} />
          <Route exact path="/rewards/:id" name="Rewards" render={(props) => <Rewards {...props} />} />
          <Route exact path="/signinteam" name="SignInTeam" render={(props) => <SignInTeam {...props} />} />
          <Route exact path="/login" name="Login Page" render={(props) => <Login {...props} />} />
          <Route exact path="/register" name="Register Page" render={(props) => <Register {...props} />} />
          <Route exact path="/500" name="Page 500" render={(props) => <Page500 {...props} />} />
          <Route path="/" name="Home" render={(props) => <DefaultLayout {...props} />} />
          <Route exact path="/*" name="Page404" render={(props) => <Page404 {...props} />} />

        </Switch>

      </React.Suspense>
    </BrowserRouter>
  )

}







export default App



