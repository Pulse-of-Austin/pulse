import React from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Button, Header, Grid, Segment, Image, Card, Divider, Icon } from 'semantic-ui-react';

import { selectTopic, selectNewTopicStubs, selectPreviousTopicStubs } from '../actions/TopicActions.js';

class HorizontalFeed extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			topicStubs: []
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
		axios.get(`/topic?${topicId}`)
			.then(topic => {
				this.props.selectTopic(topic);
				this.props.history.push(`/topic?${topic.name}`)
			})
			.catch(err => {
				console.error(err);
			})
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
				marginTop: '150%',
				right: '5%',
				cursor: 'pointer'
			},
		}

		return (
			<Grid centered={true} style={{marginTop: '-35px'}}>
				<Grid.Row columns={5}>
					<Grid.Column width={1}>
						<Icon style={styles.left} name='left chevron' size='huge' onClick={this.previousTopics}/>
					</Grid.Column>
					{this.state.topicStubs[2] ? 
						this.state.topicStubs.map((topicStub, index) => {
							return (
								<Grid.Column width={4} key={index}>
									<Segment>
										<img src={topicStub.imageURL} style={{width: '70%'}}/>
										<Card>
											<Card.Meta content={topicStub.category.toUpperCase()} />
											<Card.Header as='h4' content={topicStub.title} style={{ marginTop: '0' }}/>
											<Card.Description as='h4' content={topicStub.subtitle} style={{ marginTop: '0' }}/>
											<Card.Description as='h5' content='Read More >' onClick={() => this.openTopic(topicStub.id)} style={{ marginTop: '0', float: 'right' }}/>
										</Card>
									</Segment>
								</Grid.Column>
							)
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
						<Icon style={styles.right} name='right chevron' size='huge' onClick={this.moreTopics} />
					</Grid.Column>
				</Grid.Row>
				<Divider />
				<Grid.Row>
					<Segment textAlign='left' style={{marginLeft: '-40%'}}>
						<Header 
							as='h3' 
							content='TRENDING POLLS' 
							style={{textDecoration: 'underline'}} 
						/>
						<p>The latest topics Austinites are talking about.</p>
						<p>Weigh in and share your thoughts too.</p>
						<Button primary={true}>HOW YOUR VOTE GETS USED</Button>
					</Segment>
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