import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
//styling with MUI
import {
  Button,
  Box,
  Grid, 
  TextField,
  Typography
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
//styling
const  useStyles = makeStyles( ( theme )=>({
  formPanel: {
    display: 'flex',
    justifyContent: 'center',
  },
  headerLogo: {
    width: '26%',
    maxWidth: '75px',
    margin: 'auto',
  },
  dividerCaption: {
    marginBottom: '70px',
  },
  textField: {
    paddingBottom: '10px',
  }
}))

function RegisterForm( { setLoginToggle, loginToggle } ) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const errors = useSelector((store) => store.errors);
  const dispatch = useDispatch();
  //needed for styling
  const classes = useStyles();

  const registerUser = (event) => {
    event.preventDefault();

    dispatch({
      type: 'REGISTER',
      payload: {
        username: username,
        password: password,
      },
    });
  }; // end registerUser

  return (
    <Box className={classes.registrationRoot}>
    <Typography
    className={classes.dividerCaption}
    color="textSecondary"
    display="block"
    variant="caption"
  >
    Registration
  </Typography>
      <form className={classes.formPanel} onSubmit={registerUser}>
        {errors.registrationMessage && (
          <h3 className="alert" role="alert">
            {errors.registrationMessage}
          </h3>
        )}
        <Grid container justify="center">
          <Grid item xs={12}>
                <TextField
                  label="Username"
                  type="text"
                  className={classes.textField}
                  variant="outlined"
                  color="secondary"
                  value={username}
                  required
                  onChange={(event) => setUsername(event.target.value)}
                />
          </Grid>
          <Grid item xs={12}>
            <TextField
              label="Password"
              type="password"
              className={classes.textField}
              variant="outlined"
              color="secondary"
              value={password}
              required
              onChange={(event) => setPassword(event.target.value)}
            />
          </Grid>
          <Grid item xs={12} justify="center">
              <Button variant="contained" color="primary" type="submit" name="submit">Join</Button>
          </Grid>
          <Grid item xs={12} justify="center">
            <Button onClick={()=>setLoginToggle(!loginToggle)}>Go to login</Button>
          </Grid>
        </Grid>
      </form>
    </Box>
  );
}

export default RegisterForm;
