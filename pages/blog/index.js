import React, { Component } from "react";
import APIHelper from "utils/api-helper";
import PageTitle from "components/page-title";
import PostCell from "components/post-cell";
import SearchInput from "components/search-input";
import { Row } from "reactstrap";
import Error from "components/error";
import { blogLink } from "links";
import { genericStrings } from "public/static/strings";
import { NextSeo } from "next-seo";

class Blog extends Component {
  static async getInitialProps() {
    try {
      const posts = await APIHelper.fetchBlogPosts();
      const content = await APIHelper.fetchContent("blog");
      return { posts, content };
    } catch (error) {
      // eslint-disable-next-line no-console
      console.error(error);
      return { error };
    }
  }

  state = {};

  preformSearch = (query) => {
    APIHelper.searchBlogPost(query).then((posts) => {
      this.setState({ results: posts });
    }).catch((error) => {
      // eslint-disable-next-line no-console
      console.error(error);
    });
  }

  resetSearch = () => {
    this.setState({ results: null });
  }

  render() {
    const { error, posts, content } = this.props;
    const { results } = this.state;

    if (error) {
      return <Error error={error} />;
    }

    return (
      <div>
        <NextSeo
          title={blogLink.documentTitle}
          description={content.meta.description}
          canonical={content.meta.canonical}
          additionalMetaTags={[{
            property: "keywords",
            content: content.meta.keywords,
          }]}
          openGraph={{
            url: blogLink.prodUrl,
            title: blogLink.documentTitle,
            description: blogLink.documentTitle,
          }}
        />
        <PageTitle title={blogLink.title} subtitle={blogLink.subtitle} />
        <SearchInput placeholder={genericStrings.searchBlogPosts} onInputUpdate={this.preformSearch} onReset={this.resetSearch} />
        <Row>
          {(results || posts).map((p) => (<PostCell key={p.id} post={p} />))}
        </Row>
      </div>
    );
  }
}

export default Blog;
