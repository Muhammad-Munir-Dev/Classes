import * as React from 'react';
import { styled, alpha } from '@mui/material/styles';
import { Icon,AppBar,Box,Toolbar,Button,List,ListItem,ListItemText,InputBase,Typography,Badge } from '@mui/material';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import PersonIcon from '@mui/icons-material/Person';
import SearchIcon from '@mui/icons-material/Search';

function Topbar() {
  const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    marginRight: '20px',
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: 'auto',
    },
  }));
  const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: '#000',
    backgroundColor: '#fff',
    borderRadius: '4px',
    '& .MuiInputBase-input': {
      padding:'8px',
      transition: theme.transitions.create('width'),
      width: '100%',
      [theme.breakpoints.up('sm')]: {
        width: '90ch',
      },
    },
  }));
  return <Box>
    <AppBar position="static" style={{ background: '#f3e008' }}>
      <Toolbar>
        <img src="./images/noon.svg" alt="Logo"/>
        <List
          component="nav"
          aria-label="Device settings"
        >
          <ListItem
            button
            id="lock-button"
            aria-haspopup="listbox"
            aria-controls="lock-menu"
            aria-label="Deliver to"
          >
            <ListItemText
              primary="Deliver to"
              secondary="Dubai"
              sx={{ color: '#000' }}
            />
            <KeyboardArrowDownIcon color="disabled" />
          </ListItem>
        </List>
        <Search>
        <StyledInputBase
          placeholder="What you are looking for?"
          inputProps={{ 'aria-label': 'search' }}
        />
      </Search>
      <Typography variant="li" color="black" align="center" paddingRight="5px">العربية</Typography> 
      <Typography variant="li" color="black" align="center" paddingRight="5px">|</Typography>
      <Badge color="secondary" paddingX="5px">
        <Typography variant="li" color="black" align="center">Sign Up</Typography>
        <PersonIcon fontSize="small"/>
      </Badge>
      <Typography variant="li" color="black" align="center" paddingRight="5px">|</Typography>
      <Badge color="secondary" paddingX="5px">
        <Typography variant="li" color="black" align="center">Cart</Typography>
        <ShoppingCartIcon fontSize="small"/>
      </Badge>
      </Toolbar>
    </AppBar>
  </Box>
}
export default Topbar;