import * as React from 'react';
import { Grid,styled,Paper } from "@mui/material";

function SectionSix() {
  return (
  	<div className="SectionSix">
  		<Grid container spacing={2}>
		  <Grid item xs={6}>
		    <img className="w-100" src="./images/discount4.png" alt="Discount 4"/>
		  </Grid>
		  <Grid item xs={3}>
		    <img className="w-100" src="./images/discount5.png" alt="Discount 5"/>
		  </Grid>
		  <Grid item xs={3}>
		    <img className="w-100" src="./images/discount6.png" alt="Discount 6"/>
		  </Grid>
		</Grid>
  	</div>
  )
};
export default SectionSix;