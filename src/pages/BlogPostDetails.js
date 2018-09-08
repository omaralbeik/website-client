// React
import React, {Component} from "react";

// Redux
import {connect} from 'react-redux';
import {addBlogPost} from '../actions';

// Styled Components
import {withTheme} from 'styled-components';

// Components
import {Container} from 'reactstrap';
import PageTitle from '../components/PageTitle';
import FreeCodeContainer from '../components/FreeCodeContainer';
import Loading from '../components/Loading';

// Helpers
import APIHelper from '../utils/APIHelper';
import {arrayFromObject} from '../utils';


class BlogPostDetails extends Component {

  constructor(props) {
    super(props);
    this.state = { error: null };
    this.fetchBlogPost();
  }

  fetchBlogPost() {
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
      <PageTitle key='title'>{post.title}</PageTitle>,
      <FreeCodeContainer key='body' dangerouslySetInnerHTML={{__html: post.html_text}} className={syntaxClassName}></FreeCodeContainer>
    ];
  }

}

function mapStateToProps({blogPosts}) {
  return {blogPosts}
}

function mapDispatchToProps(dispatch) {
  return {
    addBlogPost: post => dispatch(addBlogPost(post))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(withTheme(BlogPostDetails));
