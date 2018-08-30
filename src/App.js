// React
import React, {Component} from 'react';

// Redux
import {connect} from 'react-redux';

// Routing & Links
import {withRouter} from 'react-router-dom';

// Styled Components
import {ThemeProvider} from "styled-components";

// Routes
import Routes from './routes';

// Components
import WebsiteWrapper from './components/WebsiteWrapper';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

// Bootstrap
import {Container} from 'reactstrap';

class App extends Component {

  render() {
    const {theme} = this.props;
    document.body.style.backgroundColor = theme.colors.background;

    return (
      <ThemeProvider theme={theme}>
        <WebsiteWrapper>
          <Container fluid>
            <Navbar/>
            <Routes/>
            <Footer/>
          </Container>
        </WebsiteWrapper>
      </ThemeProvider>
    );
  }

}

function mapStateToProps(theme) {
  return theme;
}

export default withRouter(connect(mapStateToProps, null)(App));
