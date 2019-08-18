import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'next/router'
import { _p, _div } from './_styled';
import { genericStrings } from 'static/strings';
import { prodLink } from 'links';

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
    const { message } = this.props;
    const url = `${prodLink.url}${this.props.router.asPath}`;    
    const twitterMessage = `“${message}” by @${genericStrings.twitterHandler}`

    return (
      <_div>
        <_p>{genericStrings.share}</_p>
        <FacebookShareButton url={url} quote={message}>
          <FacebookIcon size={38} round={true} />
        </FacebookShareButton>
        <TwitterShareButton url={url} title={twitterMessage}>
          <TwitterIcon size={38} round={true} />
        </TwitterShareButton>
        <LinkedinShareButton url={url} title={message}>
          <LinkedinIcon size={38} round={true} />
        </LinkedinShareButton>
        <RedditShareButton url={url} title={message}>
          <RedditIcon size={38} round={true} />
        </RedditShareButton>
        <PocketShareButton url={url} title={message}>
          <PocketIcon size={38} round={true} />
        </PocketShareButton>
      </_div>
    );
  }

}

export default withRouter(ShareButtons);
