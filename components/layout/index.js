import React, { Component } from 'react';
import Head from 'next/head';
import { connect } from 'react-redux';
import { ThemeProvider, withTheme } from 'styled-components';
import Navbar from 'components/navbar';
import FlexWrapper from 'components/flex-wrapper';
import Footer from 'components/footer';
import { Container } from 'reactstrap';
import { getTheme } from 'styles/themes';
import { _GlobalStyle } from './_styled';
import { genericStrings } from 'static/strings';
import { prodLink } from 'links';

class Layout extends Component {

  render() {
    const { children } = this.props;
    const info = this.props.theme;
    let theme = getTheme(info);

    return (
      <ThemeProvider theme={theme}>
        <div>
          <Head>
            <link rel='manifest' href='/static/manifest.json' />
            <meta name="theme-color" content={theme.colors.background} />

            <link rel="apple-touch-icon" sizes="180x180" href="/static/apple-touch-icon.png" />
            <meta name="apple-mobile-web-app-capable" content="yes" />
            <meta name="apple-mobile-web-app-orientations" content="portrait-any" />
            <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
            <meta name="apple-mobile-web-app-title" content={genericStrings.name} />
            <meta content="yes" name="apple-touch-fullscreen" />
            
            <link rel="icon" type="image/png" sizes="32x32" href="/static/favicon-32x32.png" />
            <link rel="icon" type="image/png" sizes="16x16" href="/static/favicon-16x16.png" />

            <meta name="copyright" content={genericStrings.name} />
            <meta name="language" content="EN" />
            <meta name="robots" content="index,follow" />
            <meta name="url" content={prodLink.url} />
            <meta name="rating" content="General" />

          </Head>
          <_GlobalStyle />
          <Navbar />
          <FlexWrapper>
            <Container>{children}</Container>
            <Footer />
          </FlexWrapper>
        </div>
      </ThemeProvider>
    );
  }

}

function mapStateToProps(theme) {
  return theme;
}

function mapDispatchToProps(dispatch) {
  return {
    loadTheme: theme => dispatch(loadTheme(theme))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Layout);
