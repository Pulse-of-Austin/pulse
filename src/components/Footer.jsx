import React from 'react';
import { Menu } from 'semantic-ui-react';

class Footer extends React.Component {
	constructor(props) {
		super(props);

		this.state = {

		}
	}

	render() {
		return (
			<Menu
				size='mini'
				fixed='bottom'
				inverted={true}
				style={{ minHeight: '40px' }}
			>
				<Menu.Menu position='left'>
					<Menu.Item position='left'>
						&copy; 2018 &mdash; Pulse of Austin
					</Menu.Item>
					<div className="ui three column very relaxed grid">
  					<div className="column">
    					<p>About Us</p>
    					<p>Contact</p>
    					<p>Terms and Conditions</p>
  					</div>
						<div className="ui vertical divider"> and </div>
 							<div className="column">
	 							<p>Facebook</p>
								<p>Twitter</p>
							  <p>Instagram</p>
							 </div>
						</div>
							 
				</Menu.Menu>
			</Menu>
		)
	}
}

export default Footer;
