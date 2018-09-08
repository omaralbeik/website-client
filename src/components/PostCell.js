// React
import React, {Component} from "react";
import PropTypes from 'prop-types';

// Bootstrap
import {Container} from 'reactstrap';
import {sm} from '../breakpoints';

// Styled Components
import styled from 'styled-components';

// Components
import Title from './Title';
import DateWrapper from './DateWrapper';
import Paragraph from './Paragraph';
import Link from './Link';

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
        <StyledTitle>{post.title}</StyledTitle>
        {this.generateImage(post)}
        <DateWrapper date={post.date_published} isRelative/>
        <StyledParagraph>{post.summary}</StyledParagraph>
        <StyledLink to={blogPostLink(post).url}>{genericStrings.readMore}</StyledLink>
      </StyledContainer>
    );
  }

  generateImage(post) {
    if (post.cover_image_url) {
      return (
        <Link to={blogPostLink(post).url}>
          <StyledImage src={post.cover_image_url} alt={post.title}/>
        </Link>
      );
    }
  }

}

const StyledContainer = styled(Container)`
  margin: 30px 0 60px 0;
  @media (${sm}) {
    padding-left: 0;
    padding-right: 0;
  }
`

const StyledImage = styled.img`
  border-radius: 8px;
  width: 100%;
  margin: 18px 0;
`;

const StyledTitle = styled(Title)`
  max-width: 80%;
  font-size: 160%;
  margin-bottom: 10px;
  @media (${sm}) {
    max-width: 100%;
    font-size: 125%;
  }
`

const StyledParagraph = styled(Paragraph)`
  margin-top: 15px;
  font-size: 95%;
  @media (${sm}) {
    font-size: 90%;
  }
`
const StyledLink = styled(Link)`
  margin-top: 20px;
  font-size: 135%;
  font-weight: bold;
  @media (${sm}) {
    font-size: 115%;
  }
`

export default PostCell;
