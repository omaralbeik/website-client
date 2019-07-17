// React
import React, {Component} from 'react';
import PropTypes from 'prop-types';

// Routing & Links
import {withRouter} from 'react-router-dom';

// Bootstrap
import {Container, Col, Badge} from 'reactstrap';
import {sm} from '../breakpoints';

// Styled Components
import styled, {withTheme} from 'styled-components';

// Links
import {snippetLink} from '../links';


class SnippetCell extends Component {
  static propTypes = {
    snippet: PropTypes.object.isRequired
  }

  expand = _ => {
    const {snippet} = this.props;
    this.props.history.push(snippetLink(snippet).url);
  }

  render() {
    const {snippet} = this.props;
    const {style} = this.props.theme;
    const syntaxClassName = style === 'dark' ? 'dark-code' : 'light-code';

    return (
      <StyledCol xs={12} md={6} lg={4} onClick={this.expand}>
        <StyledContainer>
          <h2>{snippet.name} <StyledBadge>{snippet.language.name}</StyledBadge></h2>
          <p>{snippet.summary}</p>
          <StyledDiv ref={snippet.id} dangerouslySetInnerHTML={{__html: snippet.html_text}} className={syntaxClassName}/>
        </StyledContainer>
      </StyledCol>
    );
  }

}

const StyledCol = styled(Col)`
  padding: 12px;
`;

const StyledContainer = styled(Container)`
  position: relative;
  background-color: ${props => props.theme.colors.inner_background};
  padding: 20px;
  margin: 10px 0;
  border-radius: 8px;
  height: 300px;
  overflow-y: hidden;
  cursor: pointer;

  @media (${sm}) {
    height: auto;
    max-height: 250px;
  }

  box-shadow: 0 3px 5px rgba(0, 0, 0, 0.05);
  border-top: 10px solid;
  border-bottom: 0 transparent;
  transition: 0.25s;
  :hover {
    border-top: 0 solid;
    border-bottom: 10px transparent;
  }
`;

const StyledBadge = styled(Badge)`
  background-color: ${props => props.theme.colors.background};
  color: ${props => props.theme.colors.primary};
  border: 2px solid ${props => props.theme.colors.highlight};
  margin-left: 5px;
`;

const StyledDiv = styled.div`
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
