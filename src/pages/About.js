// React
import React, {Component} from "react";

// Redux
import {connect} from 'react-redux';
import {addContent} from '../actions';

// Styled Components
import styled from 'styled-components';
import {sm} from '../breakpoints';

// Components
import {Container} from 'reactstrap';
import PageTitle from '../components/PageTitle';
import Title from '../components/Title';
import Paragraph from '../components/Paragraph';
import ContactForm from '../components/ContactForm';
import Loading from '../components/Loading';

// Links
import {aboutLink} from '../links';

// Strings
import {genericStrings} from '../strings';

// Helpers
import APIHelper from '../utils/APIHelper';


class About extends Component {

  constructor(props) {
    super(props);
    this.fetchAbout();
  }

  fetchAbout() {
    APIHelper.fetchAbout().then(content => {
      this.props.addContent({content});
    });
  }

  render() {
    const {contents} = this.props;
    const about = contents.about;
    return (
      <Container>
        <PageTitle>{aboutLink.title}</PageTitle>
        {this.generateBody(about)}
        <ContactForm/>
      </Container>
    );
  }

  generateBody(about) {
    if (!about) {
      return <Loading/>
    }
    return [
      <StyledImage key='image' src={about.image_url} alt={genericStrings.name}/>,
      <StyledTitle key='title'>{about.title}</StyledTitle>,
      <Paragraph key='body'>{about.text}</Paragraph>
    ];
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

function mapStateToProps({contents}) {
  return {contents}
}

function mapDispatchToProps(dispatch) {
  return {
    addContent: content => dispatch(addContent(content))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(About);
