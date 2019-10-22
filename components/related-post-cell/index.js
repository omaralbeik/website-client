import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';
import { withTheme } from 'styled-components';
import { _Col, _Container, _h1, _p } from './_styled.js';
import { blogPostLink } from 'links';

class RelatedPostCell extends Component {

  static propTypes = {
    post: PropTypes.object.isRequired
  }

  render() {
    const { post } = this.props;

    return (
      <_Col xs={12} md={12} lg={6}>
          <Link href={blogPostLink(post).templateUrl} as={blogPostLink(post).url} >
            <span>
              <_Container>
                <_h1>{post.title}</_h1>
                <_p>{post.summary}</_p>
              </_Container>
            </span>
          </Link>
      </_Col>
    );
  }

}

export default withTheme(RelatedPostCell);
