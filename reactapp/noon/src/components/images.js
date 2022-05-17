function GetImage(props) {
	let imgLink = `./images/${props.link}`
  	return <img className="my-2 w-100" src={imgLink} alt={props.altText}/>;
}

export { GetImage };