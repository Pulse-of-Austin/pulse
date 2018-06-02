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
        key: 'test1',
        value: 'test1111',
        text: 'test1',
      },
      {
        key: 'test1',
        value: 'test1111',
        text: 'test1',
      },
      {
        key: 'test1',
        value: 'test1111',
        text: 'test1',
      },
      {
        key: 'test1',
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
