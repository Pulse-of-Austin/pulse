import React from 'react';
import { Grid, Button, Header, Image, Icon, Card, Container, Divider, Segment } from 'semantic-ui-react';
import NavBar from './NavBar';

class Learn extends React.Component {
  constructor(props) {
    super(props);

    this.state = {

    }
  }

  render = () => {
    return (
      <div>
        <NavBar/>
        <Grid style={{
          marginTop: '5vh',
          marginLeft: '2vw',
          }}>
          <Container textAlign='center'>
            <Grid.Row>
              <Image style={{ zIndex: '-1', opacity: '0.3', filter: 'alpha(opacity=30)', margin: 'auto', marginBottom: '-14vh', marginTop: '-10vh !important' }} size='huge' src='https://files.slack.com/files-pri/T04RN6ZV2-FB026GT16/img_2367.jpg' />
                <Header as='h1' content={'Learn The Ropes'} />
                  <Header.Subheader as='h3' content={'How does the city do stuff and like works and things?'} />
              <Divider />
            </Grid.Row>
            <Grid.Row style={{ marginTop: '2vh' }}>
              <Header>
                HEADER GOES HERE
              </Header>
            </Grid.Row>
            <Grid.Row style={{ marginTop: '2vh' }}>
              <Segment>
                <p>
                  Some text here blah blah blah
                </p>
              </Segment>
            </Grid.Row>
          </Container>
        </Grid>
      </div>
    );
  }
}

export default Learn;
