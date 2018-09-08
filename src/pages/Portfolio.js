// React
import React, {Component} from "react";

// Redux
import {connect} from 'react-redux';
import {loadProjects} from '../actions';

// Bootstrap
import {Container} from 'reactstrap';

// Components
import ProjectCell from '../components/ProjectCell';
import PageTitle from '../components/PageTitle';

// Links
import {portfolioLink} from '../links';

// Helpers
import {arrayFromObject} from '../utils';
import APIHelper from '../utils/APIHelper';

class Portfolio extends Component {

  constructor(props) {
    super(props);
    this.fetchProjects();
  }

  fetchProjects() {
    APIHelper.fetchProjects().then(projects => {
      this.props.loadProjects({projects})
    })
  }

  render() {
    const {projects} = this.props;
    const projectsArray = arrayFromObject(projects)

    return (
      <Container>
        <PageTitle>{portfolioLink.title}</PageTitle>
        {projectsArray.map(p => (<ProjectCell key={p.id} project={p}/>))}
      </Container>
    );
  }

}

function mapStateToProps({projects}) {
  return {projects}
}

function mapDispatchToProps(dispatch) {
  return {
    loadProjects: projects => dispatch(loadProjects(projects))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Portfolio);
