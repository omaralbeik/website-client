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
import SearchInput from '../components/SearchInput';

// Links
import {portfolioLink} from '../links';

// Helpers
import {arrayFromObject} from '../utils';
import APIHelper from '../utils/APIHelper';

// Input
import { throttle, debounce } from 'throttle-debounce';

// Strings
import {genericStrings} from '../strings';


class Portfolio extends Component {

  constructor(props) {
    super(props);

    this.state = {
      error: null,
      modal: false,
      q: "",
      results: null
    };
    
    this.fetchProjects();

    this.searchDebounced = debounce(500, this.search);
    this.searchThrottled = throttle(500, this.search);

    this.keyPress = this.keyPress.bind(this);
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

  changeQuery = event => {
    this.setState({ q: event.target.value }, () => {
      const q = this.state.q;
      if (q.length < 5) {
        this.searchThrottled(this.state.q);
      } else {
        this.searchDebounced(this.state.q);
      }
    });
  };

  search(query) {
    query = query.trim()
    if (query.length === 0) {
      this.setState({results: null});
      return;
    }
    APIHelper.searchProject(query).then(snippets => {
      this.setState({results: snippets});
    }).catch(error => {
      console.error(error);
    });
  }

  resetSearch() {
    this.setState({q: "", results:null});
  }

  keyPress(event) {
    if (event.keyCode === 13) {
       this.search(event.target.value);       
    }
  }

  render() {
    const {q, error, results} = this.state;
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

    return (
      <Container>
        <PageTitle>{portfolioLink.title}</PageTitle>
        <SearchInput placeholder={genericStrings.searchProjects} value={q} onChange={this.changeQuery} onKeyDown={this.keyPress} onReset={this.resetSearch}/>
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
