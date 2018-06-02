import React from 'react';
import { Link } from 'react-router-dom';
import { Menu } from 'semantic-ui-react';

class NavBar extends React.Component {
	constructor(props) {
		super(props);

		this.state = {

		}
	}

	render() {
		return (
			<Menu
				size='huge'
				fixed='top'
				inverted={true}
				style={{ minHeight: '40px' }}
			>
				<Link to='/'>
					<Menu.Item link={true}>Home</Menu.Item>
				</Link>
				<Menu.Menu position='right'>
					<Link to='/login'>
						<Menu.Item
							position='right'
							link={true}
						>
						Login
						</Menu.Item>
					</Link>
					<Link to='/profile'>
						<Menu.Item
							position='right'
							link={true}
						>
						Profile
						</Menu.Item>
					</Link>
					<Link to='/favorites'>
						<Menu.Item
							position='right'
							link={true}
						>
						Favorites
						</Menu.Item>
					</Link>
				</Menu.Menu>
			</Menu>
		)
	}
}

export default NavBar;