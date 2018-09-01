// React
import React, {Component} from "react";

// Components
import {Container} from 'reactstrap';
import PageTitle from '../components/PageTitle';

// Links
import {aboutLink} from '../links';


class About extends Component {

  render() {
    return (
      <Container>
        <PageTitle>{aboutLink.title}</PageTitle>
        <p>About</p>
      </Container>
    );
  }

}

export default About;
