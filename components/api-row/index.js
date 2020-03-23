import React, { Component } from "react";
import { withTheme } from "styled-components";
import { _a } from "./_styled";

class APIRow extends Component {
  render() {
    const { item, isUrl = true } = this.props;

    return (
      <tr>
        <th scope="row">
          {
            isUrl
              ? <_a href={item.url} target="_blank" rel="noopener noreferrer">{item.name}</_a>
              : <p>{item.name}</p>
          }
        </th>
        <td>{item.method}</td>
        <td>{item.description}</td>
      </tr>
    );
  }
}

export default withTheme(APIRow);
