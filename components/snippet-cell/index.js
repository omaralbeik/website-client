import React, { Component } from "react";
import { withTheme } from "styled-components";
import {
  _Container, _Col, _Badge, _div,
} from "./_styled";

class SnippetCell extends Component {
  handleClick = () => {
    const { snippet, onClick } = this.props;
    if (onClick) {
      onClick(snippet);
    }
  }

  render() {
    const { snippet } = this.props;
    const { style } = this.props.theme;
    const syntaxClassName = style === "dark" ? "dark-code" : "light-code";

    return (
      <_Col xs={12} md={6} lg={4} onClick={this.handleClick}>
        <_Container>
          <h2>
            {snippet.name}
            {" "}
            <_Badge>{snippet.language.name}</_Badge>
          </h2>
          <p>{snippet.summary}</p>
          <_div ref={snippet.id} dangerouslySetInnerHTML={{ __html: snippet.html_text }} className={syntaxClassName} />
        </_Container>
      </_Col>
    );
  }
}

export default withTheme(SnippetCell);
