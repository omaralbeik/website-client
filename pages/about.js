import React, { Component } from "react";
import APIHelper from "utils/api-helper";
import { Row, Col } from "reactstrap";
import Error from "components/error";
import { aboutLink } from "links";
import PageTitle from "components/page-title";
import AboutCover from "components/about-cover";
import ContactForm from "components/contact-form";
import { genericStrings } from "public/static/strings";
import Loading from "components/loading";
import FreeContentContainer from "components/free-content-container";
import { NextSeo } from "next-seo";

class About extends Component {
  static async getInitialProps() {
    try {
      const about = await APIHelper.fetchAbout();
      return { about };
    } catch (error) {
      // eslint-disable-next-line no-console
      console.error(error);
      return { error };
    }
  }

  render() {
    const { error, about } = this.props;

    if (error) {
      return <Error error={error} />;
    }

    return (
      <div>
        <NextSeo
          title={aboutLink.documentTitle}
          description={about.meta.description}
          canonical={about.meta.canonical}
          additionalMetaTags={[{
            property: "keywords",
            content: about.meta.keywords,
          }]}
          openGraph={{
            url: aboutLink.prodUrl,
            title: aboutLink.documentTitle,
            description: about.htmlText,
            images: [{ url: about.image_url, alt: about.title }],
          }}
        />
        <PageTitle title={about.title} />
        <Row>
          <Col lg={8} sm={12}>
            <FreeContentContainer dangerouslySetInnerHTML={{ __html: about.html_text }} />
          </Col>
          <Col lg={4} sm={12}>
            <AboutCover src={about.image_url} alt={genericStrings.name} loader={<Loading />} />
          </Col>
        </Row>
        <ContactForm />
      </div>
    );
  }
}

export default About;
