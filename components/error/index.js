import React, { Component } from "react";
import Link from "next/link";
import { homeLink } from "links";
import { errorStrings } from "public/static/strings";
import { _InnerContainer, _Button } from "./_styled";

class Error extends Component {
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
