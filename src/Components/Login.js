import styled from 'styled-components';
import React from 'react'; 
import Image from '../img/P 1.png';
import {Button} from '@material-ui/core';
import { auth, provider } from '../firebase';


function Login() {

    const signIn = (e)=> {
        e.preventDefault();
        auth.signInWithPopup(provider).catch((error) =>
        alert(error.message));
    };

    return (
        <LoginContainer>
            <LoginInnerContainer>
                <img src={Image} alt=""/>
                <h1>Sign in to PARU</h1>
                <p>paru.github.com</p>

            <Button onClick={signIn}>
                Sign in with Google!
            </Button>

            </LoginInnerContainer>
        </LoginContainer>
    )
}

export default Login;

const LoginContainer = styled.div `
display:grid;
background-image: linear-gradient(to top, #30cfd0 0%, #330867 100%);
height:100vh;
place-items:center;

`;

const LoginInnerContainer = styled.div `
padding:100px;
text-align:center;
background-image: linear-gradient(to top, #9890e3 0%, #b1f4cf 100%);
border-radius:10px;
box-shadow:0 5px 9px rgba(0, 0, 0, 0.99), 0 1px 2px rgba(0, 0, 0, 0.24);



>img {
    object-fit: contain;
    height: 100px;
    margin-bottom:40px;
}

>button {
margin-top:50px;
text-transform:inherit !important;
background-color: #6930c3 !important;
color:white;
}
`;
