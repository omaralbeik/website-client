// React
import React, {Component} from 'react';

// Redux
import {connect} from 'react-redux';
import {loadProjects} from '../actions';

// Bootstrap
import {Container} from 'reactstrap';

// Components
import ProjectCell from '../components/ProjectCell';
import PageTitle from '../components/PageTitle';
import ErrorContainer from '../components/ErrorContainer'

// Links
import {portfolioLink} from '../links';

// Helpers
import {arrayFromObject} from '../utils';
import APIHelper from '../utils/APIHelper';

class Portfolio extends Component {

  constructor(props) {
    super(props);
    this.state = { error: null };
    this.fetchProjects();
  }

  componentWillMount() {
    document.title = portfolioLink.documentTitle;
  }

  componentDidMount() {
    window.scrollTo(0, 0)
  }

  fetchProjects() {
    APIHelper.fetchProjects().then(projects => {
      this.props.loadProjects({projects})
    }).catch(error => {
      const {projects} = this.props;
      const isEmpty = Object.getOwnPropertyNames(projects).length === 0;
      if (isEmpty) {
        this.setState({error: error});
      }
    });
  }

  render() {
    const {error} = this.state;
    if (error) {
      return (
        <ErrorContainer error={error}/>
      );
    }

    const {projects} = this.props;
    const projectsArray = arrayFromObject(projects)
    const sortedProjects = projectsArray.sort((p1, p2) => (p1.date_published < p2.date_published ? 1 : -1))

    return (
      <Container>
        <PageTitle>{portfolioLink.title}</PageTitle>
        {sortedProjects.map(p => (<ProjectCell key={p.id} project={p}/>))}
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
