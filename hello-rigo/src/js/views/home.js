import React from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.scss";
import { PlanetCard } from "./planetCard";
import { CharacterCard } from "./characterCard";

export class Home extends React.Component {
	render() {
		return (
			<div className="container">
				<h1>Planets</h1>
				<div className="row">
					<PlanetCard />
				</div>
				<h1>Characters</h1>
				<div className="row">
					<CharacterCard />
				</div>
			</div>
		);
	}
}
