 import React from 'react';
import { Link } from 'react-router-dom';

import { Modal, Form, Button, Divider } from 'semantic-ui-react';

class Signup extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			email: '',
			password: ''
		}
	}

	login() {

	}

	render() {
		return (
			<Modal
				closeIcon={true}
				open={this.props.loginModalOpen}
				dimmer='blurring'
				size='small'
				style={{ textAlign: 'center', fontSize: '1.4rem' }}
				onClose={this.props.toggleLoginModal}
			>
				<Modal.Header>
					Log In
				</Modal.Header>
				<Modal.Content>
					<Form widths='equal'>
						<Form.Group inline={false}>
							<Form.Input placeholder='email' label='email' />
							<Form.Input placeholder='password' type='password' label='password' />
						</Form.Group>
						<Button
							primary={true}
							content='Log In'
							onClick={this.login.bind(this)}
						/>
					</Form>
					<Divider />
					<Modal.Content>
						New to Pulse? <Link to='/signup'>Sign up</Link>
					</Modal.Content>
				</Modal.Content>
			</Modal>
		);
	}
}

export default Signup;