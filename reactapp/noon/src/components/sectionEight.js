import * as React from 'react';
import { Box } from "@mui/material";

function SectionEight() {
  return (
  	<div className="SectionEight">
	  	<img className="my-2 mx-2 w-100" src="./images/pricing.gif" alt="Pricing"/>
	  	<img className="w-100 mb-2" src="./images/grocery.png" alt="Grocery"/>
  		<Box className="toys" sx={{ display: 'flex'}}>
	  		<img src="./images/grocery1.png" className="grocery_img" alt="Grocery 1"/>
	  		<img src="./images/grocery2.png" className="grocery_img" alt="Grocery 2"/>
	  		<img src="./images/grocery3.png" className="grocery_img" alt="Grocery 3"/>
	  		<img src="./images/grocery4.png" className="grocery_img" alt="Grocery 4"/>
	  		<img src="./images/grocery5.png" className="grocery_img" alt="Grocery 5"/>
	  		<img src="./images/grocery6.png" className="grocery_img" alt="Grocery 6"/>
	  	</Box>
  	</div>
  )
};
export default SectionEight;