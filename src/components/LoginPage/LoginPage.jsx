import React from 'react';
import LoginForm from '../LoginForm/LoginForm';
import { useHistory } from 'react-router-dom';
import {
  Button,
  Box,
  Divider,
} from '@material-ui/core';

function LoginPage() {
  const history = useHistory();

  return (
    <Box className="registrationRoot">
      <center>
        <LoginForm />
      </center>
    </Box>
  );
}

export default LoginPage;
