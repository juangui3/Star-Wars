import React from "react";
import { Link } from "react-router-dom";
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from "reactstrap";

export class Navbar extends React.Component {
	constructor(props) {
		super(props);

		this.toggle = this.toggle.bind(this);
		this.state = {
			dropdownOpen: false
		};
	}

	toggle() {
		this.setState(prevState => ({
			dropdownOpen: !prevState.dropdownOpen
		}));
	}
	render() {
		return (
			<nav className="navbar navbar-light bg-light mb-3">
				<img
					src="http://pngimg.com/uploads/star_wars_logo/star_wars_logo_PNG43.png"
					width="50px"
					height="50px"
				/>
				<Dropdown isOpen={this.state.dropdownOpen} toggle={this.toggle}>
					<DropdownToggle caret>Dropdown</DropdownToggle>
					<DropdownMenu>
						<DropdownItem header>Header</DropdownItem>
						<DropdownItem>Some Action</DropdownItem>
						<DropdownItem disabled>Action (disabled)</DropdownItem>
						<DropdownItem divider />
						<DropdownItem>Foo Action</DropdownItem>
						<DropdownItem>Bar Action</DropdownItem>
						<DropdownItem>Quo Action</DropdownItem>
					</DropdownMenu>
				</Dropdown>
			</nav>
		);
	}
}
