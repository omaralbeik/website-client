import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { addBlogPost } from 'redux/actions';
import { withTheme } from 'styled-components';
import APIHelper from 'utils/api-helper';
import Error from 'components/error';
import PostTitle from 'components/post-title';
import PostCover from 'components/post-cover';
import ShareButtons from 'components/share-buttons';
import TagsWrapper from 'components/tags-wrapper';
import FreeCodeContainer from 'components/free-code-container';
import { arrayFromObject, findByIdOrSlug } from 'utils';
import { genericStrings } from 'static/strings';
import { blogPostLink } from 'links';
import { twitter } from 'links/social';
import { NextSeo } from 'next-seo';

class Post extends Component {

  static async getInitialProps({ store, query }) {
    const { id } = query;
    try {
      const post = await APIHelper.fetchBlogPost(id);
      store.dispatch(addBlogPost({ post }));
      return { post, id };
    }
    catch (error) {
      console.error(error);
      return { error, id };
    }
  }

  constructor(props) {
    super(props);
    
    const { id } = this.props;
    var { cachedPosts } = this.props;
    const cachedPost = findByIdOrSlug(cachedPosts, id);
    this.state = { cachedPost };
  }

  render() {
    const { error } = this.props;
    var { post } = this.props;
    const { cachedPost } = this.state;

    if (error) {
      if (cachedPost) {
        post = cachedPost;
      } else {
        return <Error error={error} />;
      }
    }

    const { style } = this.props.theme;
    const syntaxClassName = style === 'dark' ? 'dark-code' : 'light-code';

    return (
      <div>
        <NextSeo
          title={blogPostLink(post).documentTitle}
          description={post.meta.description}
          canonical={post.meta.canonical}
          additionalMetaTags={[{
            property: 'keywords',
            content: post.meta.keywords
          }]}
          openGraph={{
            url: post.website_url,
            title: blogPostLink(post).documentTitle,
            description: post.summary,
            images: [{ url: post.cover_image_url, alt: post.title, }],
            article: {
              tags: post.tags.map(t => (t.name)),
              publishedTime: post.date_published
            }
          }}
        />
        <PostTitle post={post} />
        <PostCover post={post} />
        <ShareButtons message={post.title} />
        <FreeCodeContainer dangerouslySetInnerHTML={{__html: post.html_text}} className={syntaxClassName} />
        <TagsWrapper tags={post.tags} />
      </div>
    );
  }

}

function mapStateToProps({ blogPosts }) {
  return { cachedPosts: blogPosts };
}

const mapDispatchToProps = dispatch => {
  return {
    addBlogPost: bindActionCreators(addBlogPost, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(withTheme(Post));
