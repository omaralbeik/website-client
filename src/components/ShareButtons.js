// React
import React, {Component} from 'react';
import PropTypes from 'prop-types';

// Styled Components
import styled from 'styled-components';

// Bootstrap
import {sm} from '../breakpoints';

// Srtings
import {genericStrings} from '../strings';

// Social sharing
import {
  FacebookShareButton,
  TwitterShareButton,
  LinkedinShareButton,
  RedditShareButton,
  PocketShareButton
} from 'react-share';

import {
  FacebookIcon,
  TwitterIcon,
  LinkedinIcon,
  RedditIcon,
  PocketIcon
} from 'react-share';


class ShareButtons extends Component {
  static propTypes = {
    message: PropTypes.string.isRequired
  }

  render() {
    const {message} = this.props;
    const url = window.location.href;
    const twitterMessage = `“${message}” by @${genericStrings.twitterHandler}`

    return (
      <StyledDiv>
        <StyledP>{genericStrings.share}</StyledP>
        <FacebookShareButton url={url} quote={message}>
          <FacebookIcon size={38} round={true}/>
        </FacebookShareButton>
        <TwitterShareButton url={url} title={twitterMessage}>
          <TwitterIcon size={38} round={true}/>
        </TwitterShareButton>
        <LinkedinShareButton url={url} title={message}>
          <LinkedinIcon size={38} round={true}/>
        </LinkedinShareButton>
        <RedditShareButton url={url} title={message}>
          <RedditIcon size={38} round={true}/>
        </RedditShareButton>
        <PocketShareButton url={url} title={message}>
          <PocketIcon size={38} round={true}/>
        </PocketShareButton>
      </StyledDiv>
    );
  }

}

const StyledP = styled.p`
  line-height: 38px;
  margin-right: 12px;
  margin-bottom: 0;
  font-size: 14px;
  font-weight: bold;
  @media (${sm}) {
    display: none;
  }
`;

const StyledDiv = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-top: 20px;
  @media (${sm}) {
    justify-content: space-around;
    margin-right: 8px;
    margin-bottom: 0;
  }
  > div {
    margin-left: 8px;
    cursor: pointer;
    :focus {
      outline: 0;
    }
  }
`;

export default ShareButtons;
