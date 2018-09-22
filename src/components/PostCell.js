// React
import React, {Component} from "react";
import PropTypes from 'prop-types';

// Routing & Links
import {Link} from 'react-router-dom';

// Bootstrap
import {Container} from 'reactstrap';
import {sm} from '../breakpoints';

// Styled Components
import styled from 'styled-components';

// Components
import DateWrapper from './DateWrapper';

// Strings
import {genericStrings} from '../strings';

// Links
import {blogPostLink} from '../links';


class PostCell extends Component {
  static propTypes = {
    post: PropTypes.object.isRequired
  }

  render() {
    const {post} = this.props;

    return (
      <StyledContainer>
        <TitleLink to={blogPostLink(post).url}><StyledTitle>{post.title}</StyledTitle></TitleLink>
        <DateWrapper date={post.date_published} isRelative/>
        <StyledParagraph>{post.summary}</StyledParagraph>
        <StyledLink to={blogPostLink(post).url}>{genericStrings.readMore}</StyledLink>
      </StyledContainer>
    );
  }

}

const StyledContainer = styled(Container)`
  margin: 40px 0 60px 0;
  @media (${sm}) {
    padding-left: 0;
    padding-right: 0;
  }
`;

const StyledTitle = styled.h2`
  max-width: 80%;
  margin-bottom: 10px;
  font-weight: bold;
  @media (${sm}) {
    max-width: 100%;
    font-size: 125%;
  }
`;

const StyledParagraph = styled.p`
  margin-top: 20px;
  font-size: 95%;
  @media (${sm}) {
    font-size: 90%;
  }
`;

const TitleLink = styled(Link)`
  color: ${props => props.theme.colors.primary} !important;
  &:hover {
    text-decoration: none;
  }
`

const StyledLink = styled(Link)`
  margin-top: 20px;
  font-size: 135%;
  font-weight: bold;
  @media (${sm}) {
    font-size: 115%;
  }
`;

export default PostCell;
