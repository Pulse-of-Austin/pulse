import React from 'react';
import { Grid, Menu, Image, Divider, Icon, Header } from 'semantic-ui-react';

class Footer extends React.Component {
	constructor(props) {
		super(props);

		this.state = {

		}
	}

	render() {
		return (
			<Menu inverted={true} fixed='bottom' textAlign='center'>
				<Grid>
					<Grid.Row>
						<Image style={{marginLeft: '45%', marginTop: '10px', marginBottom: '-10px'}} src='./images/pulsefooter.png'/>
					</Grid.Row>
					<Grid.Row>
						<Header style={{marginLeft: '50%'}} as='h3' content='ABOUT US  |  CONTACT US  |  FAQS' />
					</Grid.Row>
					<Grid.Row>
						<Icon name='instagram' size='big' link={true} inverted={true} />
						<Icon name='facebook' size='big' link={true} inverted={true}/>
					</Grid.Row>
				</Grid>
			</Menu>
		)
	}
}

export default Footer;
