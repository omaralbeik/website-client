import React, { Component } from 'react';
import Link from 'next/link';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { loadBlogPosts } from 'redux/actions';
import APIHelper from 'utils/api-helper';
import PageTitle from 'components/page-title';
import PostCell from 'components/post-cell';
import SearchInput from 'components/search-input';
import { Row } from 'reactstrap';
import Error from 'components/error';
import { blogLink } from 'links';
import { twitter } from 'links/social';
import { arrayFromObject } from 'utils';
import { genericStrings } from 'static/strings';
import { NextSeo } from 'next-seo';

class Blog extends Component {

  static async getInitialProps({ store }) {
    try {
      const posts = await APIHelper.fetchBlogPosts();
      const content = await APIHelper.fetchContent('blog');
      store.dispatch(loadBlogPosts({ posts }));
      return { posts, content };
    }
    catch (error) {
      console.error(error);
      return { error };
    }
  }

  constructor(props) {
    super(props);
    
    var { cachedPosts } = this.props;
    cachedPosts = arrayFromObject(cachedPosts);
    cachedPosts = cachedPosts.sort((p1, p2) => (p1.date_published < p2.date_published ? 1 : -1));
    this.state = { cachedPosts };
  }

  preformSearch = query => {
    APIHelper.searchBlogPost(query).then(posts => {
      this.setState({ results: posts });
    }).catch(error => {
      console.error(error);
    });
  }

  resetSearch = () => {
    this.setState({ results:null });
  }

  render() {
    var { posts, content } = this.props;
    const { error } = this.props;
    const { cachedPosts, results } = this.state;

    if (error) {
      if (cachedPosts) {
        posts = cachedPosts;
      } else {
        return <Error error={error} />;
      }
    }

    if (results) {
      posts = results;
    }

    return (
      <div>
        <NextSeo
        title={blogLink.documentTitle}
          description={content.meta.description}
          canonical={content.meta.canonical}
          additionalMetaTags={[{
            property: 'keywords',
            content: content.meta.keywords
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
          {posts.map(p => (<PostCell key={p.id} post={p} />))}
        </Row>
      </div>
    );
  }

}

function mapStateToProps({ blogPosts }) {
  return { cachedPosts: blogPosts };
}

const mapDispatchToProps = dispatch => {
  return {
    loadBlogPosts: bindActionCreators(loadBlogPosts, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Blog);
