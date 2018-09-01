// React
import React, {Component} from "react";
import PropTypes from 'prop-types';

// Bootstrap
import {Container} from 'reactstrap';
import {sm} from '../breakpoints';

// Styled Components
import styled from 'styled-components';

// Components
import Title from '../components/Title';
import DateWrapper from '../components/DateWrapper';
import Paragraph from '../components/Paragraph';
import Link from '../components/Link';

// Strings
import {genericStrings} from '../strings';

class PostCell extends Component {
  static propTypes = {
    post: PropTypes.object.isRequired
  }

  render() {
    const {post} = this.props;

    return (
      <StyledContainer>
        <StyledTitle>{post.title}</StyledTitle>
        <DateWrapper date={post.date} isRelative/>
        <StyledParagraph>{post.summary}</StyledParagraph>
        <StyledLink to='/'>{genericStrings.readMore}</StyledLink>
      </StyledContainer>
    );
  }

}

const StyledContainer = styled(Container)`
  margin: 30px 0 60px 0;
`

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
