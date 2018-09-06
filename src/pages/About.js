// React
import React, {Component} from "react";

// Styled Components
import styled from 'styled-components';

// Components
import {Container} from 'reactstrap';
import PageTitle from '../components/PageTitle';
import Title from '../components/Title';
import Paragraph from '../components/Paragraph';
import ContactForm from '../components/ContactForm';

// Links
import {aboutLink} from '../links';


class About extends Component {

  render() {
    return (
      <Container>
        <PageTitle>{aboutLink.title}</PageTitle>
        <StyledImage/>
        <StyledTitle>Hello, I'm Omar</StyledTitle>
        <Paragraph>Lorem Ipsum</Paragraph>
        <ContactForm/>
      </Container>
    );
  }

}

const StyledImage = styled.img`
  width: 100%;
  height: 300px;
  border-radius: 12px;
  border-color: red;
`;

const StyledTitle = styled(Title)`
  margin-top: 30px;
  font-family: ${props => props.theme.fonts.body};
`;

export default About;
