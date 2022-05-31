import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import {useLocation, Link} from "react-router-dom";
import Typography from '@mui/material/Typography';
import '../App.css';
import Button from '@mui/material/Button';



function Profile() {
    const location = useLocation();

  return (
  <Card className="card-custom-signup" sx={{ maxWidth: 345, height: '350px' }}>
          <CardMedia
            component="img"
            height="140"
            image="https://picsum.photos/200"
            alt="green iguana"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {location.state.name}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Lizards are a widespread group of squamate reptiles, with over 6,000
              species, ranging across all continents except Antarctica
            </Typography>
            <Link className="custom-a" to="/dashboard">
              <Button className="custom-button" size="medium" variant="contained">Dashboard</Button>
            </Link>
          </CardContent>
      </Card>
  );
}

export default Profile;
