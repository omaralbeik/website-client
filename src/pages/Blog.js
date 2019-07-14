// React
import React, {Component} from 'react';

// Redux
import {connect} from 'react-redux';
import {loadBlogPosts} from '../actions';

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

// Input
import {throttle, debounce} from 'throttle-debounce';

// Strings
import {genericStrings} from '../strings';


class Blog extends Component {

  constructor(props) {
    super(props);

    this.state = {
      error: null,
      q: "",
      results: null
    };

    this.fetchBlogPosts();

    this.searchDebounced = debounce(500, this.search);
    this.searchThrottled = throttle(500, this.search);

    this.keyPress = this.keyPress.bind(this);
    this.resetSearch = this.resetSearch.bind(this);
  }

  componentWillMount() {
    document.title = blogLink.documentTitle;
  }

  componentDidMount() {
    window.scrollTo(0, 0)
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

  changeQuery = event => {
    this.setState({ q: event.target.value }, () => {
      const q = this.state.q;
      if (q.length < 5) {
        this.searchThrottled(this.state.q);
      } else {
        this.searchDebounced(this.state.q);
      }
    });
  };

  search(query) {
    query = query.trim()
    if (query.length === 0) {
      this.setState({results: null});
      return;
    }
    APIHelper.searchBlogPost(query).then(posts => {
      this.setState({results: posts});
    }).catch(error => {
      console.error(error);
    });
  }

  resetSearch() {
    this.setState({q: "", results:null});
  }

  keyPress(event) {
    if (event.keyCode === 13) {
       this.search(event.target.value);       
    }
  }

  render() {
    const {q, error, results} = this.state;
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
        <PageTitle>{blogLink.title}</PageTitle>
        <SearchInput placeholder={genericStrings.searchBlogPosts} value={q} onChange={this.changeQuery} onKeyDown={this.keyPress} onReset={this.resetSearch}/>
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
