import * as React from 'react';
import { Grid,Typography } from "@mui/material";

function SectionSeven() {
  return (
  	<div className="SectionSeven">
	  	<img className="w-100 mb-2" src="./images/currentdeal.gif" alt="Deal"/>
  		<Grid container spacing={2}>
		  <Grid item xs={3}>
		    <img className="w-100" src="./images/deal5.png" alt="Deal 5"/>
		  </Grid>
		  <Grid item xs={3}>
		    <img className="w-100" src="./images/deal6.png" alt="Deal 6"/>
		  </Grid>
		  <Grid item xs={3}>
		    <img className="w-100" src="./images/deal7.png" alt="Deal 7"/>
		  </Grid>
		  <Grid item xs={3}>
		    <img className="w-100" src="./images/deal8.png" alt="Deal 8"/>
		  </Grid>
		</Grid>
  	</div>
  )
};
export default SectionSeven;