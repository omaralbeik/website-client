// React
import React, {Component} from 'react';

// Redux
import {connect} from 'react-redux';
import {loadSnippets} from '../actions';

// Bootstrap
import {Container, Row} from 'reactstrap';

// Components
import ErrorContainer from '../components/ErrorContainer';
import PageTitle from '../components/PageTitle';
import SnippetCell from '../components/SnippetCell';

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
  }

  componentWillMount() {
    document.title = snippetsLink.documentTitle;
  }

  componentDidMount() {
    window.scrollTo(0, 0)
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
        <Row>
          {sortedSnippets.map(s => (<SnippetCell key={s.id} snippet={s}/>))}
        </Row>
      </Container>
    );
  }

}

function mapStateToProps({snippets}) {
  return {snippets}
}

function mapDispatchToProps(dispatch) {
  return {
    loadSnippets: snippets => dispatch(loadSnippets(snippets))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Snippets);
