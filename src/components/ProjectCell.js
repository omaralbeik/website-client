// React
import React, {Component} from "react";
import PropTypes from 'prop-types';

// Bootstrap
import {Container, Row, Col} from 'reactstrap';
import {sm} from '../breakpoints';

// Styled Components
import styled from 'styled-components';

// Components
import DateWrapper from './DateWrapper';
import Loading from './Loading';

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
          <ImageWrapper md={3} lg={2}>
            <a href={project.url} target='_blank' rel='noopener noreferrer'>
              <Image src={[project.logo_url, placeholder]} alt={project.title} loader={<Loading/>}/>
            </a>
          </ImageWrapper>
          <Col md={9} lg={10}>
            <TitleLink href={project.url} target='_blank' rel='noopener noreferrer'><Title>{project.name}</Title></TitleLink>
            <DateWrapper date={project.date_published} />
            <Paragraph>{project.summary}</Paragraph>
            <Link href={project.url} target='_blank' rel='noopener noreferrer'>{project.url_name} {genericStrings.linkArrow}</Link>
          </Col>
        </Row>
      </CellContainer>
    );
  }

}

const CellContainer = styled(Container)`
  margin: 20px 0 20px 0;
  background-color: ${props => props.theme.colors.inner_background};
  border-radius: 8px;
  padding: 22px;
  border-left: 10px solid;
  box-shadow: 0 3px 5px rgba(0, 0, 0, 0.08);
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
  font-size: 10pt;
  @media (${sm}) {
    font-size: 10pt;
  }
`;

const TitleLink = styled.a`
  color: ${props => props.theme.colors.primary} !important;
  &:hover {
    text-decoration: none;
  }
`

const Link = styled.a`
  margin-top: 20px;
  font-size: 12pt;
  font-weight: bold;
  @media (${sm}) {
    font-size: 14pt;
  }
`;

export default ProjectCell;
