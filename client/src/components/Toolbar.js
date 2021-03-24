import React, { Component } from 'react'
import LearningMainContent from './LearningMainContent';
import { useEffect } from 'react';
import styled from 'styled-components';
import { Link } from "react-router-dom";
import { GoogleLogin } from 'react-google-login';

const StyledMainDivContainer = styled.section`
    a {
      font-size: 2rem;
      :hover {
        /* transform: scale()(0.02); */
        background-color: blue;
        color: pink;
        /* border-radius: 10px; */
      }
    }
    filter: blur(0rem);
    display: flex;
    justify-content: space-around;
    align-items: center;
    background-color: #f0efeb;
    min-height: 5vh;
    max-height: 5vh;
    font-family: 'Bebas Neue', cursive;
`
  function onSignIn(googleUser) {
    try {
      var id_token = googleUser.getAuthResponse().id_token;
    console.log(id_token)
    } catch (e) {
      console.log(e)
    }
    
  }

export class Toolbar extends Component {



  responseGoogle = (response) => {
    console.log(response);
    console.log(response.profileObj);
    onSignIn(response);
  }


  render() {
    return (
    <StyledMainDivContainer>
      <div><Link to="/learn">Start</Link></div>
      <div></div>
      <div><a href="#">Blog</a></div>
      <div><a href="#">Create Account</a></div>
      
      <div>
      <GoogleLogin
      clientId="754790793704-8i5d3gs2rjcp7pv8gpr90u96vnqkc2hd.apps.googleusercontent.com"
      buttonText="Sign In"
      onSuccess={this.responseGoogle}
      onFailure={this.responseGoogle}
      cookiePolicy={'single_host_origin'}
    />
      </div>
      
    </StyledMainDivContainer>
    )
  }
}

export default Toolbar;

