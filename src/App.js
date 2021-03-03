import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import './App.css';
import Header from './Components/Header';
import styled from 'styled-components';
import Sidebar from './Components/Sidebar';
import Chat from './Components/Chat';
import {useAuthState} from 'react-firebase-hooks/auth';
import { auth } from './firebase';
import Login from './Components/Login';
import Image from './img/P 1.png';
import Spinner from 'react-spinkit';


function App() {

const [user,loading] = useAuthState(auth);

  if (loading) {
    return(
      <AppLoading>
        <AppLoadingContents>
          <img src={Image} alt=""/>

          <Spinner 
            name="ball-spin-fade-loader"
            color="white"
            fadeIn="none"
          />

        </AppLoadingContents>
      </AppLoading>
    )

  }

  return (
    <div className="App">
     <Router>
     {!user ? (
       <Login/>
     ): (
        <>
        <Header />
        <AppBody>
          <Sidebar/>
            <Switch>
            <Route path="/" exact>
              <Chat/>
            </Route>
            </Switch>
        </AppBody>
      </>
     )}
      
    </Router>
    </div>
  );
}

export default App;

const AppBody =styled.div`
display:flex;
height: 100vh;
`;

const AppLoading = styled.div `
display:grid;
place-items:center;
height: 100vh;
width: 100%;
background-image: linear-gradient(to top, #30cfd0 0%, #330867 100%);

`;


const AppLoadingContents = styled.div `
text-align: center;
padding-bottom:100px;
display:flex;
flex-direction:column;
justify-content: center;
align-items: center;

>img {
  padding: 20px;
  height: 100px;
  margin-bottom:40px;
  
}
`;