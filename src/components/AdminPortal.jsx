import React, { Component } from 'react';
import axios from 'axios';
import { Form, Input, TextArea, Button } from 'semantic-ui-react';
import TopicDropdown from './TopicDropdown.jsx';
import NavBar from './NavBar.jsx';

export default class AdminPortal extends Component {
  constructor(props) {
    super(props);
    this.state = { placeholder: '' };
  }

    render = () => {
      return (
       <div>
          <NavBar/>
          <div style={{
              marginRight: '5vw',
              marginTop: '10vh',
            }}>
            <h3 style={{ marginTop: '5vh' }}>Add a topic!</h3>
            <Form>
                <Form.Group widths='equal'>
                    <Form.Field id='form-input-control-first-name' control={Input} label='Title' placeholder='Topic Title' />
                    <Form.Field id='form-input-control-last-name' control={Input} label='Description' placeholder='Short description' />
                </Form.Group>
                <Form.Field id='form-textarea-control-opinion' control={TextArea} label='Details' placeholder='Lengthy description' />
                <Form.Field id='form-button-control-public' control={Button} content='Confirm!' />
            </Form>
            <h3 style={{ marginTop: '5vh' }}>Add a category!</h3>
            <Form>
              <Form.Group widths='equal'>
                <Form.Field id='form-input-control-first-name' control={Input} label='Category' placeholder='Category Title' />
              </Form.Group>
            <Form.Field id='form-button-control-public' control={Button} content='Confirm!' />
            </Form>
            <h3 style={{ marginTop: '5vh' }}>Add a perspective!</h3>
            <Form>
              <Form.Group widths='equal'>
                <Form.Field id='form-input-control-first-name' control={Input} label='Title' placeholder='Perspective Title' />
              </Form.Group>
              <TopicDropdown/>
              <Form.Field id='form-textarea-control-opinion' control={TextArea} label='Details' placeholder='Lengthy description' />
              <Form.Field id='form-button-control-public' control={Button} content='Confirm!' />
            </Form>
            <h3 style={{ marginTop: '5vh' }}>Add a milestone!</h3>
            <Form style={{ marginBottom: '7vh' }}>
              <Form.Group widths='equal'>
                <Form.Field id='form-input-control-first-name' control={Input} label='Title' placeholder='Milestone Title' />
              </Form.Group>
              <TopicDropdown />
              <Form.Field id='form-textarea-control-opinion' control={TextArea} label='Details' placeholder='Lengthy description' />
              <Form.Field id='form-button-control-public' control={Button} content='Confirm!' />
            </Form>
          </div>
        </div>
      );
    }
}
