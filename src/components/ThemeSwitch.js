// React
import React, {Component} from "react";

// Redux
import {connect} from 'react-redux';
import {loadTheme} from '../actions';

// Bootstrap
import Switch from "react-switch";

// Styled Components
import styled, {withTheme} from 'styled-components';

// Themes
import { Light, Dark, getTheme, generateInfo } from '../thems';

// Media
import lightIcon from '../images/icon-light-mode.svg';
import darkIcon from '../images/icon-dark-mode.svg';


class ThemeSwitch extends Component {

  constructor() {
    super();
    this.handleChange = this.handleChange.bind(this);
  }

  loadTheme(theme) {
    this.props.loadTheme(theme);
  }

  handleChange(checked) {
    const info = generateInfo(checked ? Dark : Light);
    this.loadTheme(info)
  }

  render() {
    const info = this.props.theme;
    const theme = getTheme(info);
    const {selected} = theme.colors;
    const checked = info.style === 'dark';

    return (
      <StyledSwitch
          onChange={this.handleChange}
          checked={checked}
          width={80}
          height={34}
          onColor={selected}
          activeBoxShadow={'0 0 1px 1px' + selected}
          uncheckedIcon={<img src={lightIcon} alt='Light Mode'/>}
          checkedIcon={<img src={darkIcon} alt='Dark Mode'/>}
      />
    );
  }

}

const StyledSwitch = styled(Switch)`
  margin-left: 12px;
  margin-right: -10px;
`;

function mapStateToProps(theme) {
  return theme;
}

function mapDispatchToProps(dispatch) {
  return {
    loadTheme: theme => dispatch(loadTheme(theme))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(withTheme(ThemeSwitch));
