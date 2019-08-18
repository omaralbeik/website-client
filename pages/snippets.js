import React, { Component } from 'react';
import Router, { withRouter } from 'next/router';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { loadSnippets, addSnippet } from 'redux/actions';
import APIHelper from 'utils/api-helper';
import PageTitle from 'components/page-title';
import SearchInput from 'components/search-input';
import Error from 'components/error';
import SnippetCell from 'components/snippet-cell';
import SnippetModal from 'components/snippet-modal';
import { snippetsLink, snippetLink } from 'links';
import { twitter } from 'links/social';
import { genericStrings } from 'static/strings';
import { arrayFromObject, findByIdOrSlug } from 'utils';
import { Row } from 'reactstrap';
import { NextSeo } from 'next-seo';

class Snippets extends Component {

  static async getInitialProps({ store, query: { id } }) {
    try {
      const snippets = await APIHelper.fetchSnippets();
      store.dispatch(loadSnippets({ snippets }));
      const content = await APIHelper.fetchContent('snippets');

      if (id) {
        const selectedSnippet = await APIHelper.fetchSnippet(id);
        store.dispatch(addSnippet({ snippet: selectedSnippet }));
        return { snippets, selectedSnippet, id, content };
      }

      return { snippets, id, content };
    }
    catch (error) {
      console.error(error);
      return { error, id };
    }
  }

  constructor(props) {
    super(props);
    
    var { cachedSnippets, selectedSnippet } = this.props;
    const { id, error } = this.props;
    cachedSnippets = arrayFromObject(cachedSnippets);
    cachedSnippets = cachedSnippets.sort((p1, p2) => (p1.date_published < p2.date_published ? 1 : -1));

    if (!selectedSnippet && id) {
      selectedSnippet = findByIdOrSlug(cachedSnippets, id);
    }

    this.state = {
      cachedSnippets,
      modal: selectedSnippet !== null,
      selectedSnippet,
      id
    };
  }

  preformSearch = query => {
    APIHelper.searchSnippet(query).then(snippets => {
      this.setState({ results: snippets });
    }).catch(error => {
      console.error(error);
    });
  }

  resetSearch = () => {
    this.setState({ q: "", results: null });
  }

  toggle = () => {
    const { selectedSnippet } = this.state;
    if (selectedSnippet) {
      this.setState({ selectedSnippet: null, id: null });
      const url = snippetsLink.url;
      Router.push(url, url);
    }
    this.setState(prevState => ({
      modal: !prevState.modal
    }));
  }

  onSnippetCellClick = snippet => {
    this.setState({ selectedSnippet: snippet });
    const { url } = snippetLink(snippet);
    Router.push(url, url);
    this.toggle();
  }

  onSnippedModalCloseClick = () => {
    this.toggle();
  }

  renderModal = () => {
    const { selectedSnippet } = this.state;
    return (
      <SnippetModal snippet={selectedSnippet} toggle={this.toggle} onCloseClick={this.onSnippedModalCloseClick} />
    );
  }

  render() {
    var { snippets, content } = this.props;
    const { error } = this.props;
    const { cachedSnippets, selectedSnippet, id, results } = this.state;

    if (error) {
      if (id && !selectedSnippet) {
        return <Error error={error} />;
      }
      if (cachedSnippets) {
        snippets = cachedSnippets;
      } else {
        return <Error error={error} />;
      }
    }

    if (results) {
      snippets = results
    }

    return (
      <div>
        <NextSeo
          title={(selectedSnippet) ? snippetLink(selectedSnippet).documentTitle : snippetsLink.documentTitle}
          description={(selectedSnippet) ? selectedSnippet.meta.description : content.meta.description}
          canonical={(selectedSnippet) ? selectedSnippet.meta.canonical : content.meta.canonical}
          additionalMetaTags={[{
            property: 'keywords',
            content: (selectedSnippet) ? selectedSnippet.meta.keywords : content.meta.keywords
          }]}
          openGraph={{
            url: (selectedSnippet) ? snippetLink(selectedSnippet).prodUrl : snippetsLink.prodUrl,
            title: (selectedSnippet) ? snippetLink(selectedSnippet).documentTitle : snippetsLink.documentTitle,
            description: (selectedSnippet) ? selectedSnippet.summary : snippetsLink.documentTitle,
          }}
        />
        <PageTitle title={snippetsLink.title} subtitle={snippetsLink.subtitle} />
        <SearchInput placeholder={genericStrings.searchSnippets} onInputUpdate={this.preformSearch} onReset={this.resetSearch} />
        {this.renderModal()}
        <Row>
          {snippets.map(s => (<SnippetCell key={s.id} snippet={s} onClick={this.onSnippetCellClick} />))}
        </Row>
      </div>
    );
  }

}

function mapStateToProps({ snippets }) {
  return { cachedSnippets: snippets };
}

const mapDispatchToProps = dispatch => {
  return {
    loadSnippets: bindActionCreators(loadSnippets, dispatch),
    addSnippet: bindActionCreators(addSnippet, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Snippets));
