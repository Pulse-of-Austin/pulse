import React from 'react';
import { Menu, Divider, Image } from 'semantic-ui-react';

class Footer extends React.Component {
	constructor(props) {
		super(props);

		this.state = {

		}
	}

	render() {
		return (
			<Menu
				size='huge'
				fixed='bottom'
				inverted={true}
				style={{ minHeight: '40px' }}
			>
				<Menu.Menu position='center'>
					<Menu.Item position='center'>
					 <Image src=''/>
					<div class="ui borderless menu">
							<a class="item">About Us</a>
							<a class="item">Contact Us</a>
							<a class="item">FAQ</a>
					</div>
					<div class="ui horizontal divider"> </div>
					<div class="ui borderless menu">
							<a class="item"> <i class="instagram icon"></i> </a>
							<a class="item"> <i class="facebook f icon"></i> </a>
					</div>
					</Menu.Item>


				</Menu.Menu>
			</Menu>
		)
	}
}

export default Footer;
