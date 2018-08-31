// React
import React, {Component} from "react";

// Bootstrap
import {sm} from '../breakpoints';

// Styled Components
import styled, {withTheme} from "styled-components";

// Components
import GlobalLink from './GlobalLink';

// Links
import social from '../links/social';


class Links extends Component {

  render() {
    const {theme} = this.props;
    return (<SocialLinkWrapper>
      {social(theme).map(l => (
        <SocialLink key={l.name} href={l.url} target='blank'>
          <img src={l.icon} alt={l.name}/>
        </SocialLink>
      ))}
    </SocialLinkWrapper>);
  }

}

const SocialLink = styled(GlobalLink)`
  padding: 5px;
  opacity: 0.75;
  &:hover {
    opacity: 1;
  }
  img {
    width: 44px;
    height: 44px;
  }
  @media (max-width: 768px) {
    img {
      width: 40px;
      height: 40px;
      margin: 8px 4px;
    }
  }
`;

const SocialLinkWrapper = styled.div`
  margin: 12px 8px;
  float: right;
  @media (${sm}) {
    float: none;
    text-align: center;
    margin: 0;
  }
`;

export default withTheme(Links);
