// React
import React, {Component} from 'react';
import PropTypes from 'prop-types';

// Bootstrap
import {Input, Button} from 'reactstrap';

// Styled Components
import styled from 'styled-components';
import {sm} from '../breakpoints';

// Strings
import {genericStrings} from '../strings';

// Input
import {throttle, debounce} from 'throttle-debounce';


class SearchInput extends Component {
  static propTypes = {
    placeholder: PropTypes.string,
    onReset: PropTypes.func,
    onInputUpdate: PropTypes.func
  }

  constructor(props) {
    super(props);
    
    this.searchDebounced = debounce(500, this.search);
    this.searchThrottled = throttle(500, this.search);
    this.state = {q: ""};
  }

  changeQuery = event => {
    this.setState({ q: event.target.value }, _ => {
      const timmedQuery = this.state.q.trim();
      if (timmedQuery.length > 0 && timmedQuery.length < 5) {
        this.searchThrottled(timmedQuery);
      } else {
        this.searchDebounced(timmedQuery);
      }
    });
  };

  search = query => {
    const {onReset, onInputUpdate} = this.props;
    const timmedQuery = query.trim()
    if (timmedQuery.length === 0) {
      onReset();
    } else {
      onInputUpdate(timmedQuery);
    }
  }

  keyPress = event => {
    if (event.keyCode !== 13) { return; }
    event.target.blur();
    const query = event.target.value.trim();
    const {onReset, onInputUpdate} = this.props;
    if (query.length === 0) {
      onReset();
    } else {
      onInputUpdate(query);
    }
  }

  reset = _ => {
    const {onReset} = this.props;
    this.setState({q: ""})
    onReset();
  }

  renderClearButton = _ => {
    const trimmedQuery = this.state.q.trim();
    if (trimmedQuery) {
      return <StyledButton onClick={this.reset}>{genericStrings.clear}</StyledButton>
    }
  }

  render() {
    const {placeholder} = this.props;
    const {q} = this.state;

    return (
      <StyledDiv>
        <StyledInput placeholder={placeholder} value={q} onChange={this.changeQuery} onKeyDown={this.keyPress}/>
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
