// React
import React, {Component} from 'react';

// Redux
import {connect} from 'react-redux';
import {loadProjects} from '../actions';

// Helmet
import {Helmet} from 'react-helmet';

// Bootstrap
import {Container} from 'reactstrap';

// Components
import ProjectCell from '../components/ProjectCell';
import PageTitle from '../components/PageTitle';
import ErrorContainer from '../components/ErrorContainer'
import SearchInput from '../components/SearchInput';

// Links
import {portfolioLink} from '../links';

// Helpers
import {arrayFromObject} from '../utils';
import APIHelper from '../utils/APIHelper';

// Strings
import {genericStrings} from '../strings';


class Portfolio extends Component {

  constructor(props) {
    super(props);

    this.state = {
      error: null,
      modal: false,
      results: null
    };
    
    this.fetchProjects();

    this.preformSearch = this.preformSearch.bind(this);
    this.resetSearch = this.resetSearch.bind(this);
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

  preformSearch(query) {
    APIHelper.searchProject(query).then(snippets => {
      this.setState({results: snippets});
    }).catch(error => {
      console.error(error);
    });
  }

  resetSearch() {
    this.setState({q: "", results: null});
  }

  render() {
    const {error, results} = this.state;
    if (error) {
      return (
        <ErrorContainer error={error}/>
      );
    }

    const {projects} = this.props;
    const projectsArray = arrayFromObject(projects)
    let sortedProjects = projectsArray.sort((p1, p2) => (p1.date_published < p2.date_published ? 1 : -1))

    if (results) {
      sortedProjects = results
    }

    let technologies = [];
    sortedProjects.forEach(p => { technologies = technologies.concat(p.technologies) });
    technologies = technologies.map(t => t.name);
    technologies = [...new Set(technologies)];
    
    return (
      <Container>
        <Helmet>
          <title>{portfolioLink.documentTitle}</title>
          <meta name="keywords" content={technologies.join(',')}/>
        </Helmet>
        <PageTitle>{portfolioLink.title}</PageTitle>
        <SearchInput placeholder={genericStrings.searchProjects} onInputUpdate={this.preformSearch} onReset={this.resetSearch}/>
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
