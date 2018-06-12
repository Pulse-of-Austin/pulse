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

			<div id='footer'>

				<aside id='blue_strip'>- </aside>

				<section id='footer_inner_box'>
					<img src='./images/pulsefooter.png' alt='Pulse of Austin Logo'/>
					
					<div id='footer_text'>
						<h3 className='white'>ABOUT US</h3>
						<h3 className='white'>CONTACT US</h3>
						<h3 className='white'>FAQS</h3>
					</div>

					<div>
						<a href='https://www.facebook.com/pulseofaustin/'>
							<Icon 
								className='small_margin' 
								name='facebook' 
								size='big' link={true} 
								inverted={true}
							/>
						</a>
						<a href=''>
							<Icon  className='small_margin' name='instagram' size='big' link={true} inverted={true}/>
						</a>
					</div>
				</section>

			</div>
		)
	}
}

export default Footer;
