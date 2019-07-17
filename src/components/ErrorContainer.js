// React
import React, {Component} from 'react';
import PropTypes from 'prop-types';

// Styled Components
import styled from 'styled-components';

// Bootstrap
import {Button} from 'reactstrap';

// Components
import InnerContainer from './InnerContainer';

// Routing & Links
import {NavLink} from 'react-router-dom';
import {homeLink} from '../links';

// Strings
import {errorStrings} from '../strings';


class ErrorContainer extends Component {
  static propTypes = {
    error: PropTypes.string
  }

  render() {
    const {error} = this.props;
    return (
      <StyledContainer>
        <h1>{errorStrings.error}</h1>
        <p>{error}</p>
        <NavLink to={homeLink.url}>
          <Button>{errorStrings.backHome}</Button>
        </NavLink>
      </StyledContainer>
    );
  }

}

const StyledContainer = styled(InnerContainer)`
  text-align: center;
  margin-top: 35px;
  padding: 100px 20px;
  border-radius: 8px;
`;

export default ErrorContainer;
