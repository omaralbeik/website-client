import React, {Component} from 'react';
import Link from 'next/link';
import { _Container, _Row, _Col, _LinksCol, _OpenSourceCol, _InnerContainer, _p, _a } from './_styled';
import SocialLinks from 'components/social-links';
import { homeLink, footerLinks, repoLink } from 'links';
import { genericStrings, footerStrings } from 'static/strings';

class Footer extends Component {

  render() {
    return (
      <_Container>
        <_InnerContainer>
          <_Row className='align-items-center'>
            <_Col md={7} lg={8}>
              <_Row>
              <_LinksCol>
                {footerLinks.map(link => (
                <Link href={link.url} as={link.url} key={link.name}>
                  <_a href={link.url}>{link.name}</_a>
                </Link>
                ))}
              </_LinksCol>
              </_Row>
              <_Row>
              <_OpenSourceCol lg={8}>
                <p>
                  {footerStrings.openSource}
                  <a href={repoLink.url} target='_blank' rel='noopener noreferrer'>{repoLink.name}</a>
                </p>
              </_OpenSourceCol>
              </_Row>
            </_Col>
            <_Col md={5} lg={4}>
              <SocialLinks/>
            </_Col>
          </_Row>
        </_InnerContainer>
        <_p>
          {footerStrings.copyright}
          <Link href={homeLink.url} as={homeLink.url}><a>{genericStrings.name}</a></Link>
          {footerStrings.allRightsReserved}
        </_p>
      </_Container>
    );
  }

}

export default Footer;
