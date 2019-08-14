import React from "react";
import "../../styles/home.scss";
import { Context } from "../store/appContext";
export class CharacterCard extends React.Component {
	render() {
		return (
			<Context.Consumer>
				{({ store, actions }) => {
					return store.characters.map((item, index) => {
						return (
							<div key={index} className="card">
								<img src="..." className="card-img-top" alt="..." />
								<div className="card-body">
									<h5 className="card-title">{item.name}</h5>
									<p className="card-text">Population: {item.gender}</p>
									<p className="card-text">Terrain: {item.height}</p>
									<a href={"single-character/" + index} className="btn btn-primary">
										Learn More!
									</a>
								</div>
							</div>
						);
					});
				}}
			</Context.Consumer>
		);
	}
}
