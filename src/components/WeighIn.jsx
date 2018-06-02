import React from 'react';
import { Grid, Accordion } from 'semantic-ui-react';

import NavBar from './NavBar.jsx';
import Footer from './Footer.jsx';

class WeighIn extends React.Component {
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
				<Grid.Row style={{ marginTop: '100px' }}>
				</Grid.Row>
				<Grid.Row>
					<Footer />
				</Grid.Row>
			</Grid>
		);
	}
}

export default WeighIn;