import React from 'react';
import './App.css';
import { useSelector } from "react-redux";
import { RootStore } from "./Store";
import ButtonAppBar from './components/AppBar'
import { Card, CardContent, CardMedia } from '@material-ui/core';


import Login from './components/Login'
import DataTable from './components/Table';
import CollectionCreate from './components/CollectionCreate';
import SignUp from './components/SignUp';
// import SnackBar from './components/SnackBar';
import CollectionTable from './components/CollectionTable';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

// import SideDrawer from './components/Drawer';


function App() {

  const repoState = useSelector((state: RootStore) => state.repo);
  // const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => setUserName(event.target.value);
  // const handleSubmit = () => dispatch(GetRepo(userName));

  return (
    <div className="App">
      {/* <SideDrawer /> */}
      <ButtonAppBar />

      <div className="main">
        {repoState.user.id !== "" &&
          <div className="dashboard">
            <h1>DASHBOARD</h1>
            {repoState.user.name !== "" &&
              <div>
                <Card style={{ width: "300px", backgroundColor: '#ff9966' }}>

                  <CardContent>
                    <img
                      style={{ width: '200px', height: '200px' }}
                      src={repoState.user.avatar}
                      alt={""}
                    />
                    <h1>{repoState.user.github}</h1>
                    <h4>Collections: {repoState.user.collectionList.length}</h4>
                    <h4>Repositories: {repoState.user.allRepo.length}</h4>
                    <h4>Follower: {repoState.user.follower}</h4>
                    <h4>Following: {repoState.user.following}</h4>
                  </CardContent>
                </Card>

                <Card style={{ width: "300px", backgroundColor: '#ffcc99' }}>
                <CardContent>
                  <h3>Total Collections</h3>
                  <h1>{repoState.user.collectionList.length}</h1>
                </CardContent>
                </Card>
              </div>
            }
            <div className="routes">
              <div>
                <Router>
                  <Link to="/collection-create">Collection Create</Link>
                  {' '}
                  <Link to="/collections">Collections</Link>
                  {' '}
                  <Link to="/my-repos">My Repos</Link>
                  {' '}
                  <div>
                    <Switch>
                      <Route path="/collection-create">
                        <CollectionCreatePage />
                      </Route>

                      <Route path="/collections">
                        <CollectionListPage />
                      </Route>

                      <Route path="/my-repos">
                        <MyRepoPage />
                      </Route>

                      <Route path="/">
                        <HomePage />
                      </Route>

                    </Switch>
                  </div>
                </Router>
              </div>
            </div>
          </div>
        }

        {repoState.user.id === "" &&
          <div className="welcome">
            <h1>Welcome</h1>
            <div className="routes">
              <div>
                <Router>
                  <Link to="/register">Register</Link>
                  {' '}
                  <Link to="/login">Login</Link>
                  {' '}

                  <div>
                    <Switch>

                      <Route path="/register">
                        <RegisterPage />
                      </Route>

                      <Route path="/login">
                        <LoginPage />
                      </Route>

                      <Route path="/">
                        <HomePage />
                      </Route>

                    </Switch>
                  </div>
                </Router>
              </div>
            </div>
          </div>
        }
      </div>



      {/* <br /> */}

      {/* <br /> */}

      {/* <div>

        {repoState.user.name == "" &&
          <div>
            <Login />
            <SignUp />
          </div>
        }

        {repoState.user &&
          <SnackBar />
        }

        {repoState.user.name != "" &&
          <div>
            <CollectionCreate />
          </div>
        }

        {repoState.user.name != "" && (
          <div>
            <div className="login">
              <DataTable />
            </div>
            <br />
            <br />
            <div>
              <CollectionTable />
            </div>

          </div>
        )}

      </div> */}

    </div>
  );
}

function RegisterPage() {
  return <div><SignUp /></div>;
  // return<h2>WTF</h2>;
}

function LoginPage() {
  return <div className="div"><Login /></div>;
}

function HomePage() {
  return <div className="div"><h2>Home Page</h2></div>;
}

function CollectionCreatePage() {
  return <div className="div"><CollectionCreate /></div>;
}

function CollectionListPage() {
  return <div className="div"><CollectionTable /></div>;
}

function MyRepoPage() {
  return <div className="div"><DataTable /></div>;
}


export default App;
