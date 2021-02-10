import React from 'react';
import './App.css';
import { useSelector } from "react-redux";
import { RootStore } from "./Store";
import ButtonAppBar from './components/AppBar'
import { Card, CardContent } from '@material-ui/core';


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

      <div>
        <Router>
          <Link to="/register">Register</Link>
          {' '}
          <Link to="/login">Login</Link>
          {' '}
          <Link to="/">Home</Link>
          {' '}
          <Link to="/collection-create">Collection Create</Link>
          {' '}
          <Link to="/collections">Collections</Link>
          {' '}
          <Link to="/my-repos">My Repos</Link>
          {' '}
          <div>
            {/* <nav>
              <ul>
                <li>
                  <Link to="/register">Register</Link>
                </li>
                <li>
                  <Link to="/login">Login</Link>
                </li>
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link to="/collection-create">Collection Create</Link>
                </li>
                <li>
                  <Link to="/collections">Collections</Link>
                </li>
                <li>
                  <Link to="/my-repos">My Repos</Link>
                </li>
                <li>
                  <Link to="/about">About</Link>
                </li>
                <li>
                  <Link to="/users">Users</Link>
                </li>
              </ul>
            </nav> */}

            {/* A <Switch> looks through its children <Route>s and
              renders the first one that matches the current URL. */}
            <Switch>

              <Route path="/register">
                <RegisterPage />
              </Route>

              <Route path="/login">
                <LoginPage />
              </Route>

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

      {repoState.user.name !== "" &&
        <Card style={{ width: "300px" }}>
          <CardContent>
            <p>User: {repoState.user.name}</p>
            <p>Repositories: {repoState.user.allRepo.length}</p>
            <p>Collections: {repoState.user.collectionList.length}</p>
          </CardContent>
        </Card>
      }
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
