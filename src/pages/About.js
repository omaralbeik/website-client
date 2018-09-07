// React
import React, {Component} from "react";

// Styled Components
import styled from 'styled-components';
import {sm} from '../breakpoints';

// Components
import {Container} from 'reactstrap';
import PageTitle from '../components/PageTitle';
import Title from '../components/Title';
import Paragraph from '../components/Paragraph';
import ContactForm from '../components/ContactForm';

// Links
import {aboutLink} from '../links';

// Strings
import {genericStrings} from '../strings';

// Media
import me from '../images/omaralbeik.jpg';

class About extends Component {

  render() {
    return (
      <Container>
        <PageTitle>{aboutLink.title}</PageTitle>
        <StyledImage src={me} alt={genericStrings.name}/>
        <StyledTitle>Hello, I'm Omar</StyledTitle>
        <Paragraph>Lorem Ipsum</Paragraph>
        <ContactForm/>
      </Container>
    );
  }

}

const StyledImage = styled.img`
  width: 100%;
  border-radius: 8px;
  border-color: red;
`;

const StyledTitle = styled(Title)`
  margin-top: 30px;
  font-family: ${props => props.theme.fonts.body};
  @media (${sm}) {
    font-size: 200%;
  }
`;

export default About;
