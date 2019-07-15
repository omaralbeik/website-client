// React
import React, {Component} from 'react';

// Redux
import {connect} from 'react-redux';
import {addContent} from '../actions';

// Helmet
import {Helmet} from 'react-helmet';

// Styled Components
import styled from 'styled-components';
import {sm} from '../breakpoints';

// Components
import {Container} from 'reactstrap';
import PageTitle from '../components/PageTitle';
import ContactForm from '../components/ContactForm';
import Loading from '../components/Loading';
import FreeContentContainer from '../components/FreeContentContainer';

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

  componentWillMount() {
    document.title = aboutLink.documentTitle;
  }

  componentDidMount() {
    window.scrollTo(0, 0)
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
        <Helmet>
          <title>{aboutLink.documentTitle}</title>
          <meta name="description" content={about.text}/>
        </Helmet>
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
      <StyledImage key='image' src={about.image_url} alt={genericStrings.name} loader={<Loading/>}/>,
      <StyledTitle key='title'>{about.title}</StyledTitle>,
      <FreeContentContainer key='body' dangerouslySetInnerHTML={{__html: about.html_text}}/>
    ];
  }

}

const StyledImage = styled.img`
  width: 100%;
  border-radius: 8px;
  border-color: red;
`;

const StyledTitle = styled.h1`
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
