// React
import React, {Component} from 'react';

// Redux
import {connect} from 'react-redux';
import {loadSnippets, addSnippet} from '../actions';

// Bootstrap
import {Container, Row} from 'reactstrap';

// Components
import ErrorContainer from '../components/ErrorContainer';
import PageTitle from '../components/PageTitle';
import SnippetCell from '../components/SnippetCell';
import SnippetModal from '../components/SnippetModal';
import SearchInput from '../components/SearchInput';

// Links
import {snippetsLink} from '../links';

// Helpers
import {arrayFromObject} from '../utils';
import APIHelper from '../utils/APIHelper';

// Input
import { throttle, debounce } from 'throttle-debounce';

// Strings
import {genericStrings} from '../strings';


class Snippets extends Component {

  constructor(props) {
    super(props);

    this.state = {
      error: null,
      modal: false,
      q: "",
      results: null
    };

    this.fetchSnippets();
    this.fetchSnippet();

    this.searchDebounced = debounce(500, this.search);
    this.searchThrottled = throttle(500, this.search);

    this.keyPress = this.keyPress.bind(this);
    this.toggle = this.toggle.bind(this);
    this.resetSearch = this.resetSearch.bind(this);
  }

  componentWillMount() {
    document.title = snippetsLink.documentTitle;
  }

  componentDidMount() {
    window.scrollTo(0, 0)
  }

  toggle() {
    this.props.history.push(snippetsLink.url)
    this.setState(prevState => ({
      modal: !prevState.modal
    }));
  }

  fetchSnippets() {
    APIHelper.fetchSnippet().then(snippets => {
      this.props.loadSnippets({snippets});
    }).catch(error => {
      const {snippets} = this.props;
      const isEmpty = Object.getOwnPropertyNames(snippets).length === 0;
      if (isEmpty) {
        this.setState({error: error});
      }
    });
  }

  fetchSnippet() {
    const {snippet_id} = this.props.match.params;
    if (!snippet_id) { return }
    
    APIHelper.fetchSnippet(snippet_id).then(snippet => {      
      this.props.addSnippet({snippet});
    }).catch(error => {
      this.setState({error: error});
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
    APIHelper.searchSnippet(query).then(snippets => {
      this.setState({results: snippets});
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

  renderModal(snippets, snippetsArray) {
    const {snippet_id} = this.props.match.params;
    if (!snippet_id) { return }

    var snippet;
    if (parseInt(snippet_id, 0)) { // get snippet by id
      snippet = snippets[snippet_id]
    } else { // get snippet by url_title
      snippet = snippetsArray.filter(s => (s.slug === snippet_id))[0]
    }

    if (!snippet) { return }

    return (
      <SnippetModal snippet={snippet} toggle={this.toggle} isOpen centered scrollable size='lg'/>
    );
  }

  render() {
    const {q, error, results} = this.state;
    if (error) {
      return (
        <ErrorContainer error={error}/>
      );
    }

    const {snippets} = this.props;
    const snippetsArray = arrayFromObject(snippets)
    let sortedSnippets = snippetsArray.sort((s1, s2) => (s1.date_published < s2.date_published ? 1 : -1))

    if (results) {
      sortedSnippets = results
    }

    return (
      <Container>
        <PageTitle>{snippetsLink.title}</PageTitle>
        <SearchInput placeholder={genericStrings.searchSnippets} value={q} onChange={this.changeQuery} onKeyDown={this.keyPress} onReset={this.resetSearch}/>
        {this.renderModal(snippets, snippetsArray)}
        <Row>
          {sortedSnippets.map(s => (<SnippetCell key={s.id} snippet={s}/>))}
        </Row>
      </Container>
    );
  }

}

function mapStateToProps({snippet, snippets}) {
  return {snippet, snippets}
}

function mapDispatchToProps(dispatch) {
  return {
    loadSnippets: snippets => dispatch(loadSnippets(snippets)),
    addSnippet: snippet => dispatch(addSnippet(snippet))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Snippets);
