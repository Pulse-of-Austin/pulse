import React from 'react'
import { Feed, Icon } from 'semantic-ui-react'
import { Segment, Divider, Button, Header } from 'semantic-ui-react'

class TrendingTopics extends React.Component {
  constructor(props) {
    super(props);

    this.state = {

    }
  }

  componentDidMount() {
    window.addEventListener('resize', this.resize.bind(this));
    this.resize();
	}

  resize() {
    this.setState({ resize: window.innerWidth <= 1600 })
    this.setState({ mobile: window.innerWidth <= 1000 })
  }

  handleClick = () => {

  }

  render() {
    const styles = {
      button: {
        width: '100%',
        margin: '5px',
      },
      box: { 
        width: this.state.resize ? '40%' : '20%',
        padding: '10px',
        textAlign: 'center',
        borderRadius: '10px',
        boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)',
        position: 'relative',
        left: this.state.resize ? '53%' : '60%',
        bottom: '250px' ,
        marginTop: this.state.resize ? '50px' : 0,
      }
    }
    return (

      <div style={styles.box}>
        <h3>DOCKLESS MOBILITY</h3>
        <p>What is essential for Austin to consider in its bikeshare data policy?</p>
        <button className='primary_orange_button'>LEARN MORE</button>
        <hr/>
        <button className='poll_button' onClick={this.handleClick}>Collect data on bike reds only and share data with the city</button>
        <button className='poll_button' onClick={this.handleClick}>Collect data for city use only</button>
        <button className='poll_button' onClick={this.handleClick}>Minimize rental cost and allow all data collection</button>
        <br/>
        <h3 className='underline'>WEIGH IN</h3>
      </div>
    )
  }
}

export default TrendingTopics;
