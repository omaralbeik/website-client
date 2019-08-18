import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';
import DateWrapper from 'components/date-wrapper';
import { withTheme } from 'styled-components';
import { _Col, _Container, _h1, _p, _a } from './_styled.js';
import { genericStrings } from 'static/strings';
import { blogPostLink } from 'links';

class PostCell extends Component {

  static propTypes = {
    post: PropTypes.object.isRequired
  }

  render() {
    const { post } = this.props;

    return (
      <_Col xs={12} md={12} lg={6}>
          <_Container>
            <Link href={blogPostLink(post).templateUrl} as={blogPostLink(post).url} >
              <_h1>{post.title}</_h1>
            </Link>
            <DateWrapper date={post.date_published} isRelative />
            <_p>{post.summary}</_p>
            <Link href={blogPostLink(post).templateUrl} as={blogPostLink(post).url} >
              <_a href={blogPostLink(post).url}>{genericStrings.readMore}</_a>
            </Link>
          </_Container>
      </_Col>
    );
  }

}

export default withTheme(PostCell);
