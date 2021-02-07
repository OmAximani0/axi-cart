import React from "react";
import { Link } from "react-router-dom";

function Card(props) {
	return (
		<div className="card">
			{/* <img src="https://source.unsplash.com/400x300/?coding" className="card-img-top" alt="https://source.unsplash.com/400x300/?coding" /> */}
			<div className="card-body">
				<h5 className="card-title">{props.title}</h5>
				<p className="card-text">{props.desc}</p>
				<Link to={props.BtnLink} className="btn btn-primary">{props.btn}</Link>
			</div>
		</div>
	);
};

export default Card;