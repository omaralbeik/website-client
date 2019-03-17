// React
import React, {Component} from "react";

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

// Data
import Countries from '../data/countries';
import {contactStrings} from '../strings';

// Strings
import {EMAIL} from '../data/constants';


class ContactForm extends Component {

  render() {
    return [
      <Title key="title">{contactStrings.title}</Title>,
      <FormContainer key="form">
        <Form method='POST' action={`https://formspree.io/${EMAIL}`}>
          <FormGroup row>
            <FormLabel for='name' sm={3} hide='xs'>{contactStrings.namePlaceholder} *</FormLabel>
            <Col sm={9}>
              <FormInput type='text' name='name' id='name' placeholder={contactStrings.namePlaceholder}/>
            </Col>
          </FormGroup>
          <FormGroup row>
            <FormLabel for='email' sm={3}>{contactStrings.emailPlaceholder} *</FormLabel>
            <Col sm={9}>
              <FormInput type='email' name='email' id='email' placeholder={contactStrings.emailPlaceholder}/>
            </Col>
          </FormGroup>
          <FormGroup row>
            <FormLabel for='phone' sm={3}>{contactStrings.phonePlaceholder}</FormLabel>
            <Col sm={9}>
              <FormInput type='tel' name='phone' id='phone' placeholder={contactStrings.phonePlaceholder}/>
            </Col>
          </FormGroup>
          <FormGroup row>
            <FormLabel for='country' sm={3}>{contactStrings.countryPlaceholder}</FormLabel>
            <Col sm={9}>
              <FormInput type='select' name='country' id='country'>
                <option value=''>{contactStrings.defaultCountry}</option>
                {Countries.all.map((c, i) => (<option key={i} value={c}>{c}</option>))}
                <option>1</option>
              </FormInput>
            </Col>
          </FormGroup>
          <FormGroup row>
            <FormLabel for='city' sm={3}>{contactStrings.cityPlaceholder}</FormLabel>
            <Col sm={9}>
              <FormInput type='text' name='city' id='city' placeholder={contactStrings.cityPlaceholder}/>
            </Col>
          </FormGroup>
          <FormGroup row>
            <FormLabel for='subject' sm={3}>{contactStrings.subjectPlaceholder} *</FormLabel>
            <Col sm={9}>
              <FormInput type='text' name='subject' id='subject' placeholder={contactStrings.subjectPlaceholder}/>
            </Col>
          </FormGroup>
          <FormGroup row>
          <FormLabel for='message' sm={3}>{contactStrings.messagePlaceholder} *</FormLabel>
          <Col sm={9}>
            <FormInput type='textarea' name="message" id='message' rows={10} placeholder={contactStrings.messagePlaceholder}/>
          </Col>
        </FormGroup>
        <FormGroup row>
        <Col sm={12}>
          <SubmitButton className='float-right'>{contactStrings.submit}</SubmitButton>
        </Col>
      </FormGroup>
        </Form>
      </FormContainer>
    ];
  }
}

const Title = styled.h2`
  margin-top: 65px;
`;

const FormContainer = styled(InnerContainer)`
  padding: 50px 50px 30px 50px;
  border-radius: 8px;
  margin: 15px 0 10px 0;
  @media (${sm}) {
    padding: 20px;
  }
`;

const FormLabel = styled(Label)`
  @media (${sm}) {
    display: none;
  }
`

const FormInput = styled(Input)`
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

const SubmitButton = styled(Button)`
  @media (${sm}) {
    width: 100%;
  }
`;

export default ContactForm;
