import React, { useState, } from 'react';
import { Avatar, Grid, Button, CssBaseline, TextField, Link, Box, Typography, makeStyles, Container } from '@material-ui/core';
import { Alert, AlertTitle } from '@mui/material';
import { useNavigate } from 'react-router-dom';



const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export default function Login() {

  const classes = useStyles();

  const [loginName, setLoginName] = useState('')
  const [LoginPassword, setPassword] = useState('')


  const [flag, setFlag] = useState(false);

  const [home, setHome] = useState(true);
  const navigate = useNavigate()
  const handleSubmit = (e) => {
    e.preventDefault();
    let pass = localStorage.getItem('Password').replace(/"/g, "");
    let name = localStorage.getItem('Name').replace(/"/g, "");


    if (!loginName || !LoginPassword) {
      setFlag(true);
      console.log("EMPTY");
    } else if ((LoginPassword !== pass) || (loginName !== name)) {
      setFlag(true);
    } else {
      setHome(!home);
      setFlag(false);
      navigate('/Home')


    }


  }




  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>

        </Avatar>
        <Typography component="h1" variant="h5">
          Log In
        </Typography>

        <form onSubmit={handleSubmit} className={classes.form} noValidate>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="select"
            value={loginName}
            onChange={(e) => setLoginName(e.target.value)}

            label="Name"
            name="name"
            autoComplete="Name"
            autoFocus


          />

          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            value={LoginPassword}
            onChange={(e) => setPassword(e.target.value)}
            id="password"
            autoComplete="current-password"
          />




          {flag && <Alert severity="error">
            <AlertTitle>Error</AlertTitle>
            Enter Valid Credentials — <strong>check it out!</strong>
          </Alert>}


          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Log In
          </Button>
          <Grid container>
            <Grid item xs>
              <Link href="#" variant="body2">
                Forgot password?
              </Link>
            </Grid>
            <Grid item>
              <Link href="/Login" variant="body2">
                {"Already have an account? Sign In"}
              </Link>
            </Grid>
          </Grid>
        </form>


      </div>


      <Box mt={8}>

      </Box>
    </Container>
  );
}
