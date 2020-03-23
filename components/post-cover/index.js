import React, { Component } from "react";
import Loading from "components/loading";
import placeholder from "public/static/placeholders/post.png";
import { _div, _Img, _creditDiv } from "./_styled";

class PostCover extends Component {
  render() {
    const { post } = this.props;

    if (!post.cover_image_url) {
      return null;
    }

    return (
      <_div>
        <_Img src={[post.cover_image_url, placeholder]} alt={post.title} loader={<Loading />} />
        <_creditDiv dangerouslySetInnerHTML={{ __html: post.cover_image_credit_badge }} />
      </_div>
    );
  }
}

export default PostCover;
