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
  registrationRoot: {
    padding: '0 80px',
  },
  formPanel: {
    display: 'flex',
    justifyContent: 'center',
  },
  headerLogo: {
    width: '26%',
    maxWidth: '75px',
    margin: 'auto',
  },
  registerIntro: {
    paddingTop: '35px',
    marginBottom: '13px',
    fontWeight: '600',
  },
  explainer: {
    marginBottom: '60px',
  },
  textField: {
    paddingBottom: '10px',
  },
  mainBtn: {
    marginTop: '40px',
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
    className={classes.registerIntro}
    color="primary"
    display="block"
    variant="h4"
  >
    Register
  </Typography>
  <Typography variant="body2" className={classes.explainer}>
    Welcome to YourPath Dashboard. 
    Please fill out these two fields:
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
              variant="standard"
              color="secondary"
              fullWidth
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
              variant="standard"
              color="secondary"
              fullWidth
              value={password}
              required
              onChange={(event) => setPassword(event.target.value)}
            />
          </Grid>
          <Grid item xs={12} justify="center">
              <Button variant="contained" color="primary" type="submit" name="submit" className={classes.mainBtn}>Join</Button>
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
