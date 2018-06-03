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
			<Grid>
				<Grid.Row>
					<NavBar />
				</Grid.Row>
				<Grid.Row style={{ marginTop: '5vh' }}>
					<Menu style={{ marginLeft: '100px'}} pointing={true} secondary={true}>
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
					<HorizontalFeed style={{float: 'left'}} />
					<TrendingTopics style={{float: 'right'}}/>
				</Grid.Row>
				{/* <Grid.Row>
					<Footer />
				</Grid.Row> */}
			</Grid>
		);
	}
}

const mapDispatchToProps = (dispatch) => (
	bindActionCreators({ }, dispatch)
)

export default connect(null, mapDispatchToProps)(Know);