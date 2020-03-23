import React, { Component } from "react";
import { _div, _h1, _p } from "./_styled";

class PageTitle extends Component {
  render() {
    const { title, subtitle } = this.props;
    return (
      <_div>
        <_h1>{title}</_h1>
        {
          subtitle
            ? (
              <_p>
                {subtitle.split("\n").map((i, k) => (
                  <span key={k}>
                    {i}
                    <br />
                  </span>
                ))}
              </_p>
            )
            : null
        }
      </_div>
    );
  }
}

export default PageTitle;
