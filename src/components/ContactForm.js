// React
import React, {Component} from 'react';

// Bootstrap
import {
  Col,
  Form,
  FormGroup,
  Label,
  Input,
  Button
} from 'reactstrap';

// Styled Components
import styled from 'styled-components';
import {sm} from '../breakpoints';

// Components
import InnerContainer from './InnerContainer';
import PageTitle from './PageTitle'

// Data
import Countries from '../data/countries';
import {contactStrings} from '../strings';

// Strings
import {EMAIL} from '../data/constants';


class ContactForm extends Component {

  render() {
    return [
      <PageTitle key="title">{contactStrings.title}</PageTitle>,
      <FormContainer key="form">
        <Form method='POST' action={`https://formspree.io/${EMAIL}`}>
          <FormGroup row>
            <StyledLabel for='name' sm={3} hide='xs'>{contactStrings.namePlaceholder} *</StyledLabel>
            <Col sm={9}>
              <StyledInput type='text' name='name' id='name' placeholder={contactStrings.namePlaceholder}/>
            </Col>
          </FormGroup>
          <FormGroup row>
            <StyledLabel for='email' sm={3}>{contactStrings.emailPlaceholder} *</StyledLabel>
            <Col sm={9}>
              <StyledInput type='email' name='email' id='email' placeholder={contactStrings.emailPlaceholder}/>
            </Col>
          </FormGroup>
          <FormGroup row>
            <StyledLabel for='phone' sm={3}>{contactStrings.phonePlaceholder}</StyledLabel>
            <Col sm={9}>
              <StyledInput type='tel' name='phone' id='phone' placeholder={contactStrings.phonePlaceholder}/>
            </Col>
          </FormGroup>
          <FormGroup row>
            <StyledLabel for='country' sm={3}>{contactStrings.countryPlaceholder}</StyledLabel>
            <Col sm={9}>
              <StyledInput type='select' name='country' id='country'>
                <option value=''>{contactStrings.defaultCountry}</option>
                {Countries.all.map((c, i) => (<option key={i} value={c}>{c}</option>))}
                <option>1</option>
              </StyledInput>
            </Col>
          </FormGroup>
          <FormGroup row>
            <StyledLabel for='city' sm={3}>{contactStrings.cityPlaceholder}</StyledLabel>
            <Col sm={9}>
              <StyledInput type='text' name='city' id='city' placeholder={contactStrings.cityPlaceholder}/>
            </Col>
          </FormGroup>
          <FormGroup row>
            <StyledLabel for='subject' sm={3}>{contactStrings.subjectPlaceholder} *</StyledLabel>
            <Col sm={9}>
              <StyledInput type='text' name='subject' id='subject' placeholder={contactStrings.subjectPlaceholder}/>
            </Col>
          </FormGroup>
          <FormGroup row>
          <StyledLabel for='message' sm={3}>{contactStrings.messagePlaceholder} *</StyledLabel>
          <Col sm={9}>
            <StyledInput type='textarea' name="message" id='message' rows={10} placeholder={contactStrings.messagePlaceholder}/>
          </Col>
        </FormGroup>
        <FormGroup row>
        <Col sm={12}>
          <StyledButton className='float-right'>{contactStrings.submit}</StyledButton>
        </Col>
      </FormGroup>
        </Form>
      </FormContainer>
    ];
  }
}

const FormContainer = styled(InnerContainer)`
  padding: 50px 50px 30px 50px;
  border-radius: 8px;
  margin: 15px 0 10px 0;
  border-top: 10px solid;
  box-shadow: 0 3px 5px rgba(0, 0, 0, 0.05);
  @media (${sm}) {
    padding: 20px;
  }
`;

const StyledLabel = styled(Label)`
  @media (${sm}) {
    display: none;
  }
`

const StyledInput = styled(Input)`
  background-color: ${props => props.theme.colors.background};
  color: ${props => props.theme.colors.primary};
  border: none;
  box-shadow: none;
  -webkit-appearance: none;

  &:focus {
    background-color: ${props => props.theme.colors.background};
    border: 1px solid ${props => props.theme.colors.highlighted};
    color: ${props => props.theme.colors.primary};
    box-shadow: none;
  }
`

const StyledButton = styled(Button)`
  @media (${sm}) {
    width: 100%;
  }
`;

export default ContactForm;
