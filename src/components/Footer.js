// React
import React, {Component} from "react";

// Routing & Links
import {Link} from 'react-router-dom';

// Bootstrap
import {Container, Row, Col} from 'reactstrap';
import {sm} from '../breakpoints';

// Styled Components
import styled from 'styled-components';

// Components
import InnerContainer from './InnerContainer';
import SocialLinks from './SocialLinks';

// Links
import {homeLink, footerLinks, repoLink} from '../links';

// Strings
import {genericStrings, footerStrings} from '../strings';


class Footer extends Component {

  render() {
    return (
      <Container>
        <FooterInnerContainer>
          <Row className='align-items-center'>
            <Col md={7} lg={8}>
              <Row>
                <LinksWrapper>
                  {
                    footerLinks.map(l => (
                      <FooterLink key={l.name} to={l.url}>{l.name}</FooterLink>
                    ))
                  }
                </LinksWrapper>
              </Row>
              <Row>
                <OpenSourceWrapper lg={8}>
                  <p>
                    {footerStrings.openSource}
                    <a href={repoLink.url} target='_blank'>{repoLink.name}</a>
                  </p>
                </OpenSourceWrapper>
              </Row>
            </Col>
            <Col md={5} lg={4}>
              <SocialLinks/>
            </Col>
          </Row>
        </FooterInnerContainer>
        <CopyrightWrapper>
          {footerStrings.copyright}
          <Link to={homeLink.url}>{genericStrings.name}</Link>
          {footerStrings.allRightsReserved}
        </CopyrightWrapper>
      </Container>
    );
  }

}

const FooterLink = styled(Link)`
  font-size: 120%;
  margin: 0 8px;
  display: inline-block;
`;

const LinksWrapper = styled(Col)`
  list-style: none;
  margin: 0;
  margin: 16px;
  padding: 0;
  @media (${sm}) {
    text-align: center;
  }
`;

const OpenSourceWrapper = styled(Col)`
  margin: 0 10px;
  font-size: 95%;
  @media (${sm}) {
    text-align: center;
  }
`;

const FooterInnerContainer = styled(InnerContainer)`
  padding: 20px;
  border-radius: 8px;
`;

const CopyrightWrapper = styled.p`
  text-align: center;
  margin: 16px 10px;
  > a {
    font-weight: bold;
  }
  @media (${sm}) {
    font-size: 75%;
    padding: 12px 0 20px 0;
  }
`;

export default Footer;
