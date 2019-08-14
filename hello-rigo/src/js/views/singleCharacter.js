import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

export class SingleCharacter extends React.Component {
	render() {
		return (
			<div className="jumbotron">
				<Context.Consumer>
					{({ store }) => {
						console.log("#####", store.characters[0]);
						return (
							<div className="container">
								<div className="row">
									{store.characters[0]
										? store.characters[this.props.match.params.theid].name
										: "Loading..."}
								</div>
							</div>
						);
					}}
				</Context.Consumer>

				<hr className="my-4" />

				<Link to="/">
					<span className="btn btn-primary btn-lg" href="#" role="button">
						Back home
					</span>
				</Link>
			</div>
		);
	}
}

SingleCharacter.propTypes = {
	match: PropTypes.object
};
