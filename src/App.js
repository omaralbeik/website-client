// React
import React, { Component } from 'react';

// Bootstrap
import { Container } from 'reactstrap';

// Styled Components
import { withTheme } from "styled-components";

// Components
import WebsiteWrapper from './components/WebsiteWrapper';
import Footer from './components/Footer';

class App extends Component {

  render() {
    const { theme } = this.props;
    document.body.style.backgroundColor = theme.colors.background;

    return (
      <WebsiteWrapper>
      <Container fluid>
        <Footer/>
      </Container>
      </WebsiteWrapper>
    );
  }

}

export default withTheme(App)
