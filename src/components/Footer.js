// React
import React, {Component} from "react";

// Bootstrap
import {Container, Row, Col} from 'reactstrap';
import {sm} from '../breakpoints';

// Styled Components
import styled from 'styled-components';

// Components
import InnerContainer from './InnerContainer';
import Link from './Link';
import Paragraph from './Paragraph';
import SocialLinks from './SocialLinks';

// Links
import {footerLinks, repoLink} from '../links';

// Strings
import {genericStrings, footerStrings} from '../strings';


class Footer extends Component {

  render() {
    return (<Container className='fixed-bottom'>
      <FooterInnerContainer>
        <Row className='align-items-center'>
          <Col sm={12} md={7} lg={8}>
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
                <Paragraph >
                  {footerStrings.openSource}
                  <Link to={repoLink.url} target='blank'>{repoLink.name}</Link>
                </Paragraph>
              </OpenSourceWrapper>
            </Row>
          </Col>
          <Col sm={12} md={5} lg={4}>
            <SocialLinks/>
          </Col>
        </Row>
      </FooterInnerContainer>
      <CopyrightWrapper>
        {footerStrings.copyright}
        <Link to='/'>{genericStrings.name}</Link>
        {footerStrings.allRightsReserved}
      </CopyrightWrapper>
    </Container>);
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

const CopyrightWrapper = styled(Paragraph)`
  text-align: center;
  margin: 16px 10px;
  > a {
    font-weight: bold;
  }
  @media (${sm}) {
    font-size: 75%;
  }
`;

export default Footer;
