import React from 'react';
import { Grid, Header, Search, Menu } from 'semantic-ui-react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import NavBar from './NavBar.jsx';
import Footer from './Footer.jsx';
import HorizontalFeed from './HorizontalFeed.jsx';
import TrendingTopics from './TrendingTopics.jsx';

class Know extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			activeItem: 'latest'
		}
	}

	render() {
		return (

			<div>
				<NavBar />

				<section id='know_container'>

					<div className='space_between'>
						<h3>Making civic engagement personal and simple.</h3>
						<Search />
					</div>

					<div className='space_between'>

						<Menu id='search_section' pointing={true} secondary={true}>
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

					</div>
					
					<HorizontalFeed />
				</section>

				<section>
					<TrendingTopics />
				</section>

				<Footer />

			</div>
		);
	}
}

const mapDispatchToProps = (dispatch) => (
	bindActionCreators({}, dispatch)
)

export default connect(null, mapDispatchToProps)(Know);