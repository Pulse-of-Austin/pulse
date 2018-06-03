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
    const styles = {
      button: {
        width: '100%',
        margin: '5px'
      }
    }
    return (
      <Segment textAlign='center' color='grey' style={{marginLeft: '60%', width: '300px', marginTop: '-180px'}}>
        <Header as='h3' content='DOCKLESS MOBILITY' />
        <p>What is essential for Austin to consider in its bikeshare data policy?</p>
        <Button primary={true}>
          Learn More
        </Button>
        <Divider />
        <Segment.Group>
          <Button style={styles.button} onClick={this.handleClick}>Collect data on bike reds only and share data with the city</Button>
          <Button style={styles.button} onClick={this.handleClick}>Collect data for city use only</Button>
          <Button style={styles.button} onClick={this.handleClick}>Minimize rental cost and allow all data collection</Button>
        </Segment.Group>
        <Header as='h3' content='WEIGH IN NOW' style={{fontWeight: 'bold', textDecoration: 'underline'}}/>
      </Segment>
    )
  }
}

export default TrendingTopics;
