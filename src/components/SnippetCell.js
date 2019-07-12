// React
import React, {Component} from 'react';
import PropTypes from 'prop-types';

// Bootstrap
import {Col, Badge} from 'reactstrap';
import {sm} from '../breakpoints';

// Styled Components
import styled, {withTheme} from 'styled-components';

import {copyToClipboard} from '../utils';

class SnippetCell extends Component {
  static propTypes = {
    snippet: PropTypes.object.isRequired
  }

  constructor(props) {
    super(props);

    this.copy = this.copy.bind(this);
    this.state = {
      copied: false
    };
  }

  copy() {
    const {snippet} = this.props;
    const code = this.refs[snippet.id];
    copyToClipboard(code.textContent)
    this.setState({copied: true});
    setTimeout(_ => {
      this.setState({copied: false});
    }, 500);
  }

  render() {
    const {copied} = this.state;
    const {snippet} = this.props;
    const {style} = this.props.theme;
    const syntaxClassName = style === 'dark' ? 'dark-code' : 'light-code';

    return (
      <StyledCol xs={12} md={12} lg={12}>
        <CopyButton onClick={this.copy}>{copied ? 'Copied!' : 'Copy'}</CopyButton>
        <a href='#'><h2>{snippet.name} <LanguageBadge>{snippet.language.name}</LanguageBadge></h2></a>
        <p>{snippet.summary}</p>
        <CodeContainer ref={snippet.id} dangerouslySetInnerHTML={{__html: snippet.html_text}} className={syntaxClassName}/>
      </StyledCol>
    );
  }

}

const StyledCol = styled(Col)`
  position: relative;
  background-color: ${props => props.theme.colors.inner_background};
  padding: 20px;
  margin: 10px 0;
  border-radius: 8px;
  border: 5px solid ${props => props.theme.colors.inner_background};
  max-height: 300px;
  overflow-y: hidden;

  a {
    color: ${props => props.theme.colors.primary};
    :hover {
      color: ${props => props.theme.colors.primary};
      text-decoration: none;
    }
  }
`;

const CopyButton = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  cursor:pointer;
  padding: 2px 10px;
  background-color: ${props => props.theme.colors.primary};
  color: ${props => props.theme.colors.background};
  font-size: 80%;
  border-radius: 4px;
  @media (${sm}) {
      display: none;
  }
`;

const LanguageBadge = styled(Badge)`
  background-color: ${props => props.theme.colors.background};
  color: ${props => props.theme.colors.primary};
  border: 2px solid ${props => props.theme.colors.highlight};
  margin-left: 5px;
`;

const CodeContainer = styled.div`
  background-color: ${props => props.theme.colors.background};
  border-radius: 8px;

  pre {
    color: ${props => props.theme.colors.primary};
    line-height: 1.5em;
    padding: 15px;
    margin: 8px 0 10px 0;
    font-size: 10pt;
    white-space: pre-wrap;
    white-space: -moz-pre-wrap;
    white-space: -pre-wrap;
    white-space: -o-pre-wrap;
    word-wrap: break-word;
    @media (${sm}) {
      display: none;
    }
  }
`;

export default withTheme(SnippetCell);
