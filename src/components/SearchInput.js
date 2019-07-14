// React
import React, {Component} from 'react';

// Bootstrap
import {Input, Button} from 'reactstrap';

// Styled Components
import styled from 'styled-components';
import {sm} from '../breakpoints';

// Strings
import {genericStrings} from '../strings';


class SearchInput extends Component {

  constructor(props) {
    super(props);
    
    this.renderClearButton = this.renderClearButton.bind(this);
  }

  renderClearButton() {
    const {onReset} = this.props;
    let {value} = this.props;
    value = value.trim();
    if (value) {
      return <StyledButton onClick={onReset}>{genericStrings.clear}</StyledButton>
    }
  }

  render() {
    const {snippet, ...props} = this.props;
    
    return (
      <StyledDiv>
        <StyledInput {...props}/>
        {this.renderClearButton()}
      </StyledDiv>
    );
  }
}

const StyledDiv = styled.div`
  display: flex;
  flex-direction: row;
`;

const StyledButton = styled(Button)`
  margin-left: 10px;
`;

const StyledInput = styled(Input)`
  background-color: ${props => props.theme.colors.inner_background};
  color: ${props => props.theme.colors.primary};
  font-family: ${props => props.theme.fonts.body};
  border: 2px ${props => props.theme.colors.inner_background} solid;
  height: 45px;
  width: 38%;
  margin-left: auto;
  margin-bottom: 20px;
  :focus {
    background-color: ${props => props.theme.colors.background};
    color: ${props => props.theme.colors.primary};
    border: 2px ${props => props.theme.colors.inner_primary} solid;
    -webkit-box-shadow: none;
    box-shadow: none;
  }
  @media (${sm}) {
    width: 100%;
  }
`;


export default SearchInput;
