import React from 'react';
import { Grid, Container, Icon } from 'semantic-ui-react';

import NavBar from './NavBar.jsx';
import Footer from './Footer.jsx';

class Main extends React.Component {
	constructor(props) {
		super(props);

		this.state = {

		}
	}

	render() {
		return (
			<Grid>
				<Grid.Row>
					<NavBar />
				</Grid.Row>
				<Container>

				</Container>
				<Grid.Row>
					<Footer />
				</Grid.Row>
			</Grid>
		);
  }
}

export default Main;