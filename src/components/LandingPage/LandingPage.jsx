import React, { useState } from 'react';
import { useHistory, Link } from 'react-router-dom';
import './LandingPage.css';
import { Typescript } from '@material-ui/core'

// CUSTOM COMPONENTS
import RegisterForm from '../RegisterForm/RegisterForm';

function LandingPage() {
  const [heading, setHeading] = useState('Welcome');
  const history = useHistory();

  const onLogin = (event) => {
    history.push('/login');
  };

  return (
    <div className="container">
      <h2>{heading}</h2>

      <div className="grid">
        <div className="grid-col grid-col_8">
          <p>
            High-res background photo of path here.
          </p>
        </div>
        <div className="grid-col grid-col_4">
          <center>
            <RegisterForm />
            <h4>Already a Member?</h4>
            <Link to="/login">
              Login
            </Link>
          </center>
        </div>
      </div>
    </div>
  );
}

export default LandingPage;
