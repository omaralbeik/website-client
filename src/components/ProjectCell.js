// React
import React, {Component} from "react";
import PropTypes from 'prop-types';

// Bootstrap
import {Container, Row, Col} from 'reactstrap';
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

// Test images
import Logo from '../images/test_logo.svg';

class ProjectCell extends Component {
  static propTypes = {
    project: PropTypes.object.isRequired
  }

  render() {
    const {project} = this.props;

    return (
      <StyledContainer>
        <Row>
          <ImageWrapper md={4} lg={3}>
            <StyledImage src={Logo} alt={project.title} />
          </ImageWrapper>
          <Col md={8} lg={9}>
            <StyledTitle>{project.title}</StyledTitle>
            <DateWrapper date={project.date} />
            <StyledParagraph>{project.summary}</StyledParagraph>
            <StyledLink to='/'>{genericStrings.readMore}</StyledLink>
          </Col>
        </Row>
      </StyledContainer>
    );
  }

}

const StyledContainer = styled(Container)`
  margin: 30px 0 60px 0;
`

const ImageWrapper = styled(Col)`
  @media (${sm}) {
    display: none;
  }
`

const StyledImage = styled.img`
  background-color: red;
  border-radius: 10px;
  width: 100%;
  margin-top: 0;
  margin-bottom: auto;
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

export default ProjectCell;
