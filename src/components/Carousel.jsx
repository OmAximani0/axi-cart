import React from "react";

function Carousel() {
	return (
		<div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel">
			<ol className="carousel-indicators">
				<li data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active"></li>
				<li data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1"></li>
				<li data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2"></li>
			</ol>
			<div className="carousel-inner">
				<div className="carousel-item active">
					<img src="https://source.unsplash.com/1600x800/?IT" className="d-block w-100" alt="https://source.unsplash.com/1600x800/?IT" />
					<div className="carousel-caption d-none d-md-block">
						<h5>First slide label</h5>
						<p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
					</div>
				</div>
				<div className="carousel-item">
					<img src="https://source.unsplash.com/1600x800/?coding" className="d-block w-100" alt="https://source.unsplash.com/1600x800/?coding" />
					<div className="carousel-caption d-none d-md-block">
						<h5>Second slide label</h5>
						<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
					</div>
				</div>
				<div className="carousel-item">
					<img src="https://source.unsplash.com/1600x800/?IOT" className="d-block w-100" alt="https://source.unsplash.com/1600x800/?IOT" />
					<div className="carousel-caption d-none d-md-block">
						<h5>Third slide label</h5>
						<p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
					</div>
				</div>
			</div>
			<a className="carousel-control-prev" href="#carouselExampleCaptions" role="button" data-bs-slide="prev">
				<span className="carousel-control-prev-icon" aria-hidden="true"></span>
				<span className="visually-hidden">Previous</span>
			</a>
			<a className="carousel-control-next" href="#carouselExampleCaptions" role="button" data-bs-slide="next">
				<span className="carousel-control-next-icon" aria-hidden="true"></span>
				<span className="visually-hidden">Next</span>
			</a>
		</div>
	);
};

export default Carousel;