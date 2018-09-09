// React
import React, {Component} from "react";
import PropTypes from 'prop-types';

// Bootstrap
import {Container, Row, Col} from 'reactstrap';
import {sm} from '../breakpoints';

// Styled Components
import styled from 'styled-components';

// Components
import DateWrapper from '../components/DateWrapper';

// 3rd party components
import Img from 'react-image'

// Strings
import {genericStrings} from '../strings';

// Media
import placeholder from '../images/placeholders/project.svg';


class ProjectCell extends Component {
  static propTypes = {
    project: PropTypes.object.isRequired
  }

  render() {
    const {project} = this.props;

    return (
      <CellContainer>
        <Row>
          <ImageWrapper md={4} lg={3}>
            <a href={project.url} target='_blank'>
              <Image src={[project.logo_url, placeholder]} alt={project.title}/>
            </a>
          </ImageWrapper>
          <Col md={8} lg={9}>
            <Title>{project.name}</Title>
            <DateWrapper date={project.date_published} />
            <Paragraph>{project.summary}</Paragraph>
            <Link href={project.url} target='_blank'>{project.url_name} {genericStrings.linkArrow}</Link>
          </Col>
        </Row>
      </CellContainer>
    );
  }

}

const CellContainer = styled(Container)`
  margin: 20px 0 50px 0;
  @media (${sm}) {
    padding: 0;
  }
`;

const ImageWrapper = styled(Col)`
  @media (${sm}) {
    display: none;
  }
`;

const Image = styled(Img)`
  border-radius: 10px;
  width: 100%;
  margin-top: 0;
  margin-bottom: auto;
`;

const Title = styled.h2`
  margin: 10px 0 4px 0;
  max-width: 100%;
  font-weight: bold;
  @media (${sm}) {
    max-width: 100%;
    font-size: 125%;
  }
`;

const Paragraph = styled.p`
  margin: 20px 0 12px 0;
  font-size: 11pt;
  @media (${sm}) {
    font-size: 10pt;
  }
`;
const Link = styled.a`
  margin-top: 20px;
  font-size: 16pt;
  font-weight: bold;
  @media (${sm}) {
    font-size: 14pt;
  }
`;

export default ProjectCell;
