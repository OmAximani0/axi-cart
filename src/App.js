import React from "react"; import { Switch, Redirect, Route } from "react-router-dom";

//* Custom Components
import Navbar from "./components/Navbar";

//* Custom Pages
import Home from "./pages/Home";
//  import Cart from "./pages/Cart";
import Cover from "./pages/Cover";
import Skin from "./pages/Skin";

function App() {
	return (
		<>
			<Navbar />
			<Switch>
				<Route exact path="/" component={Home} />
				<Route exact path="/store/covers" component={Cover} />
				<Route exact path="/store/skins" component={Skin} />
				{/* <Route path="/cart" component={Cart}/> */}
				<Redirect to="/" />
			</Switch>
		</>
	);
};

export default App;
