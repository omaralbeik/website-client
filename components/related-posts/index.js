import React, { Component } from "react";
import RelatedPostCell from "components/related-post-cell";
import { blogStrings } from "public/static/strings";
import {
  _Container, _Row, _h1, _h2,
} from "./_styled";

class RelatedPosts extends Component {
  render() {
    const { posts } = this.props;

    if (posts.length === 0) {
      return null;
    }

    return (
      <_Container>
        <_h1>{blogStrings.relatedTitle}</_h1>
        <_h2>{blogStrings.relatedSubtitle}</_h2>
        <_Row>
          {posts.map((p) => (<RelatedPostCell key={p.id} post={p} />))}
        </_Row>
      </_Container>
    );
  }
}

export default RelatedPosts;
