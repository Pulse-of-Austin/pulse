import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Link } from 'react-router-dom';
import { Grid, Button, Header, Image, Icon, Card, Container, Divider, Segment } from 'semantic-ui-react';

import NavBar from './NavBar.jsx';
import Footer from './Footer.jsx';

class TopicPage extends React.Component {
	constructor(props) {
		super(props);

		this.state = {

		}
	}

	select = () => {

	}

	render() {
		const styles = {
			left: {
				position: 'absolute',
				marginTop: '250%',
				left: '5%',
				cursor: 'pointer'
			},
			right: {
				position: 'absolute',
				marginTop: '250%',
				right: '5%',
				cursor: 'pointer'
			},
		}

		return (
			<Grid>
				<Grid.Row>
					<NavBar />
				</Grid.Row>
				<Container style={{width: '1200px', yOverflow: 'scroll'}}>
					<Segment style={{zIndex: '-2'}}>
						<Image style={{ zIndex: '-1', opacity: '0.3', filter: 'alpha(opacity=30)', margin: 'auto', width: '960px', marginBottom: '-100px' }} src='http://kutx.org/wp-content/uploads/2013/12/BSHARE-CITY-HALL.png' />
						<Header as='h4' content={this.props.selectedTopic.date} />
						<Header as='h1' content={this.props.selectedTopic.title}/>
						<Header.Subheader as='h3' content={this.props.selectedTopic.subtitle}/>
						<Divider/>
						<Container textAlign='center'>
							<Header style={{marginTop: '50px'}} as='h1' content='OVERVIEW' />
							<Header.Subheader as='h3' content={this.props.selectedTopic.overview}/>
						</Container>
					</Segment>
					<Container textAlign='center'>
						<Header style={{marginTop: '50px', marginBottom: '50px'}} as='h1' content='DETAILS' />
						<Grid centered={true} style={{ marginTop: '-35px' }}>
							<Grid.Row columns={5}>
								<Grid.Column width={1}>
									<Icon style={styles.left} name='left chevron' size='huge' />
								</Grid.Column>
								{this.props.selectedTopic.details.map((detail, index) => {
									return (<Grid.Column width={4} key={index}>
										<Segment>
											<img src='https://static1.squarespace.com/static/539202fee4b07e80b7d73014/t/5456cad1e4b061c74dc3cda0/1501088324230/Austin+Bike+Tours?format=500w' style={{ width: '70%' }} />
											<Card>
												<Card.Header as='h3' content={detail.title} style={{ marginTop: '0' }} />
												<Card.Description as='h4' content={detail.description} style={{ marginTop: '0' }} />
											</Card>
										</Segment>
									</Grid.Column>)
								})}
								<Grid.Column width={1}>
									<Icon style={styles.right} name='right chevron' size='huge' />
								</Grid.Column>
							</Grid.Row>
						</Grid>
					</Container>
					<Segment textAlign='center' style={{marginBottom: '200px'}}>
						<Header as='h1' content='MILESTONES' />
						<Image style={{width: '40%', margin: 'auto'}} src='./images/milestones.png' />
						<Header as='h1' content={'WHERE YOU\'LL FIND DOCKLESS TRANSPORTATION'} />
						<Image src='./images/map.png' />
					</Segment>
					<Container textAlign='center' style={{marginTop: '-150px', marginBottom: '200px'}}>
						<Header as='h1' content='PERSPECTIVES' />
						<Grid>
							<Grid.Row columns={2}>
								<Grid.Column>
									<Header style={{marginTop: '100px'}} as='h2' content='Dockless Ridership Data is Highly Valuable' />
								</Grid.Column>
								<Grid.Column>
									{this.props.selectedTopic.perspectives.map((perspective, index) => {
										return (
											<Card key={index}>
												<Card.Header content={perspective.who} />
												<Card.Meta><Icon name='clock' />{perspective.when}</Card.Meta>
												<Card.Content content={perspective.what} />
											</Card>
										)
									})}
								</Grid.Column>
							</Grid.Row>
						</Grid>
					</Container>
				</Container>
				<Link to='/topic#weigh-in' style={{textAlign: 'center', position: 'fixed', bottom: '50px', right: '50px'}}>
					<Header as='h4' content={'Weigh In Now!'} />
					<Icon 
						name='chevron down' 
						size='big' 
						link={true} 
						bordered={true}
					/>
				</Link>
				<Container textAlign='center'>
					<Divider />
					<Header as='h1' content='Weigh In' />
					<Grid centered={true}>
						<Grid.Row columns={3}>
							{this.props.selectedTopic.polls.map((poll, index) => {
								return (
									<Card style={{padding: '20px', margin: '20px', height: '520px'}} key={index}>
										<Header as='h1' style={{position: 'absolute', left: '0px', top: '0px', zIndex: '-100'}} />
										<Header as='h4' content={poll.question}/>
										{poll.options.map((option, index) => {
											return (
												<Segment onClick={this.select} key={index} style={{backgroundColor: 'lightgrey', color: 'black', cursor: 'pointer'}}>
													<b>{`${option.letter}: `}</b>{option.details}
												</Segment>
											)
										})}
										<Button content='Next' style={{position: 'absolute', width: '50%', bottom: '10px', backgroundColor: '#F7B313', color: 'white', borderRadius: '30px', left: '25%'}} />
									</Card>
								)
							})}
						</Grid.Row>
					</Grid>
				</Container>
				<Grid.Row>
					<Footer />
				</Grid.Row>
			</Grid>
		)
	}
}

const mapStateToProps = state => (
	{
		selectedTopic: state.TopicReducer.selectedTopic
	}
)

export default connect(mapStateToProps)(TopicPage);