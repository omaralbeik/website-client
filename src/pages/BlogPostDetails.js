// React
import React, {Component} from "react";

// Redux
import {connect} from 'react-redux';
import {addBlogPost} from '../actions';

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

// Helpers
import APIHelper from '../utils/APIHelper';
import {arrayFromObject} from '../utils';

// Strings
import {genericStrings} from '../strings';


class BlogPostDetails extends Component {

  constructor(props) {
    super(props);
    this.state = { error: null };
    this.fetchBlogPost();
  }

  componentDidMount() {
    window.scrollTo(0, 0);
  }

  fetchBlogPost() {
    const {post_id} = this.props.match.params;
    APIHelper.fetchBlogPost(post_id).then(post => {
      this.props.addBlogPost({post});
    }).catch(error => {
      this.setState({error: error});
    });
  }

  setTitle(post) {
    if (post) {
      document.title = `${post.title} | ${genericStrings.name}`;
    }
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

    this.setTitle(post);

    const {error} = this.state;
    if (error) {
      return (
        <ErrorContainer error={error}/>
      );
    }

    return (
      <Container>
        {this.generateBody(post)}
      </Container>
    );

  }

  generateBody(post) {
    if (!post) {
      return <Loading/>
    }

    const {style} = this.props.theme;
    const syntaxClassName = style === 'dark' ? 'dark-code' : 'light-code';
    return [
      <PostTitle key='title' post={post}/>,
      <div key='cover'>{this.generateCoverImage(post)}</div>,
      <ShareButtons key='share' post={post}/>,
      <FreeCodeContainer key='body' dangerouslySetInnerHTML={{__html: post.html_text}} className={syntaxClassName}/>
    ];
  }

  generateCoverImage(post) {
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
  bottom: 50px;
  right: 0;
  @media (${sm}) {
    bottom: 25px;
    right: -25px;
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
