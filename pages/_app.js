import NextApp, { Container } from 'next/app';
import Router from 'next/router';
import { Provider } from 'react-redux';
import withRedux from 'next-redux-wrapper';
import { initStore } from 'redux/store';
import { loadTheme } from 'redux/actions';
import Layout from 'components/layout';
import { getThemeInfoFromCookies } from 'styles/themes';
import ReactGA from 'react-ga';
import { NextSeo } from 'next-seo';
import NProgress from 'nprogress';
import { twitter } from 'links/social';
import { genericStrings } from 'static/strings';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'styles/index.css';

ReactGA.initialize(process.env.GA_TRACKING_NUMBER);

NProgress.configure({
  trickleSpeed: 100,
  showSpinner: false
});

Router.events.on('routeChangeStart', () => {
  NProgress.start();
});
Router.events.on('routeChangeComplete', () => {
  NProgress.done();
});
Router.events.on('routeChangeError', () => {
  NProgress.done();
});

export default withRedux(initStore) (

  class App extends NextApp {

    static async getInitialProps({ Component, ctx }) {
      let pageProps = {};
      if (Component.getInitialProps) {
        pageProps = await Component.getInitialProps(ctx);
      }

      const { req } = ctx;
      const theme = getThemeInfoFromCookies(req);
      return { pageProps, theme };
    }

    componentDidMount() {
      this.logPageView(window.location.pathname + window.location.search)      
      Router.onRouteChangeComplete = url => {
        this.logPageView(url);
      };
    }

    logPageView = url => {
      ReactGA.set({ page: url });
      ReactGA.pageview(url);
    }

    render() {
      const { Component, pageProps, store, theme } = this.props;
      store.dispatch(loadTheme(theme));

      return (
        <Container>
          <NextSeo
            openGraph={{
              site_name: genericStrings.name
            }}
            twitter={{
              handle: twitter().handle,
              site: twitter().handle,
              cardType: 'summary_large_image',
            }}
          />
          <Provider store={store}>
            <Layout>
              <Component {...pageProps} />
            </Layout>
          </Provider>
        </Container>
      );
    }
  }

);
