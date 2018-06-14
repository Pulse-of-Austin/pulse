import React from 'react';
import { Container, Search, Menu } from 'semantic-ui-react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import NavBar from './NavBar.jsx';
import Footer from './Footer.jsx';
import HorizontalFeed from './HorizontalFeed.jsx';
import TrendingTopics from './TrendingTopics.jsx';
import VotesModal from './VotesModal.jsx';

class Know extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			activeItem: 'latest',
			modalOpen: false
		}
	}

	componentDidMount() {
		window.addEventListener('resize', this.resize.bind(this));
		this.resize();
	}

	resize() {
		this.setState({ resize: window.innerWidth <= 1600 })
		this.setState({ mobile: window.innerWidth <= 1000 })
	}

	toggleVotesModal = () => {
		this.setState({
			modalOpen: !this.state.modalOpen
		})
	}

	render() {
		const styles = {
			container: {
				backgroundColor: '#f0ede7',
				paddingTop: this.state.resize ? '10%' : '5%',
				paddingLeft: '10%',
				paddingRight: '10%',
				width: '100%',
			},
			divider: {
				position: 'relative',
				width: '100%',
				left: 0,
				top: '250px',
				marginTop: '100px'
			},
			trendingPolls: {
				textAlign: 'left',
				marginTop: '10%',
				position: 'relative',
				left: this.state.resize ? '15%' : '25%',
			}
		}
		return (

			<div>
				<NavBar />

				<Container style={styles.container}>

					<div>
						<h2 style={{position: 'absolute', display: 'inline', left: '20px', top: '80px'}}>Making civic engagement personal and simple.</h2>
						<Search style={{float: 'right'}}/>
					</div>

					<Menu id='search_section' pointing={true} secondary={true} style={{position: 'absolute', left: '40px', borderBottom: '2px solid gray', marginLeft: '-50px', paddingLeft: '20px', paddingRight: '200%'}}>
						<Menu.Item link={true}
							active={this.state.activeItem === 'latest'}
							onClick={() => this.setState({ activeItem: 'latest' })}>
							Latest Happenings
						</Menu.Item>

						<Menu.Item link={true}
							active={this.state.activeItem === 'saved'}
							onClick={() => this.setState({ activeItem: 'saved' })}>
							Saved Topics
						</Menu.Item>
					</Menu>

					<HorizontalFeed />
				</Container>

				<div style={styles.trendingPolls}>
					<h3 className='underline gray'>TRENDING POLLS</h3>
					<br />
					<p>The latest topics Austinites are talking about.<br />Weigh in and share your thoughts too.</p>
					<button id='primary_blue_button' onClick={this.toggleVotesModal}>HOW YOUR VOTE GETS USED</button>
				</div>
					
				<TrendingTopics />
				<VotesModal modalOpen={this.state.modalOpen} toggleVotesModal={this.toggleVotesModal} />

				<Footer />

			</div>
		);
	}
}

const mapDispatchToProps = (dispatch) => (
	bindActionCreators({}, dispatch)
)

export default connect(null, mapDispatchToProps)(Know);