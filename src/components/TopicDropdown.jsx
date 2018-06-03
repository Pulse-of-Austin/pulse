import React, { Component } from 'react';
import { Dropdown } from 'semantic-ui-react';

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

class TopicDropdown extends Component {
  constructor() {
    super();
    this.state = { value: '' };
  }

  render = () => {
    return (
      <div style={{ marginBottom: '3vh' }}>
        <Dropdown
          placeholder='Select a topic'
          selection
          search
          options={data}
        />
      </div>
    );
  }
}

export default TopicDropdown;
