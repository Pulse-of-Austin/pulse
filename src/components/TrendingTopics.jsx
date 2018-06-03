import React from 'react'
import { Feed, Icon } from 'semantic-ui-react'
import { Segment, Divider, Button, Header } from 'semantic-ui-react'

class TrendingTopics extends React.Component {
  constructor(props) {
    super(props);

    this.state = {

    }
  }

  handleClick = () => {

  }

  render() {
    return (

      <div id='trending_topics'>
        <h3>DOCKLESS MOBILITY</h3>
        <p>What is essential for Austin to consider in its bikeshare data policy?</p>
        <button className='primary_orange_button'>Learn More</button>
        <hr/>
        <button className='poll_button' onClick={this.handleClick}>Collect data on bike reds only and share data with the city</button>
        <button className='poll_button' onClick={this.handleClick}>Collect data on bike reds only and share data with the city</button>
        <button className='poll_button' onClick={this.handleClick}>Collect data on bike reds only and share data with the city</button>
        <br/>
        <h3 className='underline'>WEIGH IN</h3>
      </div>
    )
  }
}

export default TrendingTopics;
