import React, { useState } from 'react';
import { useHistory, Link } from 'react-router-dom';
import './LandingPage.css';
import { Typescript } from '@material-ui/core';
import { Button } from '@material-ui/core';


// CUSTOM COMPONENTS
import RegisterForm from '../RegisterForm/RegisterForm';
import LoginForm from '../LoginForm/LoginForm';

function LandingPage() {
  const [heading, setHeading] = useState('Welcome');
  const history = useHistory();

  const onLogin = (event) => {
    history.push('/login');
  };

  const [ loginToggle, setLoginToggle ] = useState( 'false' )

  const showLogin = () => {
    if ( !loginToggle ) {
      return (
        <RegisterForm loginToggle={loginToggle} setLoginToggle={setLoginToggle} />
      )
    }
    else {
      return (
        <LoginForm loginToggle={loginToggle} setLoginToggle={setLoginToggle}  />
      )
    }
  }

  return (
    <div className="landingContainer">
      <div className="grid">
        <div className="grid-col grid-col_8">
        </div>
        <div className="grid-col grid-col_4">
          <center>
            {showLogin()}
            
            {/* <Link to="/login">
              Login
            </Link> */}
          </center>
        </div>
      </div>
    </div>
  );
}

export default LandingPage;
