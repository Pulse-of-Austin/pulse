import React from 'react';
import { Grid, Accordion } from 'semantic-ui-react';

import NavBar from './NavBar.jsx';
import Footer from './Footer.jsx';
import Category from './Category.jsx';

class WeighIn extends React.Component {
	constructor(props) {
		super(props);
		
		this.state = {
			categories: []
		}
	}
	
	render() {
		return (
			<Grid>
				<Grid.Row>
					<NavBar />
				</Grid.Row>
				<Grid.Row style={{ marginTop: '100px' }}>
					<Accordion style={{marginTop: '200px'}}>
						{this.state.categories.map(category => <Category category={category}/>)}
					</Accordion>
				</Grid.Row>
				<Grid.Row>
					<Footer />
				</Grid.Row>
			</Grid>
		);
	}
}

export default WeighIn;