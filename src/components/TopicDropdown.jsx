import React, { Component } from 'react';
import { Dropdown } from 'semantic-ui-react';

class TopicDropdown extends Component {
  constructor() {
    super();
    this.state = { value: '' };
  }

  render() {
    const data = [
      {
        key: '0',
        value: 'test1111',
        text: 'test1',
      },
      {
        key: '1',
        value: 'test1111',
        text: 'test1',
      },
      {
        key: '2',
        value: 'test1111',
        text: 'test1',
      },
      {
        key: '3',
        value: 'test1111',
        text: 'test1',
      },
    ];

    return (
          <div>
              <Dropdown
                  // onSubmit={this.handleKeyPress}
                  // className='monsterDropdown'
                  // onClose={this.onClose}
                  // onFocus={this.onFocus}
                  // onChange={this.handleChange}
                  // onKeyPress={this.handleKeyPress}
                  value={this.state.value}
                  defaultSearchQuery=''
                  placeholder='Select a topic!'
                  fluid search selection options={data}
              />
          </div>
    );
  }
}

export default TopicDropdown;
