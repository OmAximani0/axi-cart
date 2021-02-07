import React from "react";

//* Custom Components
import MCard from "../components/MCard";

//* Data For Card Component
import ImageData from "../Data/ImageData";

function Skin() {
	return(
		<>
			<h1 className="display-3 d-flex justify-content-center">Mobile Skins</h1>
			<hr className="under-head"/>
			<div className="container">
			<div className="row mx-auto">
				{
					ImageData.map(data => (
						<div key={data.name} className="col-lg-3 col-md-4 my-3">
							<MCard name={data.name} image={data.image} price={data.price} isPremium={data.isPremium} />
						</div>
					))
				}
			</div>
		</div>
		</>
	);
};

export default Skin;