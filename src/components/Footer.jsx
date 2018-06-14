import React from 'react';
import { Link } from 'react-router-dom';
import { Grid, Menu, Image, Divider, Icon, Header } from 'semantic-ui-react';

class Footer extends React.Component {
	constructor(props) {
		super(props);

		this.state = {

		}
	}

	render() {
		const styles = {
			footerh3: {
				display: 'inline',
				width: '150px'
			}
		}
		return (

			<div id='footer'>

				<aside id='blue_strip'>- </aside>

				<section id='footer_inner_box'>
					<img src='./images/pulsefooter.png' alt='Pulse of Austin Logo'/>
					
					<div id='footer_text'>
						<Link to='/' style={styles.footerh3}>
							<h3 className='white'>ABOUT US</h3>
						</Link>
						<Link to='/' style={styles.footerh3}>
							<h3 className='white'>CONTACT US</h3>
						</Link>
						<Link to='/' style={styles.footerh3}>
							<h3 className='white'>FAQS</h3>
						</Link>
					</div>

					<div style={{width: 'auto', margin: 'auto'}}>
						<a href='https://www.facebook.com/pulseofaustin/'>
							<Icon 
								name='facebook' 
								size='big' 
								link={true} 
								inverted={true}
								style={{marginRight: '10px'}}
							/>
						</a>
						<a href=''>
							<Icon 
								name='instagram' 
								size='big' 
								link={true} 
								inverted={true}
								style={{marginLeft: '10px'}}
							/>
						</a>
					</div>
				</section>

			</div>
		)
	}
}

export default Footer;
