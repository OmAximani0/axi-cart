import React from "react";

//* Custom Components
import Card from "../components/Card";

const CardData = [
	{
		"title": "Skin For Mobile",
		"desc": "Get Customized Skin's For Your Mobile Or Tablet",
		"btn": "Skin Store",
		"BtnLink": "/store/skins"
	},
	{
		"title": "Covers For Mobile",
		"desc": "Get Customized Cover For Your Mobile Protection.",
		"btn": "Cover Store",
		"BtnLink": "/store/covers"
	},
]

function Home() {
	return (
		<>
			<div className="container mt-4">
				<div className="row mx-auto">
					{
						CardData.map(ele => (
							<div key={ele.title} className="col-12 col-md-6 my-3"><Card title={ele.title} btn={ele.btn} BtnLink={ele.BtnLink} desc={ele.desc} /></div>
						))
					}
				</div>
			</div>
		</>
	);
};

export default Home;