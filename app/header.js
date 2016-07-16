import React from 'react';
import {
	DropdownButton,
	MenuItem,
	ButtonToolbar,
	Button,
} from 'react-bootstrap';

export default class Header extends React.Component {
	render() {
		return (
			<div className="header">
				Header
				<ButtonToolbar>
					<Button>Index</Button>
					<DropdownButton title="Menu">
						<MenuItem eventKey="1">React</MenuItem>
						<MenuItem eventKey="2">So Great</MenuItem>
					</DropdownButton>
				</ButtonToolbar>
			</div>
		);
	}
}