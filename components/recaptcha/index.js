import React, { Component } from "react";
import { _div, _CAPTCHA } from "./_styled";

class ReCAPTCHA extends Component {
  render() {
    const { onChange, innerRef } = this.props;
    return (
      <_div>
        <_CAPTCHA
          sitekey={process.env.G_RECAPTCHA_SITE_KEY}
          onChange={onChange}
          ref={innerRef}
        />
      </_div>
    );
  }
}

export default React.forwardRef((props, ref) => (
  <ReCAPTCHA
    innerRef={ref}
    // eslint-disable-next-line react/jsx-props-no-spreading
    {...props}
  />
));
