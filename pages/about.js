import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { addContent } from 'redux/actions';
import APIHelper from 'utils/api-helper';
import { Row, Col } from 'reactstrap';
import Error from 'components/error';
import { aboutLink } from 'links';
import PageTitle from 'components/page-title';
import AboutCover from 'components/about-cover';
import ContactForm from 'components/contact-form';
import { genericStrings } from 'static/strings';
import Loading from 'components/loading';
import FreeContentContainer from 'components/free-content-container';
import { twitter } from 'links/social';
import { NextSeo } from 'next-seo';

class About extends Component {

  static async getInitialProps({ store }) {
    try {
      const about = await APIHelper.fetchAbout();
      store.dispatch(addContent({ content: about }));
      return { about };
    }
    catch (error) {
      console.error(error);
      return { error };
    }
  }

  constructor(props) {
    super(props);
    
    const { cachedAbout } = this.props;
    this.state = { cachedAbout };
  }

  handleCaptcha = key => {
    console.log(key);
    
    this.setState({
      captcha: true,
      'g-recaptcha-response': key
    });
  }

  handleSubmit = () => {
    if (!this.state.captcha) {
      return;
    }
  }

  render() {
    var { about } = this.props;
    const { error } = this.props;
    const { cachedAbout } = this.state;
    

    if (error) {
      if (cachedAbout) {
        about = cachedAbout;
      } else {
        return <Error error={error} />;
      }
    }

    return (
      <div>
        <NextSeo
          title={aboutLink.documentTitle}
          description={about.meta.description}
          canonical={about.meta.canonical}
          additionalMetaTags={[{
            property: 'keywords',
            content: about.meta.keywords
          }]}
          openGraph={{
            url: aboutLink.prodUrl,
            title: aboutLink.documentTitle,
            description: about.htmlText,
            images: [{ url: about.image_url, alt: about.title, }],
          }}
        />
        <PageTitle title={about.title} />
        <Row>
          <Col lg={8} sm={12}>
            <FreeContentContainer dangerouslySetInnerHTML={{__html: about.html_text}} />
          </Col>
          <Col  lg={4} sm={12}>
            <AboutCover src={about.image_url} alt={genericStrings.name} loader={<Loading />} />
          </Col>
        </Row>
        <ContactForm />
      </div>
    );
  }

}

function mapStateToProps({ contents }) {
  return { cachedAbout: contents.about };
}

const mapDispatchToProps = dispatch => {
  return {
    addContent: bindActionCreators(addContent, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(About);
