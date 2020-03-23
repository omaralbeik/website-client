import React, { Component } from "react";
import APIHelper from "utils/api-helper";
import PageTitle from "components/page-title";
import Error from "components/error";
import ProjectCell from "components/project-cell";
import SearchInput from "components/search-input";
import { projectsLink } from "links";
import { genericStrings } from "public/static/strings";
import { NextSeo } from "next-seo";

class Projects extends Component {
  static async getInitialProps() {
    try {
      const projects = await APIHelper.fetchProjects();
      const content = await APIHelper.fetchContent("projects");
      return { projects, content };
    } catch (error) {
      // eslint-disable-next-line no-console
      console.error(error);
      return { error };
    }
  }

  state = {};

  preformSearch = (query) => {
    APIHelper.searchProjects(query).then((projects) => {
      this.setState({ results: projects });
    }).catch((error) => {
      // eslint-disable-next-line no-console
      console.error(error);
    });
  }

  resetSearch = () => {
    this.setState({ results: null });
  }

  render() {
    const { error, projects, content } = this.props;
    const { results } = this.state;

    if (error) {
      return <Error error={error} />;
    }

    return (
      <div>
        <NextSeo
          title={projectsLink.documentTitle}
          description={content.meta.description}
          canonical={content.meta.canonical}
          additionalMetaTags={[{
            property: "keywords",
            content: content.meta.keywords,
          }]}
          openGraph={{
            url: projectsLink.prodUrl,
            title: projectsLink.documentTitle,
            description: projectsLink.documentTitle,
          }}
        />
        <PageTitle title={projectsLink.title} subtitle={projectsLink.subtitle} />
        <SearchInput placeholder={genericStrings.searchProjects} onInputUpdate={this.preformSearch} onReset={this.resetSearch} />
        {(results || projects).map((p) => (<ProjectCell key={p.id} project={p} />))}
      </div>
    );
  }
}

export default Projects;
