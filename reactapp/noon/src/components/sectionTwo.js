import * as React from 'react';
import { Grid,Typography } from "@mui/material";

function SectionTwo() {
  return (
  	<div className="SectionTwo">
	  	<img className="w-100" src="./images/clock.png" alt="Clock"/>
  		<Grid container spacing={2}>
		  <Grid item xs={3}>
		    <img className="w-100" src="./images/item5.png" alt="Item 5"/>
		  </Grid>
		  <Grid item xs={3}>
		    <img className="w-100" src="./images/item6.png" alt="Item 6"/>
		  </Grid>
		  <Grid item xs={3}>
		    <img className="w-100" src="./images/item7.png" alt="Item 7"/>
		  </Grid>
		  <Grid item xs={3}>
		    <img className="w-100" src="./images/item8.png" alt="Item 8"/>
		  </Grid>
		</Grid>
  	</div>
  )
};
export default SectionTwo;