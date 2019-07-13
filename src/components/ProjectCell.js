// React
import React, {Component} from 'react';
import PropTypes from 'prop-types';

// Bootstrap
import {Container, Row, Col} from 'reactstrap';
import {sm} from '../breakpoints';

// Styled Components
import styled from 'styled-components';

// Components
import DateWrapper from './DateWrapper';
import Loading from './Loading';
import Technologies from './Technologies'

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
      <StyledContainer>
        <Row>
          <StyledCol md={3} lg={2}>
            <a href={project.url} target='_blank' rel='noopener noreferrer'>
              <StyledImage src={[project.logo_url, placeholder]} alt={project.title} loader={<Loading/>}/>
            </a>
          </StyledCol>
          <Col md={9} lg={10}>
            <StyledA1 href={project.url} target='_blank' rel='noopener noreferrer'><StyledH2>{project.name}</StyledH2></StyledA1>
            <DateWrapper date={project.date_published} />
            <StyledP>{project.summary}</StyledP>
            <Technologies technologies={project.technologies}/>
            <StyledA2 href={project.url} target='_blank' rel='noopener noreferrer'>{project.url_name} {genericStrings.linkArrow}</StyledA2>
          </Col>
        </Row>
      </StyledContainer>
    );
  }

}

const StyledContainer = styled(Container)`
  margin: 20px 0 20px 0;
  background-color: ${props => props.theme.colors.inner_background};
  border-radius: 8px;
  padding: 22px;
  box-shadow: 0 3px 5px rgba(0, 0, 0, 0.05);
  border-left: 10px solid;
  border-right: 0 transparent solid;
  transition: 0.25s;
  :hover {
    border-left: 0 solid;
    border-right: 10px transparent solid;
  }
`;

const StyledCol = styled(Col)`
  @media (${sm}) {
    display: none;
  }
`;

const StyledImage = styled(Img)`
  border-radius: 10px;
  width: 100%;
  margin-top: 0;
  margin-bottom: auto;
`;

const StyledH2 = styled.h2`
  margin: 10px 0 4px 0;
  max-width: 100%;
  font-weight: bold;
  text-overflow: ellipsis;
  @media (${sm}) {
    max-width: 100%;
    font-size: 125%;
  }
`;

const StyledP = styled.p`
  margin: 20px 0 12px 0;
  font-size: 10pt;
  @media (${sm}) {
    font-size: 10pt;
  }
`;

const StyledA1 = styled.a`
  color: ${props => props.theme.colors.primary} !important;
  &:hover {
    text-decoration: none;
  }
`

const StyledA2 = styled.a`
  margin-top: 20px;
  font-size: 12pt;
  font-weight: bold;
  @media (${sm}) {
    font-size: 12pt;
  }
`;

export default ProjectCell;
