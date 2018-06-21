import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import axios from 'axios';

import { Modal, Form, Button, Divider, Dropdown } from 'semantic-ui-react';

import { login } from '../actions/UserActions.js';

class LoginModal extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      loginOrSignup: 'login',
      email: '',
      password: '',
      name: '',
      zipcode: '',
      gender: '',
      age: '',
      income: '',
      success: false,
      error: false
    }
  }

  onChange = (e, { name, value }) => {
    this.setState({ [name]: value })
  }

  login = () => {
    axios.post('http://api.pulseofaustin.org/auth/login', {
      email: this.state.email,
      password: this.state.password,
    })
    .then((result) => {
      this.setState({ success: true })
      this.props.login(result.data.user.name || result.data.user.email, result.data.user.email, result.data.user.role)
      setTimeout(() => {
        this.props.toggleLoginModal();
      }, 2000)
    })
    .catch((err) => {
      this.setState({ error: 'true' })
      setTimeout(() => this.setState({ loginOrSignup: 'login', error: false }), 2000)
      console.error(err);
    })
  }

  signup = () => {
    if (this.state.password.length > 5 && this.state.name.length > 0) {
      axios.post('http://api.pulseofaustin.org/auth/signup', {
        email: this.state.email,
        password: this.state.password,
        name: this.state.name || '1',    // *****Not sure what's going on here, but signup only succeeds if all values are supplied, even though they do not all seem to be mandatory in the db schema. Even supplying null values is a no go
        gender: this.state.gender || '1',
        age: this.state.age || '1',
        zipcode: this.state.zipcode || '1',
        income: this.state.income || '1',
      })
        .then(() => {
          this.setState({ success: true })
          setTimeout(() => this.setState({ loginOrSignup: 'login', success: false }), 3000)
        })
        .catch((err) => {
          console.error(err);
          this.setState({ error: true })
          setTimeout(() => this.setState({ error: false }), 3000)
        })
    }
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
                  required={this.state.loginOrSignup === 'signup' ? true : false}
                  value={this.state.email}
                  onChange={this.onChange}
                  />
                <Form.Input 
                  placeholder='password' 
                  type='password' 
                  label='password'
                  name='password'
                  required={this.state.loginOrSignup === 'signup' ? true : false}
                  minLength={6}
                  value={this.state.password}
                  onChange={this.onChange}
                />

              </Form.Group>
              {this.state.loginOrSignup !== 'login' && 
                <div>
                  <Form.Group inline={false}>
                    <Form.Input
                      placeholder='Jane Doe'
                      label='name'
                      name='name'
                      required
                      value={this.state.name}
                      onChange={this.onChange}
                    />
                  </Form.Group>
                  <Form.Group>
                    <Form.Dropdown
                      placeholder='gender'
                      label='gender'
                      name='gender'
                      fluid
                      selection
                      required
                      options={genderOptions}
                      value={this.state.gender}
                      onChange={this.onChange}
                      />
                    <Form.Input
                      placeholder='01234'
                      label='zipcode'
                      name='zipcode'
                      required
                      value={this.state.zipcode}
                      onChange={this.onChange}
                      />
                    <Form.Input
                      placeholder='age'
                      label='age'
                      name='age'
                      type='number'
                      min={1}
                      max={110}
                      required
                      value={this.state.age}
                      onChange={this.onChange}
                      />
                    <Form.Input
                      placeholder='$30,000'
                      label='income'
                      name='income'
                      required
                      value={this.state.income}
                      onChange={this.onChange}
                      />
                  </Form.Group>
                </div>
              }
              <Button
                primary={(this.state.success || this.state.error) ? false : true}
                positive={this.state.success ? true : false }
                negative={this.state.error ? true : false }
              content={this.state.success
                ? 'Success!'
                : this.state.error
                  ? 'Error'
                    : this.state.loginOrSignup === 'login' 
                      ? 'Login' 
                      : 'Sign up'}
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

const genderOptions = [
  { key: 'male', text: 'Male', value: 'male' },
  { key: 'female', text: 'Female', value: 'female' },
  { key: 'nb', text: 'Non-Binary', value: 'nb' },
  { key: 'other', text: 'Other', value: 'other' },
]

const mapDispatchToProps = (dispatch) => (
  bindActionCreators({ login }, dispatch)
)

export default connect(null, mapDispatchToProps)(LoginModal);