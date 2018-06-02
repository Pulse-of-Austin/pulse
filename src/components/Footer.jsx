import React from 'react';
import { Menu } from 'semantic-ui-react';

class Footer extends React.Component {
	constructor(props) {
		super(props);

		this.state = {

		}
	}

	render() {
		return (
			<Menu
				size='huge'
				fixed='bottom'
				inverted={true}
				style={{ minHeight: '40px' }}
			>
				<Menu.Menu position='right'>
					<Menu.Item position='right'>
						&copy; 2018 &mdash; Pulse of Austin
					</Menu.Item>
				</Menu.Menu>
			</Menu>
		)
	}
}

export default Footer;