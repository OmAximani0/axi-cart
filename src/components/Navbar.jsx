import React from "react";
import { NavLink } from "react-router-dom";

function Navbar() {
	return (
		<>
			<nav className="navbar navbar-expand-lg navbar-dark bg-dark">
				<div className="container-fluid mb-1">
					<NavLink exact className="navbar-brand mb-1" to="/">A-X-I Cart</NavLink>
					<button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
						<span className="navbar-toggler-icon"></span>
					</button>
					<div className="collapse navbar-collapse" id="navbarSupportedContent">
						<ul className="navbar-nav ml-auto mb-2 mb-lg-0">
							<li className="nav-item dropdown">
								<a className="nav-link dropdown-toggle" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
									Shop
								</a>
								<ul className="dropdown-menu" aria-labelledby="navbarDropdown">
									<li><NavLink exact className="dropdown-item" to="/store/covers">Covers</NavLink></li>
									<li><hr className="dropdown-divider" /></li>
									<li><NavLink exact className="dropdown-item" to="/store/skins">Skins</NavLink></li>
								</ul>
							</li>
							{/* <li className="nav-item">
								<NavLink activeClassName="active-nav" className="nav-link" to="/cart">Cart</NavLink>
							</li> */}
						</ul>
					</div>
				</div>
			</nav>
		</>
	);
};

export default Navbar;