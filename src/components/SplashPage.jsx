import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Grid, Container, Icon, Header, Segment } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

import NavBar from './NavBar.jsx';
import Footer from './Footer.jsx';

import { viewFilter } from '../actions/UserActions.js';

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

			<div className='nav_drop'>

				<NavBar />

				<section className='centerH small_margin'>
					<img src='./images/orangeOutline.png' alt='Pulse of Austin Logo' />
					<h2>We exist to make civic engagement personal and simple,</h2>
					<h2>where ALL recident voices shape the future of our city</h2>
				</section>

				<section className='centerH'>	
					<h2>How do you want to get started?</h2>
				</section>

				<section id='xp_card_container'>
					<div className='xp_card'>
						<h3>Learn the Ropes</h3>
						<Link to='/learn'>
							<img className='xp_card_img' src='./images/learn.png' alt='Face of blank person'/>
						</Link>
						<h3>"I'd like to learn how Austin's Government Works."</h3>
					</div>

					<div className='xp_card'>
						<h3>Weigh In</h3>
						<Link to='/explore' onClick={this.props.viewFilter}>
							<img className='xp_card_img' src='./images/weighIn.png' alt='Face of blank person'/>
						</Link>
						<h3>"I've got somethign to say! I want to contribute to an issue I care about."</h3>
					</div>

					<div className='xp_card'>
						<h3>Explore</h3>
						<Link to='/explore'>
							<img className='xp_card_img' src='./images/explore.png' alt='Face of blank person'/>
						</Link>
						<h3>"I want to explore what is happening with local government in Austin."</h3>
					</div>
				</section>

				<Footer />

			</div>

			// <Grid>
			// 	<Grid.Row>
			// 		<NavBar />
			// 	</Grid.Row>
			// 	<Grid.Row style={{marginTop: '100px'}}>
			// 		<Link to ='/learn'>
			// 			<Segment style={styles.segment}>
			// 				<Header as='h2' content='Learn The Ropes' />
			// 				<Icon
			// 					style={styles.userIcon}
			// 					size='massive'
			// 					name='user'
			// 				/>
			// 				<Header as='h3' content="I'd like to learn how Austin Government works." />
			// 			</Segment>
			// 		</Link>
			// 		<Link to='/weigh-in'>
			// 			<Segment style={styles.segment}>
			// 				<Header as='h2' content='Weigh In' />
			// 				<Icon
			// 					style={styles.userIcon}
			// 					size='massive'
			// 					name='user'
			// 				/>
			// 				<Header as='h3' content="I've got something to say! I want to contribute to an issue I care about." />
			// 			</Segment>
			// 		</Link>
			// 		<Link to='/know'>
			// 			<Segment style={styles.segment}>
			// 				<Header as='h2' content='Be in The Know' />
			// 				<Icon
			// 					style={styles.userIcon}
			// 					size='massive'
			// 					name='user'
			// 				/>
			// 				<Header as='h3' content="I want to explore what's happening with local government in Austin." />
			// 			</Segment>
			// 		</Link>	
			// 	</Grid.Row>
			// 	<Grid.Row>
			// 		<Footer />
			// 	</Grid.Row>
			// </Grid>
		);
  }
}

const mapDispatchToProps = (dispatch) => (
	bindActionCreators({ viewFilter }, dispatch)
)

export default connect(null, mapDispatchToProps)(SplashPage);