// React
import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';
import {homeLink} from 'links';
import { errorStrings } from 'static/strings';
import { _InnerContainer, _Button } from './_styled';

class Error extends Component {

  static propTypes = {
    error: PropTypes.string
  }

  render() {
    const { error } = this.props;

    return (
      <_InnerContainer>
        <h1>{errorStrings.error}</h1>
        <p>{error}</p>
        <Link href={homeLink.url} as={homeLink.url}>
          <_Button>{errorStrings.backHome}</_Button>
        </Link>
      </_InnerContainer>
    );
  }

}

export default Error;
