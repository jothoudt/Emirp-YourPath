import React from 'react';
import { useHistory } from 'react-router-dom';
import RegisterForm from '../RegisterForm/RegisterForm';
//styling with MUI
import {
  Button,
  Box,
  Divider,
  Typography
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
//styling
const  useStyles = makeStyles( ( theme )=>({

}))

function RegisterPage() {
  const history = useHistory();
    //needed for styling
    const classes = useStyles();

  return (
    <Box className={classes.registerRoot}>
          <center>
            <RegisterForm />
            <br />
            <Typography variant="body2" color="textSecondary">
              Already have a login?
            </Typography>
            <Button onClick={() => { history.push( '/login' ) } }>
              Login
            </Button>
          </center>
    </Box>
  );
}

export default RegisterPage;
