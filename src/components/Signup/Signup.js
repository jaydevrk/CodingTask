import React, { useState, } from 'react';
import { Avatar, Grid, Button, CssBaseline, TextField, FormControlLabel, Checkbox, Link, Box, Typography, makeStyles, Container } from '@material-ui/core';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import OutlinedInput from '@mui/material/OutlinedInput';
import { useTheme } from '@mui/material/styles';
import { useNavigate } from 'react-router-dom';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';


const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

const names = [
  'Engineer',
  'Doctor',
  'Web Developer',
  'Artist',
  'others'
]
function getStyles(name, profession, theme) {
  return {
    fontWeight:
      profession.indexOf(name) === -1
        ? theme.typography.fontWeightRegular
        : theme.typography.fontWeightMedium,
  };
}


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

export default function Signup() {
  const theme = useTheme();
  const classes = useStyles();

  const [Name, setName] = useState('')
  const [Email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [mobile, setMobile] = useState('')
  const [profession, setprofession] = useState([])
  const navigate = useNavigate()

  const [flag, setFlag] = useState(false);
  const [login, setLogin] = useState(true);
  const handleChange = (event) => {

    const {
      target: { value },
    } = event;
    setprofession(
    
      typeof value === 'string' ? value.split(',') : value,
    );
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!Name || !Email || !password || !mobile || !profession) {
      setFlag(true);
    } else {
      setFlag(false);
      localStorage.setItem("Email", JSON.stringify(Email));
      localStorage.setItem("Password", JSON.stringify(password));
      localStorage.setItem("Name", JSON.stringify(Name));
      localStorage.setItem("Mobile", JSON.stringify(mobile));
      console.log("Saved in Local Storage");

      setLogin(!login)

    }
    navigate("/Login")
  }




  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>

        </Avatar>
        <Typography component="h1" variant="h5">
          Sign in
        </Typography>
        <form onSubmit={handleSubmit} className={classes.form} noValidate>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="select"
            value={Name}
            onChange={(e) => setName(e.target.value)}

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
            id="email"
            value={Email}
            onChange={(e) => setEmail(e.target.value)}

            label="Email Address"
            name="email"
            autoComplete="email"

          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            id="password"
            autoComplete="current-password"
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="mobile"
            label="Phone number"
            value={mobile}
            onChange={(e) => setMobile(e.target.value)}
            name='mobile'
            autoComplete="current-mobile"
          />



          <FormControl fullWidth sx={{ mt: 2 }}>
            <InputLabel id="demo-multiple-name-label">Profession *</InputLabel>
            <Select
              labelId="demo-multiple-name-label"
              id="demo-multiple-name"
              multiple
              required
              fullWidth
              value={profession}
              onChange={handleChange}
              input={<OutlinedInput label="Profession" />}
              MenuProps={MenuProps}
            >
              {names.map((name) => (
                <MenuItem
                  key={name}
                  value={name}
                  style={getStyles(name, profession, theme)}
                >
                  {name}
                </MenuItem>
              ))}
            </Select>
          </FormControl>






          <FormControlLabel
            control={<Checkbox value="remember" color="primary" />}
            label="Remember me"
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Sign In
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
