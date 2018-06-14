import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Button, Header, Grid, Segment, Image, Card, Divider, Icon } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

import { selectTopic, selectNewTopicStubs, selectPreviousTopicStubs } from '../actions/TopicActions.js';

class HorizontalFeed extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			topicStubs: [],
			modalOpen: false,
			rightHover: false,
			leftHover: false
		}
	}

	componentDidMount() {
		let topics = [];
		for (let i = 0; i < 3; i++) {
			topics.push(this.props.topicStubs[i])
		}
		this.setState({
			topicStubs: topics
		});
		window.addEventListener('resize', this.resize.bind(this));
		this.resize();
	}

	componentWillReceiveProps() {
		this.setState({
			topicStubs: this.props.topicStubs
		});
	}

	resize() {
		this.setState({ resize: window.innerWidth <= 1600 })
		this.setState({ mobile: window.innerWidth <= 1000 })
	}

	openTopic = (topicId) => {
		// axios.get(`/topic?${topicId}`)
		// 	.then(topic => {
		// 		this.props.selectTopic(topic);
		// 		this.props.history.push(`/topic?${topic.name}`)
		// 	})
		// 	.catch(err => {
		// 		console.error(err);
		// 	})
	}	

	moreTopics = () => {
		this.props.selectNewTopicStubs();
	}

	previousTopics = () => {
		this.props.selectPreviousTopicStubs();
	}

	render() {
		const styles ={
			left: {
				position: 'absolute',
				marginTop: '150%',
				left: '5%',
				cursor: 'pointer'
			},
			right: {
				position: 'absolute',
				right: '5%',
				cursor: 'pointer',
				top: '40%',
				visibility: this.state.rightHover ? 'visible' : 'hidden'
			},
			grid: { 
				marginTop: this.state.resize ? '100px' : '135px', 
				marginLeft: this.state.resize ? '-12%' : '-11%', 
				marginRight: this.state.resize ? 0 : '-300px',
				width: this.state.resize ? '140%' : 'auto',
				
			}
		}

		return (
			<Grid centered={true} style={styles.grid} stackable={false}>
				<Grid.Row columns={this.state.resize ? 2 : 3}>
					{/* <Grid.Column width={1}>
						<Icon style={styles.left} name='left chevron' size='big' onClick={this.previousTopics}/>
					</Grid.Column> */}
					{this.state.topicStubs[2] ? 
						this.state.topicStubs.map((topicStub, index) => {
							if (topicStub) {
								let imageStyles =  
								{
									backgroundImage: `url(${topicStub.imageURL}`,
									height: '395px',
									width: this.state.resize ? '100%' : '80%',

								}
								return (
									<Grid.Column width={5} key={index} style={this.state.resize ? {margin: '0 auto -100px '} : {margin: '0 20px -100px'}}>
											<div style={imageStyles}/>
											<Card raised={true} style={{ position: 'relative', bottom: '20%', right: this.state.resize ? '-20%' : '-38%', padding: '10px', height: '160px', width: '300px' }}>
												<Card.Meta content={topicStub.category.toUpperCase()} style={{ color: '#9BD6D4', fontWeight: 'bold' }}/>
												<Card.Header as='h3' content={topicStub.title} style={{ marginTop: '5px', marginLeft: '15px' }}/>
												<Card.Description as='h4' content={topicStub.subtitle} style={{ marginTop: '15px', marginLeft: '15px' }}/>
												<Link to='/topic'>
													<Card.Description as='h5' content='READ MORE >' onClick={() => this.openTopic(topicStub.id)} style={{ marginTop: '0', float: 'right', color: 'black', fontWeight: 'bold' }}/>
												</Link>
											</Card>
									</Grid.Column>
								)
							}
						})
						: 
						<div>
							<Grid.Column width={1}/>
							<Grid.Column width={12}>
								<Header style={{margin: 'auto', height: '300px'}} as='h3' content='No new topics right now :(' />
							</Grid.Column>
							<Grid.Column width={1}/>
						</div>
					}
					<div style={{ position: 'absolute', right: '0px', height: '30%', width: '50px' }} onMouseEnter={() => this.setState({ rightHover: !this.state.rightHover })} onMouseLeave={() => this.setState({ rightHover: !this.state.rightHover })}>
						<Icon style={styles.right} name='right chevron' size='big' onClick={this.moreTopics} />
					</div>
				</Grid.Row>
			</Grid>
		)
	}
}

const mapStateToProps = (state) => (
	{
		topicStubs: state.TopicReducer.selectedTopicStubs
	}
)

const mapDispatchToProps = (dispatch) => (
	bindActionCreators({ selectTopic, selectNewTopicStubs, selectPreviousTopicStubs }, dispatch)
)

export default connect(mapStateToProps, mapDispatchToProps)(HorizontalFeed);