import React, { Component } from "react";
import { _div, _Badge } from "./_styled";

class TagsWrapper extends Component {
  render() {
    const { tags = [] } = this.props;
    return (
      <_div>
        {tags.map((t) => <_Badge key={t.slug}>{t.name}</_Badge>)}
      </_div>
    );
  }
}

export default TagsWrapper;
