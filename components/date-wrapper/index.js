import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { _div, _span } from './_styled';
import Moment from 'react-moment';
import { genericStrings } from 'static/strings';

class DateWrapper extends Component {

  static propTypes = {
    date: PropTypes.string.isRequired,
    isRelative: PropTypes.bool
  }

  render() {
    const {date, isRelative, readTime} = this.props;

    return (
      <_div>
        <_span>
          <Moment fromNow={isRelative} format={isRelative ? null : 'MMMM YYYY'}>{date}</Moment>
          {readTime ? ` ~${readTime} ${genericStrings.read}` : null}
        </_span>
      </_div>
    );
  }

}

export default DateWrapper;
