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

	componentDidMount = () => {
		navigator.geolocation.getCurrentPosition((position) => {
			var location = {
				longitude: position.coords.longitude,
				latitude: position.coords.latitude
			}
			console.log(location)
		})
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

				<div className='large_margin'>
					<section className='centerH'>
						<h1>We exist to make civic engagement personal and simple,</h1>
						<h1>where ALL recident voices shape the future of our city</h1>
					</section>

					<section className='centerH small_margin'>	
						<h2>How do you want to get started?</h2>
					</section>

					<section id='xp_card_container'>
						<Link to='/learn' className='xp_card'>
							<h3>Learn the Ropes</h3>
							<br/>
							<img className='xp_card_img' src='./images/learn.png' alt='Face of blank person'/>
							<h3>"I'd like to learn how Austin's Government Works."</h3>
						</Link>

						<Link to='explore' className='xp_card' onClick={this.props.viewFilter}>
							<h3>Weigh in</h3>
							<br/>
							<img className='xp_card_img' src='./images/weighIn.png' alt='Face of blank person'/>
							<h3>"I've got something to say! I want to contribute to an issue I care about."</h3>
						</Link>

						<Link to='explore' className='xp_card'>
							<h3>Be in the Know</h3>
							<br/>
							<img className='xp_card_img' src='./images/explore.png' alt='Face of blank person'/>
							<h3>"I want to explore what is happening with local government in Austin."</h3>
						</Link>
					</section>
				</div>

				<Footer />
			</div>
		);
  }
}

const mapDispatchToProps = (dispatch) => (
	bindActionCreators({ viewFilter }, dispatch)
)

export default connect(null, mapDispatchToProps)(SplashPage);