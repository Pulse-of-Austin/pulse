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

			<div className='nav_drop'>

				<NavBar />

				<div className='large_margin'>
					<section className='centerH'>
						<h1>We exist to make civic engagement personal and simple,</h1>
						<h1>where ALL recident voices shape the future of our city</h1>
					</section>

					<section className='centerH medium_margin'>	
						<h2>How do you want to get started?</h2>
					</section>

					<section id='xp_card_container'>
						<div className='xp_card'>
							<h3>Learn the Ropes</h3>
							<img className='xp_card_img' src='./images/learn.png' alt='Face of blank person'/>
							<h3>"I'd like to learn how Austin's Government Works."</h3>
						</div>

						<div className='xp_card'>
							<h3>Weigh in</h3>
							<img className='xp_card_img' src='./images/weighIn.png' alt='Face of blank person'/>
							<h3>"I've got somethign to say! I want to contribute to an issue I care about."</h3>
						</div>

						<div className='xp_card'>
							<h3>Be in the Know</h3>
							<img className='xp_card_img' src='./images/explore.png' alt='Face of blank person'/>
							<h3>"I want to explore what is happening with local government in Austin."</h3>
						</div>
					</section>
				</div>

				<Footer />

			</div>
		);
  }
}

export default SplashPage;