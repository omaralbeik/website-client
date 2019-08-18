import React, { Component } from 'react';
import PropTypes from 'prop-types';
import DateWrapper from 'components/date-wrapper';
import Loading from 'components/loading';
import TechnologiesWrapper from 'components/technologies-wrapper';
import { _div, _Container, _Col, _Row, _Img, _ImgCol, _h2, _p, _a } from './_styled.js';
import { genericStrings } from 'static/strings';
import placeholder from 'static/placeholders/project.png';

class ProjectCell extends Component {

  static propTypes = {
    project: PropTypes.object.isRequired
  }

  render() {
    const { project } = this.props;
    const { technologies = [] } = project;

    return (
      <_Container>
        <_div>
          <_Row>
            <_ImgCol md={3} lg={2}>
              <_Img src={[project.logo_url, placeholder]} alt={project.title} loader={<Loading/>} />
            </_ImgCol>
            <_Col md={9} lg={10}>
              <_h2>{project.name}</_h2>
              <DateWrapper date={project.date_published} />
              <_p>{project.summary}</_p>
              <TechnologiesWrapper technologies={technologies} />
              <_a href={project.url} target='_blank' rel='noopener noreferrer'>{project.url_name} {genericStrings.linkArrow}</_a>
            </_Col>
          </_Row>
        </_div>
      </_Container>
    );
  }

}

export default ProjectCell;
