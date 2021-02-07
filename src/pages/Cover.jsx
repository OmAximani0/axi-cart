import React from "react";

//* Custom Component
import CoverPhoto from "../images/coverPhoto.jpg.png";

function Cover() {
	return(
		<>
		<h1 className="display-3 d-flex justify-content-center">Mobile Covers</h1>
		<hr className="under-head"/>
		<img className="cover-image" src={CoverPhoto} />
		</>
	);
};

export default Cover;