// React
import React, {Component} from 'react';

// Redux
import {connect} from 'react-redux';
import {loadSnippets, addSnippet} from '../actions';

// Bootstrap
import {Container, Row, Modal} from 'reactstrap';

// Components
import ErrorContainer from '../components/ErrorContainer';
import PageTitle from '../components/PageTitle';
import SnippetCell from '../components/SnippetCell';
import SnippetModal from '../components/SnippetModal';

// Links
import {snippetsLink} from '../links';

// Helpers
import {arrayFromObject} from '../utils';
import APIHelper from '../utils/APIHelper';


class Snippets extends Component {

  constructor(props) {
    super(props);

    this.state = { error: null };
    this.fetchSnippets();
    this.fetchSnippet();

    this.state = {
      modal: false
    };

    this.toggle = this.toggle.bind(this);
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
    const {error} = this.state;
    if (error) {
      return (
        <ErrorContainer error={error}/>
      );
    }

    const {snippets} = this.props;
    const snippetsArray = arrayFromObject(snippets)
    const sortedSnippets = snippetsArray.sort((s1, s2) => (s1.date_published < s2.date_published ? 1 : -1))

    return (
      <Container>
        <PageTitle>{snippetsLink.title}</PageTitle>
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
