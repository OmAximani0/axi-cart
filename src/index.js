import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";

import App from "./App";

//* CSS Files
import "./index.css";

//* Bootstrap CSS File
import "bootstrap/dist/css/bootstrap.min.css";

//* Bootstrap JS File
import "bootstrap/dist/js/bootstrap.bundle";

ReactDOM.render(
	<>
	<Router>
		<App />
	</Router>
	</>,
	document.getElementById('root')
)
