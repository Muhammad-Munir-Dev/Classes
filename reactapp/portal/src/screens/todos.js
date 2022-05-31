import '../App.css';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button'; 
import axios from 'axios'; 
import { useState } from 'react';
const drawerWidth = 240;

function Albums(props) {

  const [savedata,setsaveData] = useState([]);
  const data = () => { 
    axios.get('https://jsonplaceholder.typicode.com/todos/').then((res) =>{
    // console.log(res.data)
    setsaveData(res.data)
    return res.data;
  });
}


  return (
    <div className="Albums">
      
      <Box
          component="main"
          sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` } }}
        >
          {savedata.map((e, index) => (
          <Card className="card-display" sx={{ maxWidth: 345, height: '350px'  }}>
              <CardMedia
                component="img"
                height="140"
                image="https://picsum.photos/200"
                alt="Images"
              />
              <CardContent>
              <Typography variant="body2" color="text.secondary">
                  Id: {e.id}
                </Typography>
                <Typography gutterBottom variant="h5" component="div">
                  {e.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  User Id: {e.userId}
                </Typography>
              </CardContent>
          </Card>
           ))}
           <Button size="small" onClick={data}>Login</Button>
        </Box>
        
    </div>
  );
}

export default Albums;