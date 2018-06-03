import React from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Button, Header, Grid, Segment, Image, Card, Divider, Icon } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

import { selectTopic, selectNewTopicStubs, selectPreviousTopicStubs } from '../actions/TopicActions.js';

import VotesModal from './VotesModal.jsx';

class HorizontalFeed extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			topicStubs: [],
			modalOpen: false
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
	}

	componentWillReceiveProps() {
		this.setState({
			topicStubs: this.props.topicStubs
		});
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

	toggleVotesModal = () => {
		this.setState({
			modalOpen: !this.state.modalOpen
		})
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
				marginTop: '150%',
				right: '5%',
				cursor: 'pointer'
			},
		}

		return (
			<Grid centered={true} style={{marginTop: '-35px'}}>
				<Grid.Row columns={5}>
					<Grid.Column width={1}>
						<Icon style={styles.left} name='left chevron' size='big' onClick={this.previousTopics}/>
					</Grid.Column>
					{this.state.topicStubs[2] ? 
						this.state.topicStubs.map((topicStub, index) => {
							if (topicStub) {
								return (
									<Grid.Column width={4} key={index}>
										<Segment>
											<img src={topicStub.imageURL} style={{width: '70%'}}/>
											<Card>
												<Card.Meta content={topicStub.category.toUpperCase()} />
												<Card.Header as='h4' content={topicStub.title} style={{ marginTop: '0' }}/>
												<Card.Description as='h4' content={topicStub.subtitle} style={{ marginTop: '0' }}/>
												<Link to='/topic'>
													<Card.Description as='h5' content='Read More >' onClick={() => this.openTopic(topicStub.id)} style={{ marginTop: '0', float: 'right' }}/>
												</Link>
											</Card>
										</Segment>
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
					<Grid.Column width={1}>
						<Icon style={styles.right} name='right chevron' size='big' onClick={this.moreTopics} />
					</Grid.Column>
				</Grid.Row>

				<div id='treding_polls'>
					<h3 className='underline gray'>TRENDING POLLS</h3>
					<br/>
					<p>The latest topics Austinites are talking about.<br/>Weigh in and share your thoughts too.</p>
					<button id='primary_blue_button' onClick={this.toggleVotesModal}>HOW YOUR VOTE GETS USED</button>
				</div>

				<VotesModal modalOpen={this.state.modalOpen} toggleVotesModal={this.toggleVotesModal} />
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