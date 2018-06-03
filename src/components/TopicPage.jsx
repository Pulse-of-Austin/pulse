import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Grid, Button, Header, Image, Icon, Card, Container, Divider, Segment } from 'semantic-ui-react';

import NavBar from './NavBar.jsx';
import Footer from './Footer.jsx';

class TopicPage extends React.Component {
	constructor(props) {
		super(props);

		this.state = {

		}
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
						<Image src='./images/milestones.png' />
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
									{this.props.selectedTopic.perspectives.map(perspective => {
										return (
											<Card>
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