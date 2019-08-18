import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { loadProjects } from 'redux/actions';
import APIHelper from 'utils/api-helper';
import PageTitle from 'components/page-title';
import Error from 'components/error';
import ProjectCell from 'components/project-cell';
import SearchInput from 'components/search-input';
import { projectsLink } from 'links';
import { twitter } from 'links/social';
import { genericStrings } from 'static/strings';
import { arrayFromObject, isEmpty } from 'utils';
import { NextSeo } from 'next-seo';

class Projects extends Component {

  static async getInitialProps({ store }) {
    try {
      const projects = await APIHelper.fetchProjects();
      const content = await APIHelper.fetchContent('projects');
      store.dispatch(loadProjects({ projects }));
      return { projects, content };
    }
    catch (error) {
      console.error(error);
      return { error };
    }
  }

  constructor(props) {
    super(props);
    
    var { cachedProjects } = this.props;
    cachedProjects = arrayFromObject(cachedProjects);
    cachedProjects = cachedProjects.sort((p1, p2) => (p1.date_published < p2.date_published ? 1 : -1));
    this.state = { cachedProjects };
  }

  preformSearch = query => {
    APIHelper.searchProjects(query).then(projects => {
      this.setState({ results: projects });
    }).catch(error => {
      console.error(error);
    });
  }

  resetSearch = () => {
    this.setState({ results: null });
  }

  render() {
    var { projects, content } = this.props;
    const { error } = this.props;
    const { cachedProjects, results } = this.state;

    if (error) {
      if (cachedProjects) {
        projects = cachedProjects;
      } else {
        return <Error error={error} />;
      }
    }

    if (results) {
      projects = results;
    }

    return (
      <div>
        <NextSeo
          title={projectsLink.documentTitle}
          description={content.meta.description}
          canonical={content.meta.canonical}
          additionalMetaTags={[{
            property: 'keywords',
            content: content.meta.keywords
          }]}
          openGraph={{
            url: projectsLink.prodUrl,
            title: projectsLink.documentTitle,
            description: projectsLink.documentTitle,
          }}
        />
        <PageTitle title={projectsLink.title} subtitle={projectsLink.subtitle} />
        <SearchInput placeholder={genericStrings.searchBlogPosts} onInputUpdate={this.preformSearch} onReset={this.resetSearch} />
        {projects.map(p => (<ProjectCell key={p.id} project={p} />))}
      </div>
    );
  }

}

function mapStateToProps({ projects }) {
  return { cachedProjects: projects };
}

const mapDispatchToProps = dispatch => {
  return {
    loadProjects: bindActionCreators(loadProjects, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Projects);
