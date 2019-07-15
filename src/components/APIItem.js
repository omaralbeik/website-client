// React
import React, {Component} from 'react';
import PropTypes from 'prop-types';

// Styled Components
import styled, {withTheme} from 'styled-components';


class APIItem extends Component {
  static propTypes = {
    item: PropTypes.object.isRequired
  }

  render() {
    const {item} = this.props;
    return (      
      <tr>
          <th scope='row'><StyledA href={item.url} target='_blank' rel='noopener noreferrer'>{item.name}</StyledA></th>
          <td>{item.method}</td>
          <td>{item.description}</td>
      </tr>
    );
  }

}

const StyledA = styled.a`
  font-family: ${props => props.theme.fonts.mono} !important;
`;

export default withTheme(APIItem);
