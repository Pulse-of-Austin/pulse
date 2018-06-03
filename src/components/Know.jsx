import React from 'react';
import { Grid, Header, Search, Menu } from 'semantic-ui-react';

import NavBar from './NavBar.jsx';
import Footer from './Footer.jsx';
import HorizontalFeed from './HorizontalFeed.jsx';

class Know extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			activeItem: 'latest'
		}
	}

	render() {
		return (
			<Grid>
				<Grid.Row>
					<NavBar />
				</Grid.Row>
				<Grid.Row style={{ marginTop: '100px' }}>
					<Menu style={{marginLeft: '100px'}} pointing={true} secondary={true}>
						<Menu.Item 
							link={true} 
							active={this.state.activeItem === 'latest'}
							onClick={() => this.setState({ activeItem: 'latest' })}
						>
							Latest Happenings
						</Menu.Item>
						<Menu.Item 
							link={true} 
							active={this.state.activeItem === 'saved'}
							onClick={() => this.setState({ activeItem: 'saved'})}
						>
							Saved Topics
						</Menu.Item>
					</Menu>
					
					<Search/>
				</Grid.Row>
				<Grid.Row>
					<HorizontalFeed />
				</Grid.Row>
				<Grid.Row>
				</Grid.Row>
				<Grid.Row>
					<Footer />
				</Grid.Row>
			</Grid>
		);
	}
}

export default Know;