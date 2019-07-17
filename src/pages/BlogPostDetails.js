// React
import React, {Component} from 'react';

// Redux
import {connect} from 'react-redux';
import {addBlogPost} from '../actions';

// Helmet
import {Helmet} from 'react-helmet';

// Styled Components
import styled, {withTheme} from 'styled-components';

// Bootstrap
import {sm} from '../breakpoints';

// Components
import {Container} from 'reactstrap';
import PostTitle from '../components/PostTitle';
import FreeCodeContainer from '../components/FreeCodeContainer';
import Loading from '../components/Loading';
import ErrorContainer from '../components/ErrorContainer'
import ShareButtons from '../components/ShareButtons';
import Tags from '../components/Tags';

// Helpers
import APIHelper from '../utils/APIHelper';
import {arrayFromObject} from '../utils';

// Strings
import {blogPostLink} from '../links';


class BlogPostDetails extends Component {

  constructor(props) {
    super(props);
    
    this.state = { error: null };
    this.fetchBlogPost();
  }

  componentDidMount() {
    window.scrollTo(0, 0);
  }

  fetchBlogPost = _ => {
    const {post_id} = this.props.match.params;
    APIHelper.fetchBlogPost(post_id).then(post => {
      this.props.addBlogPost({post});
    }).catch(error => {
      this.setState({error: error});
    });
  }

  render() {
    const {blogPosts} = this.props;
    const {post_id} = this.props.match.params;

    var post;
    if (parseInt(post_id, 0)) { // get post by id
      post = blogPosts[post_id]
    } else { // get post by url_title
      const postsArray = arrayFromObject(blogPosts);
      post = postsArray.filter(p => (p.slug === post_id))[0]
    }

    const {error} = this.state;
    if (error && !post) {
      return (
        <ErrorContainer error={error}/>
      );
    }

    if (!post) { return <Loading/>; }

    const {summary='', tags=[]} = post;

    return (
      <Container>
        <Helmet key='meta'>
          <title>{blogPostLink(post).documentTitle}</title>
          <meta name="description" content={summary}/>
          <meta name="keywords" content={tags.map(t => (t.name)).join(',')}/>
        </Helmet>
        {this.generateBody(post)}
      </Container>
    );

  }

  generateBody = (post) => {
    if (!post) {
      return <Loading/>
    }

    const {style} = this.props.theme;
    const syntaxClassName = style === 'dark' ? 'dark-code' : 'light-code';
    return [
      <PostTitle key='title' post={post}/>,
      <div key='cover'>{this.generateCoverImage(post)}</div>,
      <ShareButtons key='share' message={post.title}/>,
      <FreeCodeContainer key='body' dangerouslySetInnerHTML={{__html: post.html_text}} className={syntaxClassName}/>,
      <Tags key='tags' tags={post.tags}/>
    ];
  }

  generateCoverImage = (post) => {
    if (!post) { return }
    if (!post.cover_image_url) { return }
    return (
      <CoverContainer>
        <CoverImage src={post.cover_image_url} alt={post.title} loader={<Loading/>}/>
        <CreditBadge dangerouslySetInnerHTML={{ __html: post.cover_image_credit_badge }}/>
      </CoverContainer>
    );
  }

}

const CoverContainer = styled.div`
  position: relative;
`;

const CoverImage = styled.img`
  width: 100vw;
  position: relative;
  left: 50%;
  right: 50%;
  margin: 0 -50vw 20px -50vw;
`;

const CreditBadge = styled.div`
  position: absolute;
  bottom: 6px;
  right: 0;
  @media (${sm}) {
    left: 0;
    text-align: center;
  }
`;

function mapStateToProps({blogPosts}) {
  return {blogPosts}
}

function mapDispatchToProps(dispatch) {
  return {
    addBlogPost: post => dispatch(addBlogPost(post))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(withTheme(BlogPostDetails));
