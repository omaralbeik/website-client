import React, { Component } from "react";
import Router, { withRouter } from "next/router";
import APIHelper from "utils/api-helper";
import PageTitle from "components/page-title";
import SearchInput from "components/search-input";
import Error from "components/error";
import SnippetCell from "components/snippet-cell";
import SnippetModal from "components/snippet-modal";
import { snippetsLink, snippetLink } from "links";
import { genericStrings } from "public/static/strings";
import { Row } from "reactstrap";
import { NextSeo } from "next-seo";

class Snippets extends Component {
  static async getInitialProps({ query: { id } }) {
    try {
      const snippets = await APIHelper.fetchSnippets();
      const content = await APIHelper.fetchContent("snippets");

      if (id) {
        const selectedSnippet = await APIHelper.fetchSnippet(id);
        return {
          snippets, selectedSnippet, id, content,
        };
      }
      return { snippets, id, content };
    } catch (error) {
      // eslint-disable-next-line no-console
      console.error(error);
      return { error, id };
    }
  }

  constructor(props) {
    super(props);

    const { selectedSnippet } = this.props;
    const modal = selectedSnippet !== null;
    this.state = { modal, selectedSnippet };
  }

  preformSearch = (query) => {
    APIHelper.searchSnippet(query).then((snippets) => {
      this.setState({ results: snippets });
    }).catch((error) => {
      // eslint-disable-next-line no-console
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
      const { url } = snippetsLink;
      Router.push(url, url);
    }
    this.setState((prevState) => ({
      modal: !prevState.modal,
    }));
  }

  onSnippetCellClick = (snippet) => {
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
    const {
      error, snippets, selectedSnippet, content, id,
    } = this.props;
    const { results } = this.state;

    if (error) {
      if (id && !selectedSnippet) {
        return <Error error={error} />;
      }
      return <Error error={error} />;
    }

    return (
      <div>
        <NextSeo
          title={(selectedSnippet) ? snippetLink(selectedSnippet).documentTitle : snippetsLink.documentTitle}
          description={(selectedSnippet) ? selectedSnippet.meta.description : content.meta.description}
          canonical={(selectedSnippet) ? selectedSnippet.meta.canonical : content.meta.canonical}
          additionalMetaTags={[{
            property: "keywords",
            content: (selectedSnippet) ? selectedSnippet.meta.keywords : content.meta.keywords,
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
          {(results || snippets).map((s) => (<SnippetCell key={s.id} snippet={s} onClick={this.onSnippetCellClick} />))}
        </Row>
      </div>
    );
  }
}

export default withRouter(Snippets);
