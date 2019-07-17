// React
import React, {Component} from 'react';

// Redux
import {connect} from 'react-redux';
import {loadBlogPosts} from '../actions';

// Helmet
import {Helmet} from 'react-helmet';

// Bootstrap
import {Container, Row} from 'reactstrap';

// Components
import PostCell from '../components/PostCell';
import PageTitle from '../components/PageTitle';
import ErrorContainer from '../components/ErrorContainer'
import SearchInput from '../components/SearchInput';

// Links
import {blogLink} from '../links';

// Helpers
import {arrayFromObject} from '../utils';
import APIHelper from '../utils/APIHelper';

// Strings
import {genericStrings} from '../strings';


class Blog extends Component {

  constructor(props) {
    super(props);

    this.state = {
      error: null,
      results: null
    };

    this.fetchBlogPosts();
  }

  componentWillMount() {
    document.title = blogLink.documentTitle;
  }

  componentDidMount() {
    window.scrollTo(0, 0)
  }

  fetchBlogPosts = _ => {
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

  preformSearch = query => {
    APIHelper.searchBlogPost(query).then(posts => {
      this.setState({results: posts});
    }).catch(error => {
      console.error(error);
    });
  }

  resetSearch() {
    this.setState({results:null});
  }

  render() {
    const {error, results} = this.state;
    if (error) {
      return (
        <ErrorContainer error={error}/>
      );
    }

    const {blogPosts} = this.props;
    const postsArray = arrayFromObject(blogPosts)
    let sortedPosts = postsArray.sort((p1, p2) => (p1.date_published < p2.date_published ? 1 : -1))

    if (results) {
      sortedPosts = results
    }

    return (
      <Container>
        <Helmet>
          <title>{blogLink.documentTitle}</title>
        </Helmet>
        <PageTitle>{blogLink.title}</PageTitle>
        <SearchInput placeholder={genericStrings.searchBlogPosts} onInputUpdate={this.preformSearch} onReset={this.resetSearch}/>
        <Row>
          {sortedPosts.map(p => (<PostCell key={p.id} post={p}/>))}
        </Row>
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
