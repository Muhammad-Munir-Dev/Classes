import * as React from 'react';
import {Box,Menu,MenuItem,ListItemIcon,Divider,Typography} from '@mui/material';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

function Navbar() {
  return (
    <>
      <Box className="menubar" sx={{ display: 'flex', alignItems: 'center', textAlign: 'center' }}>
        <Box>
          <Typography className="category_li">All Categories <ArrowDropDownIcon /></Typography>
        </Box> 
        <Typography className="li">Electronics</Typography>
        <Typography className="li">Men</Typography>
        <Typography className="li">Women</Typography>
        <Typography className="li">Home</Typography>
        <Typography className="li">Beauty & Fragrance</Typography>
        <Typography className="li">Baby & Toys</Typography>
        <Typography className="li">Grocery</Typography>
        <Typography className="li">Sports</Typography>
        <Typography className="li">Bestsellers</Typography>
        <Typography className="li">Sell on noon</Typography>
      </Box>
    </>
  );
}

export default Navbar;