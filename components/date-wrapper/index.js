import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { _div, _Moment } from './_styled';

class DateWrapper extends Component {

  static propTypes = {
    date: PropTypes.string.isRequired,
    isRelative: PropTypes.bool
  }

  render() {
    const {date, isRelative} = this.props;

    return (
      <_div>
        <_Moment fromNow={isRelative} format={isRelative ? null : 'MMMM YYYY'}>{date}</_Moment>
      </_div>
    );
  }

}

export default DateWrapper;
