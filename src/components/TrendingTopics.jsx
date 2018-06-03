import React from 'react'
import { Feed, Icon } from 'semantic-ui-react'
import { Segment,Divider } from 'semantic-ui-react'

const SegmentTrending = () => (

  <Segment.Group>
    <Segment>
    <h2> This is the title </h2>
    </Segment>
    <Segment>
    <button class="primary button">
      Learn More
    </button>
    <Divider horizontal></Divider>
    </Segment>
    <Segment.Group>
      <Segment>Nested choice 1 onClick={this.onItemClick} data-id="1" className={this.state.selectedItem == 1 ? "on" : "off"}>Component 1 </Segment>
      <Segment>Nested choice 2 onClick={this.onItemClick} data-id="2" className={this.state.selectedItem == 2 ? "on" : "off"}>Component 2</Segment>
      <Segment>Nested choice 3 onClick={this.onItemClick} data-id="3" className={this.state.selectedItem == 3 ? "on" : "off"}>Component 3</Segment>
    </Segment.Group>
