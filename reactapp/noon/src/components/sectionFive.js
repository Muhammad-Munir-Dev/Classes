import * as React from 'react';
import { Grid,Typography } from "@mui/material";

function SectionFive() {
  return (
  	<div className="SectionFive">
	  	<img className="w-100" src="./images/deal.png" alt="Deal"/>
  		<Grid container spacing={2}>
		  <Grid item xs={3}>
		    <img className="w-100" src="./images/deal1.png" alt="Deal 1"/>
		  </Grid>
		  <Grid item xs={3}>
		    <img className="w-100" src="./images/deal2.png" alt="Deal 2"/>
		  </Grid>
		  <Grid item xs={3}>
		    <img className="w-100" src="./images/deal3.png" alt="Deal 3"/>
		  </Grid>
		  <Grid item xs={3}>
		    <img className="w-100" src="./images/deal4.png" alt="Deal 4"/>
		  </Grid>
		</Grid>
  	</div>
  )
};
export default SectionFive;