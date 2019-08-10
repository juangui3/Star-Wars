import React from "react";
import { Link } from "react-router-dom";

export class Navbar extends React.Component {
	render() {
		return (
			<nav className="navbar navbar-light bg-light mb-3">
				<Link to="/">
					<img
						src="http://pngimg.com/uploads/star_wars_logo/star_wars_logo_PNG43.png"
						width="50px"
						height="50px"
					/>
				</Link>
				<div className="ml-auto">
					<Link to="#">
						<div className="dropdown">
							<button
								className="btn btn-secondary dropdown-toggle"
								type="button"
								id="dropdownMenuButton"
								data-toggle="dropdown"
								aria-haspopup="true"
								aria-expanded="false">
								Favorites
							</button>
							<div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
								<a className="dropdown-item" href="#">
									Action
								</a>
								<a className="dropdown-item" href="#">
									Another action
								</a>
								<a className="dropdown-item" href="#">
									Something else here
								</a>
							</div>
						</div>
					</Link>
				</div>
			</nav>
		);
	}
}
