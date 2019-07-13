// React
import React, {Component} from 'react';
import PropTypes from 'prop-types';

// Routing & Links
import {withRouter} from 'react-router-dom'

// Bootstrap
import {Col, Badge} from 'reactstrap';
import {sm} from '../breakpoints';

// Styled Components
import styled, {withTheme} from 'styled-components';

// Links
import {snippetLink} from '../links';

class SnippetCell extends Component {
  static propTypes = {
    snippet: PropTypes.object.isRequired
  }

  constructor(props) {
    super(props)

    this.expand = this.expand.bind(this)
  }

  expand() {
    const {snippet} = this.props;
    this.props.history.push(snippetLink(snippet).url);
  }

  render() {
    const {snippet} = this.props;
    
    const {style} = this.props.theme;
    const syntaxClassName = style === 'dark' ? 'dark-code' : 'light-code';

    return (
        <StyledCol xs={12} md={12} lg={12} onClick={this.expand}>
          <h2>{snippet.name} <LanguageBadge>{snippet.language.name}</LanguageBadge></h2>
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
  max-height: 300px;
  overflow-y: hidden;
  cursor: pointer;

  box-shadow: 0 3px 5px rgba(0, 0, 0, 0.05);
  border-left: 10px solid;
  border-right: 0 ${props => props.theme.colors.inner_background} solid;
  transition: 0.25s;
  :hover {
    border-left: 0 solid;
    border-right: 10px ${props => props.theme.colors.inner_background} solid;
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

export default withRouter(withTheme(SnippetCell));
