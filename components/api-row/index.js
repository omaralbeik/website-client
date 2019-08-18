import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { _a } from './_styled';
import { withTheme } from 'styled-components';

class APIRow extends Component {

  static propTypes = {
    item: PropTypes.object.isRequired,
    isUrl: PropTypes.bool
  }

  render() {
    const { item, isUrl=true } = this.props;
    
    return (
      <tr>
        <th scope='row'>
          {
            isUrl
            ? <_a href={item.url} target='_blank' rel='noopener noreferrer'>{item.name}</_a>
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
