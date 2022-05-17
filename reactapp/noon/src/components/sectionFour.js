import * as React from 'react';
import { Grid,styled,Paper } from "@mui/material";

function SectionFour() {
  return (
  	<div className="SectionFour">
  		<Grid container spacing={2}>
		  <Grid item xs={4}>
		    <img className="w-100" src="./images/discount1.png" alt="Discount 1"/>
		  </Grid>
		  <Grid item xs={4}>
		    <img className="w-100" src="./images/discount2.png" alt="Discount 2"/>
		  </Grid>
		  <Grid item xs={4}>
		    <img className="w-100" src="./images/discount3.png" alt="Discount 3"/>
		  </Grid>
		</Grid>
  	</div>
  )
};
export default SectionFour;