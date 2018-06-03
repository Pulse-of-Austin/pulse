import React, { Component } from 'react';
import axios from 'axios';
import { Form, Input, TextArea, Select, Divider, Dropdown } from 'semantic-ui-react';
// import TopicDropdown from './TopicDropdown.jsx';
import NavBar from './NavBar.jsx';

const data = [
  {
    value: 'test1',
    text: 'test1',
  },
  {
    value: 'test2',
    text: 'test2',
  },
  {
    value: 'test3',
    text: 'test3',
  },
  {
    value: 'test4',
    text: 'test4',
  },
];

const options = [
  { key: 'angular', text: 'Angular', value: 'angular' },
  { key: 'css', text: 'CSS', value: 'css' },
  { key: 'design', text: 'Graphic Design', value: 'design' },
  { key: 'ember', text: 'Ember', value: 'ember' },
  { key: 'html', text: 'HTML', value: 'html' },
  { key: 'ia', text: 'Information Architecture', value: 'ia' },
  { key: 'javascript', text: 'Javascript', value: 'javascript' },
  { key: 'mech', text: 'Mechanical Engineering', value: 'mech' },
  { key: 'meteor', text: 'Meteor', value: 'meteor' },
  { key: 'node', text: 'NodeJS', value: 'node' },
  { key: 'plumbing', text: 'Plumbing', value: 'plumbing' },
  { key: 'python', text: 'Python', value: 'python' },
  { key: 'rails', text: 'Rails', value: 'rails' },
  { key: 'react', text: 'React', value: 'react' },
  { key: 'repair', text: 'Kitchen Repair', value: 'repair' },
  { key: 'ruby', text: 'Ruby', value: 'ruby' },
  { key: 'ui', text: 'UI Design', value: 'ui' },
  { key: 'ux', text: 'User Experience', value: 'ux' },
]

