// React
import React, {Component} from 'react';

// Routing & Links
import {withRouter} from 'react-router-dom';
import Routes from './routes';

// Bootstrap
import {Container} from 'reactstrap';

// Styled Components
import {withTheme} from "styled-components";

// Components
import WebsiteWrapper from './components/WebsiteWrapper';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

class App extends Component {

  render() {
    const {theme} = this.props;
    document.body.style.backgroundColor = theme.colors.background;

    return (
      <WebsiteWrapper>
      <Container fluid>
        <Navbar/>
        <Routes/>
        <Footer/>
      </Container>
      </WebsiteWrapper>
    );
  }

}

export default withRouter(withTheme(App));
