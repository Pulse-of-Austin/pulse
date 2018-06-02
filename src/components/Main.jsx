import React from 'react';
import { Grid } from 'semantic-ui-react';

import NavBar from './NavBar.jsx';
import Footer from './Footer.jsx';

class Main extends React.Component {
  constructor(props) {
    super(props);

    this.state = { placeholder: '' };
  }

  componentDidMount = () => {
    console.log('test');
  }

  render = () => (
      <Grid>
        <Grid.Row>
          <NavBar />
        </Grid.Row>
        <Grid.Row>
          <Footer />
        </Grid.Row>
      </Grid>
  );
}

export default Main;
