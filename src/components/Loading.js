// React
import React, {Component} from 'react';

// Styled Components
import styled, {withTheme} from 'styled-components';

// Components
import ReactLoading from 'react-loading';

class Loading extends Component {

  render() {
    const {highlighted} = this.props.theme.colors;
    return (
      <StyledLoading type='spin' color={highlighted}/>
    );
  }

}

const StyledLoading = styled(ReactLoading)`
  margin: 30px auto;
`;

export default withTheme(Loading);
