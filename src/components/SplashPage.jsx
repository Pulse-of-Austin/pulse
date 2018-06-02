import React from 'react';
import { Grid, Container, Icon, Header, Segment } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

import NavBar from './NavBar.jsx';
import Footer from './Footer.jsx';

class SplashPage extends React.Component {
	constructor(props) {
		super(props);

		this.state = {

		}
	}

	render() {
		const styles={
			userIcon: {
				margin: 'auto'
			},
			segment: {
				minWidth: '250px',
				maxWidth: '400px',
				height: '300px',
				margin: 'auto',
				marginTop: '150px',
				textAlign: 'center'
			}
		}
		return (
			<Grid>
				<Grid.Row>
					<NavBar />
				</Grid.Row>
				<Grid.Row style={{marginTop: '100px'}}>
					<Link to ='/learn'>
						<Segment style={styles.segment}>
							<Header as='h2' content='Learn The Ropes' />
							<Icon
								style={styles.userIcon}
								size='massive'
								name='user'
							/>
							<Header as='h3' content="I'd like to learn how Austin Government works." />
						</Segment>
					</Link>
					<Link to='/weigh-in'>
						<Segment style={styles.segment}>
							<Header as='h2' content='Weigh In' />
							<Icon
								style={styles.userIcon}
								size='massive'
								name='user'
							/>
							<Header as='h3' content="I've got something to say! I want to contribute to an issue I care about." />
						</Segment>
					</Link>
					<Link to='/know'>
						<Segment style={styles.segment}>
							<Header as='h2' content='Be in The Know' />
							<Icon
								style={styles.userIcon}
								size='massive'
								name='user'
							/>
							<Header as='h3' content="I want to explore what's happening with local government in Austin." />
						</Segment>
					</Link>	
				</Grid.Row>
				<Grid.Row>
					<Footer />
				</Grid.Row>
			</Grid>
		);
  }
}

export default SplashPage;