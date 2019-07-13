// React
import React, {Component} from 'react';
import PropTypes from 'prop-types';

// Routing & Links
import {Link} from 'react-router-dom';

// Bootstrap
import {Container, Col} from 'reactstrap';
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
      <StyledCol xs={12} md={12} lg={6}>
        <StyledContainer >
          <StyledLink1 to={blogPostLink(post).url}><StyledH2>{post.title}</StyledH2></StyledLink1>
          <DateWrapper date={post.date_published} isRelative/>
          <StyledP>{post.summary}</StyledP>
          <StyledLink2 to={blogPostLink(post).url}>{genericStrings.readMore}</StyledLink2>
        </StyledContainer>
      </StyledCol>
    );
  }

}

const StyledCol = styled(Col)`
  padding: 12px;
`;

const StyledContainer = styled(Container)`
  display: flex;
  flex-direction: column;
  height: 100%;
  height: 250px;
  background-color: ${props => props.theme.colors.inner_background};
  border-radius: 8px;
  padding: 25px;
  box-shadow: 0 3px 5px rgba(0, 0, 0, 0.05);
  border-top: 10px solid;
  border-bottom: 0 transparent solid;
  transition: 0.25s;
  :hover {
    border-top: 0 solid;
    border-bottom: 10px transparent solid;
  }
`;

const StyledH2 = styled.h2`
  margin-bottom: 2px;
  font-weight: bold;
  @media (${sm}) {
    font-size: 145%;
  }
`;

const StyledP = styled.p`
  margin-top: 20px;
  font-size: 85%;
  overflow-y: hidden;
  @media (${sm}) {
    font-size: 90%;
  }
`;

const StyledLink1 = styled(Link)`
  color: ${props => props.theme.colors.primary} !important;
  &:hover {
    text-decoration: none;
  }
`

const StyledLink2 = styled(Link)`
  margin-top: 12px;
  font-size: 12pt;
  font-weight: bold;
  margin-top: auto;
  margin-left: auto;
  @media (${sm}) {
    font-size: 115%;
  }
`;

export default PostCell;
