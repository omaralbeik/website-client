import React, { Component } from "react";
import { _div, _span } from "./_styled";
import Moment from "react-moment";
import { genericStrings } from "public/static/strings";

class DateWrapper extends Component {
  render() {
    const {date, isRelative, readTime} = this.props;

    return (
      <_div>
        <_span>
          <Moment fromNow={isRelative} format={isRelative ? null : "MMMM YYYY"}>{date}</Moment>
          {readTime ? ` ~${readTime} ${genericStrings.read}` : null}
        </_span>
      </_div>
    );
  }

}

export default DateWrapper;
