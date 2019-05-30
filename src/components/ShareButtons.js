// React
import React, {Component} from "react";
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
    post: PropTypes.object.isRequired
  }

  render() {
    const url = window.location.href;
    const {post} = this.props;
    const twitterMessage = `“${post.title}” by @${genericStrings.twitterHandler}`

    return (
      <Container>
        <Share>{genericStrings.share}</Share>
        <FacebookShareButton url={url} quote={post.title}>
          <FacebookIcon size={38} round={true}/>
        </FacebookShareButton>
        <TwitterShareButton url={url} title={twitterMessage}>
          <TwitterIcon size={38} round={true}/>
        </TwitterShareButton>
        <LinkedinShareButton url={url} title={post.title}>
          <LinkedinIcon size={38} round={true}/>
        </LinkedinShareButton>
        <RedditShareButton url={url} title={post.title}>
          <RedditIcon size={38} round={true}/>
        </RedditShareButton>
        <PocketShareButton url={url} title={post.title}>
          <PocketIcon size={38} round={true}/>
        </PocketShareButton>
      </Container>
    );
  }

}

const Share = styled.p`
  line-height: 38px;
  margin-right: 12px;
  font-size: 14px;
  font-weight: bold;
  @media (${sm}) {
    display: none;
  }
`;

const Container = styled.div`
  display: flex;
  margin: 15px 0 14px 0;
  justify-content: flex-end;
  @media (${sm}) {
    justify-content: space-around;
    margin-top: 20px;
    margin-right: 8px;
    margin-bottom: 0;
  }
  > div {
    margin-left: 8px;
    :focus {
      outline: 0;
    }
  }
`;

export default ShareButtons;