export default class AdminPortal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      topicTitle: '',
      topicDesc: '',
      topicDets: '',
      topicDate: '',
      topicImage: '',
      category: '',
      perTitle: '',
      perTopic: '',
      perDets: '',
      milTitle: '',
      milTopic: '',
      milDets: '',
      multi: [],
      detailTitle: '',
      detailTopic: '',
      detailDetails: '',
      detailImage: '',
    };
  }

  handleChange = (e, { name, value }) => {
    this.setState({ [name]: value });
  }

  handleMultiSelect = (e, { value }) => {
    this.setState({ multi: value });
  }

  handleSubmit = (endpoint) => {
    let formattedObj;
    if (endpoint === 'topic') {
      const { topicTitle: title,
        topicDesc: description,
        topicDets: details,
        topicDate: vote_date,
        topicImage: image,
        multi: categories,
      } = this.state;
      formattedObj = { title, description, details, vote_date, image, categories };
    } else if (endpoint === 'perspectives') {
      const { perTitle: title, perTopic: topic_id, perDets: rationale } = this.state;
      formattedObj = { title, topic_id, rationale };
    } else if (endpoint === 'milestones') {
      const { milTitle: title, milTopic: topic_id, milDets: description } = this.state;
      formattedObj = { title, topic_id, description };
    } else if (endpoint === 'details') {
      const { detailTitle: title, detailTopic: topic_id, detailsDetails: description, detailImage: image } = this.state;
      formattedObj = { title, description, topic_id, image };
    } else if (endpoint === 'categories') {
      const { category: name } = this.state;
      formattedObj = { name };
    }
    console.log(`http://api.pulseofaustin.org/${endpoint}`, formattedObj);
    // axios.post(`http://api.pulseofaustin.org/${endpoint}`, formattedObj)
    //   .then(() => { this.setState({
    //     topicTitle: '',
    //     topicDesc: '',
    //     topicDets: '',
    //     topicDate: '',
    //     topicImage: '',
    //     category: '',
    //     perTitle: '',
    //     perTopic: '',
    //     perDets: '',
    //     milTitle: '',
    //     milTopic: '',
    //     milDets: '',
    //     multi: [],
    //     detailTitle: '',
    //     detailTopic: '',
    //     detailDetails: '',
    //     detailImage: '',
    //   });
    //   });
    // axios.post(`http://localhost:4000/${endpoint}`, formattedObj)
    //   .then(() => {
    //     this.setState({
    //       topicTitle: '',
    //       topicDesc: '',
    //       topicDets: '',
    //       topicDate: '',
    //       topicImage: '',
    //       category: '',
    //       perTitle: '',
    //       perTopic: '',
    //       perDets: '',
    //       milTitle: '',
    //       milTopic: '',
    //       milDets: '',
    //       multi: [],
    //       detailTitle: '',
    //       detailTopic: '',
    //       detailDetails: '',
    //       detailImage: '',
    //     });
    //   });
  }

  render = () => {
    const { topicTitle,
      topicDesc,
      topicDets,
      topicDate,
      topicImage,
      category,
      detailTitle,
      detailTopic,
      detailDetails,
      detailImage,
      perTitle, perTopic, perDets, milTitle, milTopic, milDets, multi } = this.state;
    return (
      <div>
        <NavBar/>
        <div style={{
            marginRight: '5vw',
            marginLeft: '5vw',
            marginTop: '15vh',
          }}>
          <h3 style={{ marginTop: '5vh' }}>Add a topic!</h3>
          <Form onSubmit={() => { this.handleSubmit('topic'); }}>
              <Form.Group widths='equal'>
                  <Form.Field name='topicTitle' value={topicTitle} onChange={this.handleChange} id='form-input-control-first-name' control={Input} label='Title' placeholder='Topic Title' />
                  <Form.Field name='topicDesc' value={topicDesc} onChange={this.handleChange} id='form-input-control-last-name' control={Input} label='Description' placeholder='Short description' />
              </Form.Group>
              <Form.Group widths='equal'>
                <Form.Field name='topicDate' value={topicDate} onChange={this.handleChange} id='form-input-control-first-name' control={Input} label='Vote Date' placeholder='Date of Vote' />
                <Form.Field name='topicImage' value={topicImage} onChange={this.handleChange} id='form-input-control-last-name' control={Input} label='Image Url' placeholder='Image url here' />
              </Form.Group>
              <Dropdown style={{ marginBottom: '3vh' }} value={multi} onChange={this.handleMultiSelect} placeholder='Categories' fluid multiple selection options={options} />
              <Form.Field name='topicDets' value={topicDets} onChange={this.handleChange} id='form-textarea-control-opinion' control={TextArea} label='Details' placeholder='Lengthy description' />
              <Form.Button content='Confirm!' />
          </Form>
          <Divider/>
          <h3 style={{ marginTop: '5vh' }}>Add a category!</h3>
          <Form onSubmit={() => { this.handleSubmit('categories'); }}>
            <Form.Group widths='equal'>
              <Form.Field name='category' value={category} onChange={this.handleChange} id='form-input-control-first-name' control={Input} label='Category' placeholder='Category Title' />
            </Form.Group>
            <Form.Button content='Confirm!' />
          </Form>
          <Divider />
          <h3 style={{ marginTop: '5vh' }}>Add a perspective!</h3>
          <Form onSubmit={() => { this.handleSubmit('perspectives'); }}>
            <Form.Group widths='equal'>
              <Form.Field name='perTitle' value={perTitle} onChange={this.handleChange} id='form-input-control-first-name' control={Input} label='Title' placeholder='Perspective Title' />
              <Form.Field name='perTopic' value={perTopic} onChange={this.handleChange} control={Select} label='Topic' options={data} placeholder='Topic' />
            </Form.Group>
            <Form.Field name='perDets' value={perDets} onChange={this.handleChange} id='form-textarea-control-opinion' control={TextArea} label='Details' placeholder='Lengthy description' />
            <Form.Button content='Confirm!'/>
          </Form>
          <Divider />
          <h3 style={{ marginTop: '5vh' }}>Add a milestone!</h3>
          <Form onSubmit={() => { this.handleSubmit('milestones'); }} style={{ marginBottom: '7vh' }}>
            <Form.Group widths='equal'>
              <Form.Field name='milTitle' value={milTitle} onChange={this.handleChange} id='form-input-control-first-name' control={Input} label='Title' placeholder='Milestone Title' />
              <Form.Field name='milTopic' value={milTopic} onChange={this.handleChange} control={Select} label='Topic' options={data} placeholder='Topic' />
            </Form.Group>
            <Form.Field name='milDets' value={milDets} onChange={this.handleChange} id='form-textarea-control-opinion' control={TextArea} label='Details' placeholder='Lengthy description' />
            <Form.Button content='Confirm!' />
          </Form>
          <Divider />
          <h3 style={{ marginTop: '5vh' }}>Add a detail to a topic!</h3>
          <Form onSubmit={() => { this.handleSubmit('details'); }} style={{ marginBottom: '7vh' }}>
            <Form.Group widths='equal'>
              <Form.Field name='detailTitle' value={detailTitle} onChange={this.handleChange} id='form-input-control-first-name' control={Input} label='Title' placeholder='Detail Title' />
              <Form.Field name='detailTopic' value={detailTopic} onChange={this.handleChange} control={Select} label='Topic' options={data} placeholder='Topic' />
            </Form.Group>
            <Form.Group widths='equal'>
              <Form.Field name='detailDetails' value={detailDetails} onChange={this.handleChange} id='form-textarea-control-opinion' control={TextArea} label='Details' placeholder='Lengthy description' />
              <Form.Field name='detailImage' value={detailImage} onChange={this.handleChange} id='form-textarea-control-opinion' control={TextArea} label='Image' placeholder='Image URL' />
            </Form.Group>
            <Form.Button content='Confirm!' />
          </Form>
        </div>
      </div>
    );
  }
}
