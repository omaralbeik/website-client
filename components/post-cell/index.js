import React, { Component } from "react";
import Link from "next/link";
import DateWrapper from "components/date-wrapper";
import { withTheme } from "styled-components";
import { genericStrings } from "public/static/strings";
import { blogPostLink } from "links";
import {
  _Col, _Container, _h1, _p, _a,
} from "./_styled";

class PostCell extends Component {
  render() {
    const { post } = this.props;

    return (
      <_Col xs={12} md={12} lg={6}>
        <Link href={blogPostLink(post).templateUrl} as={blogPostLink(post).url}>
          <span>
            <_Container>
              <_h1>{post.title}</_h1>
              <DateWrapper date={post.date_published} isRelative readTime={post.read_time} />
              <_p>{post.summary}</_p>
              <Link href={blogPostLink(post).templateUrl} as={blogPostLink(post).url}>
                <_a href={blogPostLink(post).url}>{genericStrings.readMore}</_a>
              </Link>
            </_Container>
          </span>
        </Link>
      </_Col>
    );
  }
}

export default withTheme(PostCell);
