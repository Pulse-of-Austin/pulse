import React from 'react';
import axios from 'axios';

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

  onChange = (e, { name, value }) => {
    this.setState({ [name]: value })
  }

  login = () => {
    axios.post('/login', {
      email: this.state.email,
      password: this.state.password,
    })
    .then((data) => {

    })
    .catch((err) => {
      console.error(err);
    })
  }

  signup = () => {
    axios.post('/signup', {
      email: this.state.email,
      password: this.state.password,
    })
      .then((data) => {

      })
      .catch((err) => {
        console.error(err);
      })
  }

  toggleSignUp = () => {
    this.setState({
      loginOrSignup: this.state.loginOrSignup === 'login' ? 'signup' : 'login'
    })
  }

  render = () => {
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
                <Form.Input 
                  placeholder='email' 
                  label='email'
                  name='email'
                  value={this.state.email}
                  onChange={this.onChange}
                />
                <Form.Input 
                  placeholder='password' 
                  type='password' 
                  label='password'
                  name='password'
                  value={this.state.password}
                  onChange={this.onChange}
                />
              </Form.Group>
              <Button 
                primary={true}
                content='Log In'
                onClick={this.state.loginOrSignup === 'login' ? this.login : this.signup}
              />
            </Form>
            <Divider/>
            <Modal.Content>
              {this.state.loginOrSignup === 'login' ? 'New to Pulse?' : 'Already a member?'} 
                <a style={{cursor: 'pointer'}} onClick={this.toggleSignUp}>
                  {this.state.loginOrSignup === 'login' ? ' Sign up' : ' Log in'}
                </a>
            </Modal.Content>
          </Modal.Content>
        </Modal>

    );
  }
}

export default LoginModal;