import * as React from 'react';
import { Grid,styled,Paper } from "@mui/material";

function SectionOne() {
  return (
  	<div className="SectionOne">
  		<Grid container spacing={2}>
		  <Grid item xs={3}>
		    <img className="w-100" src="./images/item1.png" alt="item 1"/>
		  </Grid>
		  <Grid item xs={3}>
		    <img className="w-100" src="./images/item2.png" alt="item 2"/>
		  </Grid>
		  <Grid item xs={3}>
		    <img className="w-100" src="./images/item3.png" alt="item 3"/>
		  </Grid>
		  <Grid item xs={3}>
		    <img className="w-100" src="./images/item4.png" alt="item 4"/>
		  </Grid>
		</Grid>
  	</div>
  )
};
export default SectionOne;