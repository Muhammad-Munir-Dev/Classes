import {Link} from "react-router-dom";
import * as React from 'react';
import '../App.css';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import LoginIcon from '@mui/icons-material/Login';


function Login() {
  return (
    <div className="Login">
      <Card className="card-custom-login card-bg" sx={{ maxWidth: 345 }}>
      {/*<CardMedia component="img"alt="green iguana"height="140"image="../images/login.jpg" />*/}
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Login
        </Typography>
        <Typography variant="body2" color="text.secondary">
        </Typography>
      </CardContent>
      <CardActions>
      	<Box className="card-input" sx={{ alignItems: 'center', width: '100%', '& > :not(style)': { m: 1 }, }} > 
	      <TextField size='medium' type="email" id="demo-helper-text-misaligned-no-helper" label="Email" />
	      <TextField size='medium' type="password" id="demo-helper-text-misaligned-no-helper" label="Password" />
	      <Stack direction="row" spacing={2}>
	      <Link to="/dashboard">
		      <Button variant="contained" endIcon={<LoginIcon />}>Login</Button>
		  </Link>
		  </Stack>
	    </Box>
      </CardActions>
      <Stack element="div">
	    <Typography variant="body2">
        Dont you have an account? Please</Typography>
	    <Link to="/signup">
        	<Button size="small">Sign up</Button>
      	</Link>
      </Stack>
    </Card>	
    </div>
  );
}

export default Login;

