import {Link} from "react-router-dom";
import * as React from 'react';
import '../App.css';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import LoginIcon from '@mui/icons-material/Login';

function Signup() {
  return (
    <div className="Signup">
      <Card className="card-custom-signup card-bg" sx={{ maxWidth: 400 }}>
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Signup
        </Typography>
        <Typography variant="body2" color="text.secondary">
        </Typography>
      </CardContent>
      <CardActions>
      	<Box className="card-input" sx={{ alignItems: 'center', width: '100%', '& > :not(style)': { m: 1 }, }} > 
        <TextField size='small' id="standard-basic" label="First Name" variant="standard" />
        <TextField size='small' id="standard-basic" label="Last Name" variant="standard" />
        <TextField size='small' id="standard-basic" label="Email" variant="standard" />
        <TextField size='small' id="standard-basic" label="Password" variant="standard" />
        <TextField size='small' id="standard-basic" label="Confirm Password" variant="standard" />
	      <Stack direction="row" spacing={2}>
	      <Link to="/login">
		      <Button variant="contained" color="primary" endIcon={<LoginIcon />}>Signup</Button>
		  </Link>
		  </Stack>
	    </Box>
      </CardActions>
      <Stack element="div">
	    <Typography variant="body2">
      Already have an account? 
        <Link to="/login">
          <Button size="small">Sign in</Button>
        </Link>
      </Typography>
      </Stack>
    </Card>	
    </div>
  );
}

export default Signup;
