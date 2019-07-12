// React
import React, {Component} from 'react';
import PropTypes from 'prop-types';

// Bootstrap
import {Col, Badge} from 'reactstrap';
import {sm} from '../breakpoints';

// Styled Components
import styled, {withTheme} from 'styled-components';

class SnippetCell extends Component {
  static propTypes = {
    snippet: PropTypes.object.isRequired
  }

  render() {
    const {snippet} = this.props;
    const {style} = this.props.theme;
    const syntaxClassName = style === 'dark' ? 'dark-code' : 'light-code';

    return (
      <StyledCol xs={12} md={12} lg={12}>
        <h2>{snippet.name} <LanguageBadge>{snippet.language.name}</LanguageBadge></h2>
        <p>{snippet.summary}</p>
        <CodeContainer dangerouslySetInnerHTML={{__html: snippet.html_text}} className={syntaxClassName}/>
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
  overflow-y: scroll;
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
