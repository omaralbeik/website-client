import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Toast from 'cogo-toast';
import { _h2, _InnerContainer, _Col, _Form, _FormGroup, _Label, _Input, _Button } from './_styled';
import { countries, contactStrings } from 'static/strings';
import ReCAPTCHA from 'components/recaptcha';
import APIHelper from 'utils/api-helper';

class ContactForm extends Component {

    initialState = {
      name: "",
      email: "",
      phone: "",
      country: "",
      city: "",
      subject: "",
      message: "",
      is_valid: false
    }
    state = this.initialState;
    reCaptchaRef = React.createRef();

  handleChange = async event => {
    const { name, value } = event.target;
    await this.setState(oldState => ({
      ...oldState,
      [name]: value
    }));
  }

  onReCAPTCHAChange = response => {
    this.setState(oldState => ({
      ...oldState,
      recaptcha_response: response
    }));
  }

  showAlert = (message, success) => {
    const options = { position: 'bottom-center', hideAfter: 5 };
    if (success) {
      Toast.success(message, options);
    } else {
      Toast.error(message, options);
    }
  }

  handleSubmit = async event => {
    event.preventDefault();
    try {
      const message = await APIHelper.sendContactMessage(this.state);
      this.setState(this.initialState);
      this.reCaptchaRef.current.reset();
      this.showAlert(contactStrings.success, true);
    }
    catch (error) {
      console.error(error);
      this.showAlert(error, false);
    }
  }

  render() {
    const { onSubmit } = this.props;
    const { name, email, phone, country, city, subject, message, recaptcha_response } = this.state;
    const isValid = (name && email && subject && message && recaptcha_response);

    return (
      <div>
        <_InnerContainer>
          <_Form onSubmit={this.handleSubmit}>
            <_FormGroup row>
              <_Label for='name' md={3} hide='xs'>{contactStrings.namePlaceholder} *</_Label>
              <_Col md={9} sm={12}>
                <_Input type='text' name='name' id='name'
                  placeholder={contactStrings.namePlaceholder}
                  value={name}
                  onChange={this.handleChange}
                />
              </_Col>
            </_FormGroup>
            <_FormGroup row>
              <_Label for='email' md={3} hide='xs'>{contactStrings.emailPlaceholder} *</_Label>
              <_Col md={9} sm={12}>
                <_Input type='email' name='email' id='email'
                  placeholder={contactStrings.emailPlaceholder}
                  value={email}
                  onChange={this.handleChange}
                />
              </_Col>
            </_FormGroup>
            <_FormGroup row>
              <_Label for='phone' md={3} hide='xs'>{contactStrings.phonePlaceholder}</_Label>
              <_Col md={9} sm={12}>
                <_Input type='tel' name='phone' id='phone'
                  placeholder={contactStrings.phonePlaceholder}
                  value={phone}
                  onChange={this.handleChange}
                />
              </_Col>
            </_FormGroup>
            <_FormGroup row>
              <_Label for='country' md={3} hide='xs'>{contactStrings.countryPlaceholder}</_Label>
              <_Col md={9} sm={12}>
                <_Input type='select' name='country' id='country' value={country} onChange={this.handleChange}>
                  <option value=''>{contactStrings.defaultCountry}</option>
                    {countries.map((c, i) => (<option key={i} value={c}>{c}</option>))}
                  <option>1</option>
                </_Input>
              </_Col>
            </_FormGroup>
            <_FormGroup row>
              <_Label for='city' md={3} hide='xs'>{contactStrings.cityPlaceholder}</_Label>
              <_Col md={9} sm={12}>
                <_Input type='text' name='city' id='city'
                  placeholder={contactStrings.cityPlaceholder}
                  value={city}
                  onChange={this.handleChange}
                />
              </_Col>
            </_FormGroup>
            <_FormGroup row>
              <_Label for='subject' md={3} hide='xs'>{contactStrings.subjectPlaceholder} *</_Label>
              <_Col md={9} sm={12}>
                <_Input type='text' name='subject' id='subject'
                  placeholder={contactStrings.subjectPlaceholder}
                  value={subject}
                  onChange={this.handleChange}
                />
              </_Col>
            </_FormGroup>
            <_FormGroup row>
              <_Label for='message' md={3} hide='xs'>{contactStrings.messagePlaceholder} *</_Label>
              <_Col md={9} sm={12}>
                <_Input type='textarea' name="message" id='message' rows={10}
                  placeholder={contactStrings.messagePlaceholder}
                  value={message}
                  onChange={this.handleChange}
                />
              </_Col>
            </_FormGroup>
            <ReCAPTCHA onChange={this.onReCAPTCHAChange} ref={this.reCaptchaRef} />
            <_FormGroup row>
              <_Col sm={12}>
                <_Button disabled={!isValid} className='float-right'>{contactStrings.submit}</_Button>
              </_Col>
            </_FormGroup>
          </_Form>
        </_InnerContainer>
      </div>
    );
  }
}

export default ContactForm;
