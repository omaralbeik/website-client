// React
import React, {Component} from 'react';

// Redux
import {connect} from 'react-redux';

// Bootstrap
import {Container} from 'reactstrap';

// Styled Components
import {ThemeProvider} from "styled-components";

// Components
import WebsiteWrapper from './components/WebsiteWrapper';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

// Routing & Links
import {withRouter} from 'react-router-dom';
import Routes from './routes';

// Themes
import {getTheme} from './thems';


class App extends Component {

  render() {
    const info = this.props.theme;
    const theme = getTheme(info);
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
