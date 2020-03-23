import React, { Component } from "react";
import { _div, _Badge } from "./_styled";

class TechnologiesWrapper extends Component {
  render() {
    const { technologies = [] } = this.props;
    return (
      <_div>
        {technologies.map((t) => <_Badge key={t.slug}>{t.name}</_Badge>)}
      </_div>
    );
  }
}

export default TechnologiesWrapper;
