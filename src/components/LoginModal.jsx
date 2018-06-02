import React from 'react';

import { Modal, Form, Button, Divider } from 'semantic-ui-react';

class LoginModal extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			loginOrSignup: 'login',
			email: '',
			password: ''
		}
	}

	login() {

	}

	toggleSignUp() {
		this.setState({
			loginOrSignup: this.state.loginOrSignup === 'login' ? 'signup' : 'login'
		})
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
					<Modal.Header content={this.state.loginOrSignup === 'login' ? 'Log In' : 'Sign Up'}/>
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
						<Divider/>
						<Modal.Content>
							{this.state.loginOrSignup === 'login' ? 'New to Pulse?' : 'Already a member?'} 
								<a style={{cursor: 'pointer'}} onClick={this.toggleSignUp.bind(this)}>
									{this.state.loginOrSignup === 'login' ? ' Sign up' : ' Log in'}
								</a>
						</Modal.Content>
					</Modal.Content>
				</Modal>

		);
	}
}

export default LoginModal;