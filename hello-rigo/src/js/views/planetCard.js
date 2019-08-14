import React from "react";
import "../../styles/home.scss";
import { Context } from "../store/appContext";

export class PlanetCard extends React.Component {
	render() {
		return (
			<div className="container">
				<div className="card-deck">
					<Context.Consumer>
						{({ store, actions }) => {
							return store.planets.map((item, index) => {
								return (
									<div key={index} className="card">
										<img
											src="https://lumiere-a.akamaihd.net/v1/images/1-alderaan-bio-1_copy_d2ef86c5.jpeg?region=209%2C0%2C978%2C550&width=960"
											className="card-img-top"
											alt="..."
										/>
										<div className="card-body">
											<h5 className="card-title">{item.name}</h5>
											<p className="card-text">Population: {item.population}</p>
											<p className="card-text">Terrain: {item.terrain}</p>
											<a href={"single-planet/" + index} className="btn btn-primary">
												Learn More!
											</a>
										</div>
									</div>
								);
							});
						}}
					</Context.Consumer>
				</div>
			</div>
		);
	}
}
