import React, { Component } from "react";
import { withTheme } from "styled-components";
import APIHelper from "utils/api-helper";
import Error from "components/error";
import PostTitle from "components/post-title";
import PostCover from "components/post-cover";
import ShareButtons from "components/share-buttons";
import TagsWrapper from "components/tags-wrapper";
import FreeCodeContainer from "components/free-code-container";
import RelatedPosts from "components/related-posts";
import { blogPostLink } from "links";
import { NextSeo } from "next-seo";

class Post extends Component {
  static async getInitialProps({ query }) {
    const { id } = query;
    try {
      const post = await APIHelper.fetchBlogPost(id);
      const relatedPosts = await APIHelper.fetchRelatedBlogPosts(id);
      return { post, relatedPosts, id };
    } catch (error) {
      // eslint-disable-next-line no-console
      console.error(error);
      return { error, id };
    }
  }

  render() {
    const { error, post, relatedPosts = [] } = this.props;

    if (error) {
      return <Error error={error} />;
    }

    const { style } = this.props.theme;
    const syntaxClassName = style === "dark" ? "dark-code" : "light-code";

    return (
      <div>
        <NextSeo
          title={blogPostLink(post).documentTitle}
          description={post.meta.description}
          canonical={post.meta.canonical}
          additionalMetaTags={[{
            property: "keywords",
            content: post.meta.keywords,
          }]}
          openGraph={{
            url: post.website_url,
            title: blogPostLink(post).documentTitle,
            description: post.summary,
            images: [{ url: post.cover_image_url, alt: post.title }],
            article: {
              tags: post.tags.map((t) => (t.name)),
              publishedTime: post.date_published,
            },
          }}
        />
        <PostTitle post={post} />
        <PostCover post={post} />
        <ShareButtons message={post.title} />
        <FreeCodeContainer dangerouslySetInnerHTML={{ __html: post.html_text }} className={syntaxClassName} />
        <TagsWrapper tags={post.tags} />
        <RelatedPosts posts={relatedPosts} />
      </div>
    );
  }
}

export default withTheme(Post);
