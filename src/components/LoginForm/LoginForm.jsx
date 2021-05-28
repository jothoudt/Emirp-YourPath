import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import {useSelector} from 'react-redux';
//styling
import {
  Button,
  Box,
  Grid, 
  TextField,
  Typography
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
const  useStyles = makeStyles( ( theme )=>({
  loginRoot: {
    padding: '0 80px',
  },
  formPanel: {
    display: 'flex',
    justifyContent: 'center',
  },
  loginIntro: {
    paddingTop: '35px',
    fontWeight: '600',
  },
  explainer: {
    marginBottom: '60px',
  },
  textField: {
    paddingBottom: '10px',
  },
  textFieldColor: {
    color: '#169873',
  },
  mainBtn: {
    marginTop: '40px',
  }
}))


function LoginForm( { loginToggle, setLoginToggle }) {
  //for styling login
  const classes = useStyles();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const errors = useSelector(store => store.errors);
  const dispatch = useDispatch();

  const login = (event) => {
    event.preventDefault();

    if (username && password) {
      dispatch({
        type: 'LOGIN',
        payload: {
          username: username,
          password: password,
        },
      });
    } else {
      dispatch({ type: 'LOGIN_INPUT_ERROR' });
    }
  }; // end login

  return (
    <Box className={classes.loginRoot}>
      <Typography
      className={classes.loginIntro}
      color="primary"
      display="block"
      variant="h4"
      >
      Sign in
      </Typography>
      <Typography variant="body2" className={classes.explainer}>
        Enter to view your customizable dashboard.
      </Typography> 
      <form className={classes.formPanel} onSubmit={login}>
        {errors.loginMessage && (
          <h3 className="alert" role="alert">
            {errors.loginMessage}
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
                required
                value={username}
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
                required
                value={password}
                onChange={(event) => setPassword(event.target.value)}
              />
          </Grid>
          <Grid item xs={12}>
            <Button variant="contained" color="primary" type="submit" name="submit" className={classes.mainBtn}>Login</Button>
          </Grid>
          <Grid item xs={12} justify="center">
            <Button onClick={()=>setLoginToggle(!loginToggle)}>Go to register</Button>
          </Grid>
        </Grid>
      </form>
    </Box>
  );
}

export default LoginForm;
