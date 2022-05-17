import * as React from 'react';
import { Box } from "@mui/material";

function SectionThree() {
  return (
  	<div className="SectionThree">
	  	<img className="w-100" src="./images/toy.png" alt="Clock"/>
	  	<Box className="toys" sx={{ display: 'flex'}}>
	  		<img src="./images/toy1.png" className="toy_img" alt="Toy 1"/>
	  		<img src="./images/toy2.png" className="toy_img" alt="Toy 2"/>
	  		<img src="./images/toy3.png" className="toy_img" alt="Toy 3"/>
	  		<img src="./images/toy4.png" className="toy_img" alt="Toy 4"/>
	  		<img src="./images/toy5.png" className="toy_img" alt="Toy 5"/>
	  		<img src="./images/toy6.png" className="toy_img" alt="Toy 6"/>
	  		<img src="./images/toy7.png" className="toy_img" alt="Toy 7"/>
	  	</Box>
  	</div>
  )
};
export default SectionThree;