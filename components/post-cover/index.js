import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';
import DateWrapper from 'components/date-wrapper';
import Loading from 'components/loading';
import { _div, _Img, _creditDiv } from './_styled.js';
import placeholder from 'static/placeholders/post.png';

class PostCover extends Component {

  static propTypes = {
    post: PropTypes.object.isRequired
  }

  render() {
    const { post } = this.props;

    if (!post.cover_image_url) {
      return null;
    }

    return (
      <_div>
        <_Img src={[post.cover_image_url, placeholder]} alt={post.title} loader={<Loading/>} />
        <_creditDiv dangerouslySetInnerHTML={{ __html: post.cover_image_credit_badge }} />
      </_div>
    );
  }

}

export default PostCover;
