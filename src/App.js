// React
import React, {Component} from 'react';

// Redux
import {connect} from 'react-redux';

// Helmet
import {Helmet} from "react-helmet";

// Styled Components
import styled, {ThemeProvider} from "styled-components";

// Components
import WebsiteWrapper from './components/WebsiteWrapper';
import FlexWrapper from './components/FlexWrapper';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

// Routing & Links
import {withRouter} from 'react-router-dom';
import Routes from './routes';

// Strings
import {genericStrings, homeStrings} from './strings';
import {DOMAIN_NAME} from './data/constants';

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
          <Helmet>
            <meta name="twitter:site" content={genericStrings.twitter}/>
            <meta name="twitter:creator" content={genericStrings.twitter}/>
            <meta name="twitter:card" content="summary_large_image"/>
            <meta name="twitter:title" content={genericStrings.name}/>
            <meta name="twitter:description" content={genericStrings.title}/>
            <meta property="og:url" content={DOMAIN_NAME}/>
            <meta property="og:title" content={genericStrings.name}/>
            <meta property="og:description" content={genericStrings.title}/>
            <meta name="description" content={homeStrings.bio}/>
            <meta name="keyword" content={genericStrings.keyword}/>
            <meta name="apple-mobile-web-app-title" content={genericStrings.name}/>
          </Helmet>
          <FlexWrapper>
            <Navbar/>
            <PagesWrapper>
              <Routes/>
            </PagesWrapper>
            <Footer/>
          </FlexWrapper>
        </WebsiteWrapper>
      </ThemeProvider>
    );
  }

}

const PagesWrapper = styled.div`
  min-height: calc(100vh - 97px);
`

function mapStateToProps(theme) {
  return theme;
}

export default withRouter(connect(mapStateToProps, null)(App));
