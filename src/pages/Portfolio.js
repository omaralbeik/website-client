// React
import React, {Component} from "react";

// Bootstrap
import {Container} from 'reactstrap';

// Components
import ProjectCell from '../components/ProjectCell';


class Portfolio extends Component {

  render() {
    const project = {
      id: 1,
      title: "Lorem Ipsum Dolor Sit Amet",
      date: "1976-04-19T12:59-0500",
      summary: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor …"
    };

    return (
      <Container>
        <ProjectCell project={project}/>
        <ProjectCell project={project}/>
        <ProjectCell project={project}/>
        <ProjectCell project={project}/>
      </Container>
    );
  }

}

export default Portfolio;
