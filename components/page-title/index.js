import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { _div, _h1, _p } from './_styled';

class PageTitle extends Component {

  static propTypes = {
    title: PropTypes.string.isRequired,
    subtitle: PropTypes.string,
  }

  render() {
    const { title, subtitle } = this.props;
    return (
      <_div>
        <_h1>{title}</_h1>
        {
          subtitle
          ? <_p>{subtitle.split('\n').map((i, k) => <span key={k}>{i}<br/></span>)}</_p>
          : null
        }
      </_div>
    );
  }

}

export default PageTitle;
