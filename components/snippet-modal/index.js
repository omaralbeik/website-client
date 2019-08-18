import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Router, { withRouter } from 'next/router';
import { withTheme } from 'styled-components';
import ShareButtons from 'components/share-buttons';
import { _Modal, _ButtonGroup, _Container, _Badge, _Button, _div } from './_styled';
import { copyToClipboard } from 'utils';
import { snippetsLink } from 'links';
import { genericStrings } from 'static/strings';

class SnippetModal extends Component {

  static propTypes = {
    snippet: PropTypes.object,
    onCloseClick: PropTypes.func
  }
  
  state = { copied: false };

  copy = _ => {
    const { snippet } = this.props;
    const code = this.refs[snippet.id];
    copyToClipboard(code.textContent)
    this.setState({copied: true});
    setTimeout(_ => {
      this.setState({copied: false});
    }, 500);
  }

  close = _ => {
    const { onCloseClick } = this.props;
    if (onCloseClick) {
      onCloseClick();
    }
  }

  render() {
    const { copied } = this.state;
    const { snippet, toggle } = this.props;
    const { style } = this.props.theme;
    const syntaxClassName = style === 'dark' ? 'dark-code' : 'light-code';

    if (!snippet) {
      return null;
    }

    return (
      <_Modal toggle={toggle} isOpen centered scrollable size='lg'>
        <_Container>
          <h2>{snippet.name} <_Badge>{snippet.language.name}</_Badge></h2>
          <p>{snippet.summary}</p>
          <_ButtonGroup>
            <_Button onClick={this.close}>{genericStrings.close}</_Button>
            <_Button onClick={this.copy}>{copied ? `${genericStrings.copies}` : `${genericStrings.copy}`}</_Button>
          </_ButtonGroup>
          <_div ref={snippet.id} dangerouslySetInnerHTML={{__html: snippet.html_text}} className={syntaxClassName} />
          <ShareButtons message={snippet.name} />
        </_Container>
      </_Modal>
    );
  }

}

export default withRouter(withTheme(SnippetModal));
