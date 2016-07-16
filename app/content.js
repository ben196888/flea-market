import React from 'react';
import {
	ButtonToolbar,
	ButtonGroup,
	Button,
} from 'react-bootstrap';

export default class Content extends React.Component {
	render() {
		return (
			<div className="content">
				<ButtonToolbar>
					<ButtonGroup>
						<Button>Left</Button>
						<Button>Medium</Button>
						<Button>Right</Button>
					</ButtonGroup>
				</ButtonToolbar>
			</div>
		);
	}
}