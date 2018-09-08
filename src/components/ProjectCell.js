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
import GlobalLink from '../components/GlobalLink';

// 3rd party components
import Img from 'react-image'

// Strings
import {portfolioStrings} from '../strings';

// Media
import placeholder from '../images/placeholders/project.svg';

// Helpers
import APIHelper from '../utils/APIHelper';

class ProjectCell extends Component {
  static propTypes = {
    project: PropTypes.object.isRequired
  }

  render() {
    const {project} = this.props;
    const imageUrl = APIHelper.mediaUrl(project.logo.url);

    return (
      <StyledContainer>
        <Row>
          <ImageWrapper md={4} lg={3}>
            <StyledImage src={[imageUrl, placeholder]} alt={project.title}/>
          </ImageWrapper>
          <Col md={8} lg={9}>
            <StyledTitle>{project.name}</StyledTitle>
            <DateWrapper date={project.releasedAt} />
            <StyledParagraph>{project.summary}</StyledParagraph>
            {this.generatProjectLink(project)}
          </Col>
        </Row>
      </StyledContainer>
    );
  }

  generatProjectLink(project) {
    if (project.url) {
      return <StyledLink href={project.websiteUrl} target='_blank'>{portfolioStrings.website}</StyledLink>
    } else if (project.repoUrl) {
      return <StyledLink href={project.repoUrl} target='_blank'>{portfolioStrings.repo}</StyledLink>
    }
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

const StyledImage = styled(Img)`
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
const StyledLink = styled(GlobalLink)`
  margin-top: 20px;
  font-size: 135%;
  font-weight: bold;
  @media (${sm}) {
    font-size: 115%;
  }
`

export default ProjectCell;
