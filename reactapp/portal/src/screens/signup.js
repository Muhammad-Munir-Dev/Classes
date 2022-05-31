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
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Signup() {

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const navigate = useNavigate();

  const signup = () => {
    let obj = {
      name,
      email,
    };
    navigate(`/profile/${name}`, { state: obj });
  };

  return (
    <div className="Signup">
      <Card className="card-custom-signup card-bg" sx={{ maxWidth: 345 }}>
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Signup
        </Typography>
        <Typography variant="body2" color="text.secondary">
        </Typography>
      </CardContent>
      <CardActions>
      	<Box className="card-input" sx={{ alignItems: 'center', width: '100%', '& > :not(style)': { m: 1 }, }} > 
	      <TextField size='medium' label="First Name" value={name} onChange={(e) => setName(e.target.value)} />
	      <TextField size='medium' label="Last Name" />
	      <TextField size='medium' type="email" id="email" label="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
	      <TextField size='medium' type="password" label="Password" />
	      <TextField size='medium' type="password" label="Confirm Password" />
	      <Stack direction="row" spacing={2}>
		      <Button onClick={signup} variant="contained" endIcon={<LoginIcon />}>Signup</Button>
		  </Stack>
	    </Box>
      </CardActions>
      <Stack element="div">
	    <Typography variant="body2">
        already account</Typography>
	     <Link to="/login">
        	<Button size="small">Login</Button>
      	</Link>
      </Stack>
    </Card>	
    </div>
  );
}

export default Signup;
