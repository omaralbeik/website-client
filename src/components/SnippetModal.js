// React
import React, {Component} from 'react';
import PropTypes from 'prop-types';

// Helmet
import {Helmet} from 'react-helmet';

// Bootstrap
import {Modal, Container, ButtonGroup, Button, Badge} from 'reactstrap';

// Styled Components
import styled, {withTheme} from 'styled-components';

// Components
import ShareButtons from '../components/ShareButtons';

// Helpers
import {copyToClipboard} from '../utils';

// Links
import {withRouter} from 'react-router-dom';
import {snippetsLink, snippetLink} from '../links';

// Strings
import {genericStrings} from '../strings';


class SnippetModal extends Component {
  static propTypes = {
    snippet: PropTypes.object.isRequired
  }

  constructor(props) {
    super(props);

    this.state = {copied: false};
  }

  copy = _ => {
    const {snippet} = this.props;
    const code = this.refs[snippet.id];
    copyToClipboard(code.textContent)
    this.setState({copied: true});
    setTimeout(_ => {
      this.setState({copied: false});
    }, 500);
  }

  close = _ => {
    this.props.history.push(snippetsLink.url);
  }

  render() {
    const {copied} = this.state;
    const {snippet, toggle} = this.props;
    const {style} = this.props.theme;
    const syntaxClassName = style === 'dark' ? 'dark-code' : 'light-code';

    return (
      <Modal toggle={toggle} isOpen centered scrollable size='lg'>
        <Helmet key='meta'>
          <title>{snippetLink(snippet).documentTitle}</title>
          <meta name="description" content={snippet.summary}/>
          <meta name="keywords" content={snippet.language.name}/>
        </Helmet>
        <StyledContainer>
          <h2>{snippet.name} <StyledBadge>{snippet.language.name}</StyledBadge></h2>
          <p>{snippet.summary}</p>
          <ButtonGroup>
            <StyledButton onClick={this.close}>{genericStrings.close}</StyledButton>
            <StyledButton onClick={this.copy}>{copied ? `${genericStrings.copies}` : `${genericStrings.copy}`}</StyledButton>
          </ButtonGroup>
          <CodeContainer ref={snippet.id} dangerouslySetInnerHTML={{__html: snippet.html_text}} className={syntaxClassName}/>
          <ShareButtons message={snippet.name}/>
        </StyledContainer>
      </Modal>
    );
  }

}

const StyledContainer = styled(Container)`
  position: relative;
  background-color: ${props => props.theme.colors.inner_background};
  color: ${props => props.theme.colors.primary};
  padding: 20px;
  overflow-y: scroll;
  
  h2 {
    font-family: ${props => props.theme.fonts.title};
  }

`;

const StyledBadge = styled(Badge)`
  background-color: ${props => props.theme.colors.background};
  color: ${props => props.theme.colors.primary};
  border: 2px solid ${props => props.theme.colors.highlight};
  margin-left: 5px;
`;

const StyledButton = styled(Button)`
  cursor: pointer;
  padding: 8px 20px;
  background-color: ${props => props.theme.colors.background};
  color: ${props => props.theme.colors.primary};
  border-radius: 4px;
  text-align: center;
  font-size: 12pt;
  font-family: ${props => props.theme.fonts.title};
`;

const CodeContainer = styled.div`
  background-color: ${props => props.theme.colors.background};
  border-radius: 8px;

  pre {
    color: ${props => props.theme.colors.primary};
    line-height: 1.5em;
    padding: 15px;
    margin-bottom: 12px;
    font-size: 10pt;
    margin-top: 20px;
  }
`;

export default withRouter(withTheme(SnippetModal));
