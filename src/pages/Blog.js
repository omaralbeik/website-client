// React
import React, {Component} from "react";

// Redux
import {connect} from 'react-redux';
import {loadBlogPosts} from '../actions';

// Bootstrap
import {Container} from 'reactstrap';

// Components
import PostCell from '../components/PostCell';
import PageTitle from '../components/PageTitle';
import ErrorContainer from '../components/ErrorContainer'

// Links
import {blogLink} from '../links';

// Helpers
import {arrayFromObject} from '../utils';
import APIHelper from '../utils/APIHelper';


class Blog extends Component {

  constructor(props) {
    super(props);
    this.state = { error: null };
    this.fetchBlogPosts();
  }

  componentWillMount() {
    document.title = blogLink.documentTitle;
  }

  fetchBlogPosts() {
    APIHelper.fetchBlogPosts().then(posts => {
      this.props.loadBlogPosts({posts});
    }).catch(error => {
      const {blogPosts} = this.props;
      const isEmpty = Object.getOwnPropertyNames(blogPosts).length === 0;
      if (isEmpty) {
        this.setState({error: error});
      }
    });
  }

  render() {
    const {error} = this.state;
    if (error) {
      return (
        <ErrorContainer error={error}/>
      );
    }

    const {blogPosts} = this.props;
    const postsArray = arrayFromObject(blogPosts)

    return (
      <Container>
        <PageTitle>{blogLink.title}</PageTitle>
        {postsArray.map(p => (<PostCell key={p.id} post={p}/>))}
      </Container>
    );
  }

}

function mapStateToProps({blogPosts}) {
  return {blogPosts}
}

function mapDispatchToProps(dispatch) {
  return {
    loadBlogPosts: posts => dispatch(loadBlogPosts(posts))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Blog);
