import React from 'react';
import { Button, Header, Grid, Segment, Image, Card, Divider, Icon } from 'semantic-ui-react';

class HorizontalFeed extends React.Component {
	constructor(props) {
		super(props);

		this.state = {

		}
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
			<Grid centered={true}>
				<Grid.Row columns={5}>
					<Grid.Column width={1}>
						<Icon style={styles.left} name='left chevron' size='huge' />
					</Grid.Column>
					<Grid.Column width={4}>
						<Segment>
							<img src='http://static.dnaindia.com/sites/default/files/styles/full/public/2017/01/28/542924-bullet-train-012717.jpg' style={{width: '70%'}}/>
							<Card>
								<Card.Meta content='TRANSPORTATION' />
								<Card.Header as='h4' content='Smart Mobility Plan'/>
								<Card.Description as='h4' content='How will our transportation look with autonomous vehicles?'/>
								<Card.Description as='h5' content='Read More >'/>
							</Card>
						</Segment>
					</Grid.Column>
					<Grid.Column width={4}>
						<Segment>
							<img src='http://static.dnaindia.com/sites/default/files/styles/full/public/2017/01/28/542924-bullet-train-012717.jpg' style={{width: '70%'}}/>
							<Card>
								<Card.Meta content='TRANSPORTATION' />
								<Card.Header as='h4' content='Strategic Mobility Plan'/>
								<Card.Description as='h4' content={'Austin\'s priorites and what they mean for the future of transportation.'}/>
								<Card.Description as='h5' content='Read More >'/>
							</Card>
						</Segment>
					</Grid.Column>
					<Grid.Column width={4}>
						<Segment>
							<img src='http://static.dnaindia.com/sites/default/files/styles/full/public/2017/01/28/542924-bullet-train-012717.jpg' style={{width: '70%'}}/>
							<Card>
								<Card.Meta content='DEVELOPMENT' />
								<Card.Header as='h4' content='Affordability'/>
								<Card.Description as='h4' content='$300 million dollars in investment have been put aside for a new housing project.'/>
								<Card.Description as='h5' content='Read More >'/>
							</Card>
						</Segment>
					</Grid.Column>
					<Grid.Column width={1}>
						<Icon style={styles.right} name='right chevron' size='huge' />
					</Grid.Column>
				</Grid.Row>
				<Divider />
				<Grid.Row>
					<Segment style={{marginLeft: '-40%'}}>
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

export default HorizontalFeed;