import React from 'react';
import './App.css';
import { useSelector } from "react-redux";
import { RootStore } from "./Store";
import ButtonAppBar from './components/AppBar'



import Login from './components/Login'
import DataTable from './components/Table';
import CollectionCreate from './components/CollectionCreate';
import SignUp from './components/SignUp';
// import SnackBar from './components/SnackBar';
import CollectionTable from './components/CollectionTable';
import Dashboard from './components/Dashboard';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
} from "react-router-dom";

// import SideDrawer from './components/Drawer';


function App() {

  const repoState = useSelector((state: RootStore) => state.repo);

  return (
    <div className="App">
      {/* <SideDrawer /> */}
      <ButtonAppBar />

      <div className="main">
        {repoState.user.id !== "" &&
          <div className="dashboard">


            <br />
            <div className="routes">
              <div>
                <Router>
                  <Link to="/">Home</Link>
                  {'  |  '}
                  <Link to="/collection-create">Collection Create</Link>
                  {'  |  '}
                  <Link to="/collections">Collections</Link>
                  {'  |  '}
                  <Link to="/my-repos">My Repos</Link>
                  {'  '}
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
                        <Dashboard />
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
            <h1>Welcome to Smart Github App!</h1>
            <div className="routes">
              <div>
                <Router>
                  <Link to="/signup">Sign up</Link>
                  {'  |  '}
                  <Link to="/login">Login</Link>


                  <div>
                    <Switch>

                      <Route path="/signup">
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

    </div>

  );
}

function RegisterPage() {
  return <div><SignUp /></div>;
}

function LoginPage() {
  return <div className="div"><Login /></div>;
}

function HomePage() {
  return <div className="div"><h2>{' '}</h2></div>;
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
